import React, { useState } from "react";
import "./HeaderSection.css";
import { Input } from "antd";
import {
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import DropdownLink from "../dropdown/DropdownLink";

function HeaderSection() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1 menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          2 menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          3 menu item
        </a>
      ),
    },
  ];

  return (
    <div className="headerSection">
      <div className="headerSection__container">
        <div className="headerSection__staticHeader">
          Welcome to the static header
        </div>

        <div className="headerSection__navbar">
          {/*Navbar Left*/}
          <div className="headerSection__navbarLeft">
            <div>
              <FiSearch />
            </div>
            <div>
              <Input placeholder="Search" />
            </div>
          </div>

          {/*Navbar Right*/}
          <div claassName="headerSection__navbarRight">
            <ul
              className={
                click
                  ? "headerSection__navbarRightMobile"
                  : "headerSection__navbarRightWeb"
              }
            >
              <div>Account No.</div>
              <div>Customer Details</div>
              <div>Batch No.</div>
              <div className="headerSection__avatar">
                <div>
                  <FiUser />
                </div>
                <div>Inloggen</div>
              </div>

              <div className="headerSection__amount">$3,200</div>

              <div>
                <FiShoppingCart />
              </div>

              <div>NL</div>
            </ul>
          </div>
          <div className="hamburgerMenu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>

        <div
          className={
            click ? "headerSection__lowerNavMobile" : "headerSection__lowerNav"
          }
        >
          <div>
            <DropdownLink title="Acccount Balance " />
          </div>
          <DropdownLink title="Loan Enquiry " />
          <DropdownLink title="Loan Quotation " />
          <DropdownLink title="Cheque Requisition " />
          <DropdownLink title="Blocked Amount " />
          <DropdownLink title="Ledger Balance " />
          <DropdownLink title="Stop Cheques " />
          <DropdownLink title="General Enquiries " />
          <DropdownLink title="Savings and Loans " />
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
