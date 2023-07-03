import styled from "styled-components";
import { useForm } from "react-hook-form";
import moment from "moment/moment";
import { useEffect, useState, useCallback } from "react";
import Breadcrumb from "../../components/sidebar/Breadcrumb";
import InnerSidebar from "../../components/sidebar/InnerSidebar";
import Chart from "./Chart";
import OrderTable from "./OrderTable";
import useOrder from "../../store/orderList";
import useMonth from "../../store/month";
import useApiSubmit from "../../customhooks/hooks/useApiSubmit";

const Container = styled.div`
  display: flex;
  min-height: 100%;
  position: relative;
  left: 280px;
  width: calc(100% - 280px);

  @media (max-width: 768px) {
    width: calc(100% - 70px);
    left: 70px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 54px;
  background-color: var(--background);
`;

const MONTHS_LIST = [];

moment.locale("en");

const Dashboard = () => {
  const [date, setDate] = useState({ firstDate: null, lastDate: null });
  const { response, doSubmit } = useApiSubmit({
    method: "GET",
    url: `/admin/order/reports?from=${date.firstDate}&until=${date.lastDate}`,
    headers: {
      accept: "application/json",
      access_token: JSON.parse(localStorage.getItem("adminCredential")),
    },
  });

  const { register, handleSubmit } = useForm();
  const { orderList, setOrderList } = useOrder((state) => state);
  const { month, setMonth } = useMonth((state) => state);

  const onSubmit = useCallback(async (data) => {
    const selectedDate = data?.date?.split(",");
    const firstDate = selectedDate[0]?.trim();
    const lastDate = selectedDate[1]?.trim();

    setDate((prevState) => ({
      ...prevState,
      firstDate: firstDate,
      lastDate: lastDate,
    }));
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (date.firstDate && date.lastDate) {
        await doSubmit();
      }
    }

    fetchData();
  }, [date]);

  useEffect(() => {
    if (response) {
      setOrderList({
        orderList: response,
        total: response?.length,
      });
    }
  }, [response]);

  const activeMonth = moment(month?.split(",")[0]).format("MMMM YYYY");

  for (let i = 0; i < 12; i++) {
    const month = moment().subtract(i, "month").format("MMMM YYYY");
    const startOfMonth = moment()
      .subtract(i, "month")
      .startOf("month")
      .format("YYYY-MM-DD");
    const endOfMonth = moment()
      .subtract(i, "month")
      .endOf("month")
      .format("YYYY-MM-DD");

    let monthObj = {
      monthValue: month,
      firstDate: startOfMonth,
      lastDate: endOfMonth,
    };

    if (MONTHS_LIST.length >= 12) {
      break;
    } else {
      MONTHS_LIST.push(monthObj);
    }
  }

  return (
    <Container>
      <InnerSidebar />
      <Wrapper>
        <div className="d-flex flex-column p-4 gap-4">
          <Breadcrumb dashboard />
          <div>
            <div className="d-flex gap-2 mb-2">
              <div
                style={{
                  width: "4px",
                  height: "24px",
                  backgroundColor: "var(--primaryBlue)",
                }}
              />
              <p className="fw-bold">Rented Car Data Visualization</p>
            </div>
            <div className="mb-4">
              <p className="mb-2">Month</p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="d-flex align-items-center"
              >
                <select
                  {...register("date")}
                  className="w-25 border border-dark border-opacity-25 p-1"
                  style={{ height: "50px" }}
                  onChange={(e) => setMonth({ month: e.target.value })}
                  defaultValue={month}
                >
                  <option value="" hidden>
                    Pilih Bulan
                  </option>
                  {MONTHS_LIST.map((item, index) => {
                    const { monthValue, firstDate, lastDate } = item;
                    return (
                      <option
                        key={index}
                        name={monthValue}
                        value={`${firstDate}, ${lastDate}`}
                      >
                        {monthValue}
                      </option>
                    );
                  })}
                </select>
                <button
                  className="text-white py-1 border border-dark border-opacity-25 px-3 rounded-end"
                  style={{
                    backgroundColor: "var(--primaryBlue)",
                    height: "50px",
                  }}
                  type="submit"
                >
                  Go
                </button>
              </form>
            </div>
            <Chart data={orderList} />
          </div>
          <div>
            <h5 className="fw-bold mb-3">Dashboard</h5>
            <div className="d-flex gap-2 mb-2">
              <div
                style={{
                  width: "4px",
                  height: "24px",
                  backgroundColor: "var(--primaryBlue)",
                }}
              />
              <p className="fw-bold">List Order</p>
            </div>
            <OrderTable activeMonth={activeMonth} orderList={orderList} />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
export default Dashboard;
