import { debounce } from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import useSearch from "../../store/searchResult";

const Navbar = ({ sidebarWidth }) => {
  const [searchValue, setSearchValue] = useState("");

  const setSearchResult = useSearch((state) => state.setSearchResult);

  const onSearch = debounce(() => {
    setSearchResult({
      searchResult: searchValue,
    });
  }, 1000);

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("adminCredential");
    navigate("/login");
  };

  return (
    <nav
      className="navbar fixed-top shadow-sm bg-white"
      style={{ left: sidebarWidth }}
    >
      <div className="container-fluid">
        <div className="d-none d-lg-flex" style={{ gap: "5.5rem" }}>
          <button className="border-0 bg-transparent">
            <img src={logo} alt="logo" />
          </button>
          <button className="border-0 bg-transparent">
            <img src={menu} alt="menu" />
          </button>
        </div>
        <div className="d-flex align-items-center gap-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="btn fw-bold"
              type="button"
              style={{
                color: "var(--primaryBlue)",
                borderColor: "var(--primaryBlue)",
              }}
              onClick={() => onSearch()}
            >
              Search
            </button>
          </form>
          <div className="d-flex align-items-center gap-2 px-5">
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                height: "30px",
                width: "30px",
                backgroundColor: "var(--hoverBlue)",
              }}
            >
              <p className="fw-bold ">A</p>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin BCR
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => onLogout()}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
