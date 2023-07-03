import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { TableFooter } from "@mui/material";

import OrderData from "./OrderData";
import moment from "moment/moment";
import useCarOrder from "../../store/carOrderList";
import useApi from "../../customhooks/hooks/useApi";

function descendingComparator(a, b, orderBy) {
  if (orderBy === "User") {
    if (b[orderBy].email.toLowerCase() < a[orderBy].email.toLowerCase()) {
      return -1;
    }
    if (b[orderBy].email > a[orderBy].email) {
      return 1;
    }
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    label: "No",
    numeric: true,
  },
  {
    id: "User",
    label: "User Email",
    numeric: false,
  },
  {
    id: "car",
    label: "Car",
    numeric: false,
  },
  {
    id: "start_rent_at",
    label: "Start Rent",
    numeric: false,
  },
  {
    id: "finish_rent_at",
    label: "Finish Rent",
    numeric: false,
  },
  {
    id: "total_price",
    label: "Price",
    numeric: true,
  },
  {
    id: "category",
    label: "Category",
    numeric: false,
  },
];

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ backgroundColor: "#CFD4ED" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const OrderTable = ({ activeMonth, orderList }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredOrderList, setFilteredOrderList] = useState([]);

  const { orders, setOrders } = useCarOrder((state) => state);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders?.length) : 0;

  const { response, isLoading } = useApi({
    method: "GET",
    url: "/admin/v2/order?sort=created_at%3Aasc&page=1&pageSize=1000",
    headers: {
      accept: "application/json",
      access_token: JSON.parse(localStorage.getItem("adminCredential")),
    },
  });

  useEffect(() => {
    if (!isLoading) {
      setOrders({
        orders: response?.orders,
        total: response?.orders?.length,
      });
    }
  }, [isLoading]);

  useEffect(() => {
    const filtered = orders?.filter((item) => {
      const { start_rent_at } = item || {};

      return moment(start_rent_at).format("MMMM YYYY") === activeMonth;
    });

    setFilteredOrderList(filtered);
  }, [orderList]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-labelledby="tableTitle">
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={orders?.length}
        />
        <TableBody>
          {stableSort(filteredOrderList, getComparator(order, orderBy))
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((item) => {
              return <OrderData key={item.id} {...item} />;
            })}
          {emptyRows > 0 && (
            <TableRow
              style={{
                height: 53 * emptyRows,
              }}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={orders?.length}
              rowsPerPage={rowsPerPage}
              colSpan={8}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
