import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

import { Button } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { ApiServices } from "../../Config/api";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";

export default function UserDataTable({
  user,
  onDelete,
  userAPI,
  onGet,
  query,
}) {
  const navigate = useNavigate();

  //Block functionality
  const submit = (id, isBlocked) => {
    console.log(`Submit ${id}`, `isBlocked ${isBlocked}`);

    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => suspendUser(id, isBlocked),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const suspendUser = (id, isBlocked) => {
    console.log(`Submit------ ${id}`, `isBlocked====== ${isBlocked}`);

    var params = {
      id: id,
      isBlocked: isBlocked ? 0 : 1,
    };

    ApiServices.blockUser(params)
      .then((response) => {
        userAPI();
        toast.success("successfully block the user");
        navigate("/user");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //delete funcationality
  const onDeleteuser = (id) => {
    console.log("rowdotid==============", id);
    ApiServices.userDelete(id)
      .then((response) => {
        console.log("rrrrrrresopnse", response);
        userAPI();
        navigate("/user");
      })
      .catch((error) => {
        onDelete(user.id);
        console.log(error.response);
      });
  };

  return (
    <>
      <TableContainer component={Paper} class="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead class="table-head">
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">FirstName</TableCell>
              <TableCell className="tableCell">LastName</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Phone Number</TableCell>
              <TableCell className="tableCell">Created At</TableCell>
              <TableCell
                align="center"
                className="tableCell"
                style={{ width: "25%" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.length && user[0]
              ? user
                  .filter((item) => {
                    if (query === "") {
                      return item;
                    } else if (
                      item.firstName
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                      item.id.toLowerCase().includes(query.toLowerCase()) ||
                      item.email.toLowerCase().includes(query.toLowerCase()) ||
                      item.lastName.toLowerCase().includes(query.toLowerCase())
                    ) {
                      return item;
                    }
                  })

                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <TableRow variant="head">
                      <TableCell align="left" className="tableCell">
                        {item.id}{" "}
                      </TableCell>
                      <TableCell align="left" className="tableCell">
                        {item.firstName}
                      </TableCell>
                      <TableCell align="left" className="tableCell">
                        {item.lastName}
                      </TableCell>
                      <TableCell align="left" className="tableCell">
                        {item.email}
                      </TableCell>
                      <TableCell align="left" className="tableCell">
                        {item.phoneNumber}
                      </TableCell>
                      <TableCell align="left" className="tableCell">
                        {item.createdAt}
                      </TableCell>

                      <TableCell className="tableCell" align="center" style={{ width: "15%" }}>
                        <TableRow>
                          <Button
                            onClick={() => {
                              onDeleteuser(item.id);
                            }}
                          >
                            <DeleteIcon className="table-button"/>
                          </Button>
                          <Button
                            onClick={() => {
                              submit(item.id, item.isBlocked);
                            }}
                          >
                            {(() => {
                              if (item.isBlocked === 0) {
                                return <ClearIcon  className="table-button"/>;
                              } else if (item.isBlocked === 1) {
                                return (
                                  <CheckIcon className="table-button"/>
                                );
                              }
                            })()}
                          </Button>
                        </TableRow>
                      </TableCell>
                    </TableRow>
                  ))
              : "No Data Found"}
          </TableBody>
        </Table>
        <TablePagination 
        className="tableCell"
        sx={{ display: "flex", justifyContent: "center" }}
        component="div"
        count={user.length}
        rowsPerPageOptions={[5, 10, 15, 100]}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </TableContainer>
    
    </>
  );
}
