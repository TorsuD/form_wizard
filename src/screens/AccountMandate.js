import React from "react";
import "./AccountMandate.css";
import TitleHeader from "../components/title_header/TitleHeader";
import LOV from "../components/list_of_value/LOV";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function AccountMandate(props) {
  const columns = [
    {
      field: "Relation No.",
      headerName: " RELATION NO.",
      width: 130,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "firstName",
      headerName: "FIRST NAME",
      width: 130,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "surname",
      headerName: "SURNAME",
      width: 130,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "middle name",
      headerName: "MIDDLE NAME",
      width: 120,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "gender",
      headerName: "GENDER",
      sortable: false,
      width: 160,
      editable: true,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "date of birth",
      headerName: "DATE OF BIRTH",
      sortable: false,
      width: 160,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "mobile",
      headerName: "MOBILE 1",
      sortable: false,
      width: 160,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "mandate",
      headerName: "MANDATE LEVEL",
      sortable: false,
      width: 160,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "approver limit",
      headerName: "APPROVER LIMIT",
      sortable: false,
      width: 160,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
  ];
  const rows = [];
  return (
    <div>
      <div className="am__container">
        <div className="accountMandateField">
          <div style={{ marginTop: "15px", marginBottom: "-10px" }}>
          <LOV
            label="Account Mandate"
            LOVData={["001-Accra", "002-Rokel", "003-Paris"]}
            value={"LOV.label"}
            title={"City"}
            buttonColor={props.buttonColor}
          />
          </div>

          {/*components={{ Toolbar: GridToolbar }}*/}
        </div>
        <div>
          <Box
            sx={{
              height: "220px",
              width: "97.1%",
              marginLeft: "20px",
              paddingBottom: "30px",
              "& .super-app-theme--header": {
                backgroundColor: `${props.headerColor}`,
                color: "white",
                fontWeight: "800",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AccountMandate;
