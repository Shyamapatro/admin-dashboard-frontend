import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";
import { ApiServices } from "../../Config/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TablePagination from "@mui/material/TablePagination";
import querystring from "querystring";
import { confirmAlert } from "react-confirm-alert";

import "react-confirm-alert/src/react-confirm-alert.css";

export default function Datatable({ admin, adminAPI, onDelete, query }) {
  const navigate = useNavigate();

  //Block functionality
  const submit1 = (id, isBlocked) => {
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

    ApiServices.blockAdmin(params)
      .then((response) => {
        adminAPI();
        if (isBlocked === 0) {
          toast.success("successfully ....Unblock the user");
        } else {
          toast.success("successfully ....block the user");
        }
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 0));
    setPage(0);
  };

  const onEditClick = (id, record) => {
    console.log("rowdotid==============", id);
    navigate(`/admin/edit/${id}` + "?" + querystring.stringify(record));
  };

  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => onDeleteAdmin(id),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const onDeleteAdmin = (id) => {
    ApiServices.adminDelete(id)
      .then((response) => {
        adminAPI();
        navigate("/admin");
        toast.success("Successfully Deleted");
      })
      .catch((error) => {
        onDelete(admin.id);
        console.log(error.response);
      });
  };

  const onGetButtonClick = (id) => {
    console.log("rowdotid==============", id);
    navigate(`/admin/getDetail/${id}`);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} className="table">
          <TableHead className="tableCell">
            <TableRow
              className="tableCell"
            >
              <TableCell className="tableCell"
                
              >
                ID
              </TableCell>
              <TableCell
                align="center"
                className="tableCell"
              >
                FirstName
              </TableCell>
              <TableCell
                align="center"
                className="tableCell"
              >
               
                Admin Type
              </TableCell>
              <TableCell
                align="center"
                className="tableCell"
              > Email
                
              </TableCell>
              <TableCell
              className="tableCell"
                align="center"
                sx={{
                
                 
                  width: "38%",
                }}
              >
                Access Permission
              </TableCell>
              <TableCell
              className="tableCell"
                align="center"
                sx={{
                 
                 
                  width: "23%",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {admin.length && admin[0]
              ? admin
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
                    <TableRow>
                      <TableCell className="tableCell" align="center">{item.id} </TableCell>
                      <TableCell className="tableCell" align="center">{item.firstName}</TableCell>
                      <TableCell className="tableCell" align="center">{item.adminType}</TableCell> 
                      <TableCell className="tableCell" align="center">{item.email}</TableCell>
                      <TableCell className="tableCell" align="center">
                        {item.admin_permissions.map((task) => {
                          return (
                            <>
                              <Box>{task.dashboard ? "Dashboard" : ""}</Box>
                              <Box>
                                {task.userManagement ? "User Management" : ""}
                              </Box>
                              <Box>
                                {task.adminManagement ? "Admin Management" : ""}
                              </Box>
                              <Box>
                                {task.systemConfiguration
                                  ? "System Configuration"
                                  : ""}
                              </Box>
                              <Box>
                                {task.notificationManagement
                                  ? "Notification Management"
                                  : ""}
                              </Box>
                              <Box>
                                {task.reportManagement
                                  ? "Report Management"
                                  : ""}
                              </Box>
                            </>
                          );
                        })}
                      </TableCell>
                      <TableCell align="center"  className='tableCell'>
                        <TableRow
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <EditIcon 
                          className='table-button'
                            sx={{  m: 1 }}
                            onClick={() => {
                              onEditClick(item.id, item);
                            }}
                          />

                          <DeleteIcon 
                           className='table-button'
                            sx={{  m: 1 }}
                            onClick={() => {
                              submit(item.id);
                            }}
                          />

                          <VisibilityIcon
                           className='table-button'
                            sx={{  m: 1 }}
                            onClick={() => {
                              onGetButtonClick(item.id);
                            }}
                          />

                          <Box
                            sx={{  m: 1 }}
                            onClick={() => {
                              submit1(item.id, item.isBlocked);
                            }}
                          >
                            {(() => {
                              if (item.isBlocked === 0) {
                                return <ClearIcon  className='table-button' />;
                              } else if (item.isBlocked === 1) {
                                return (
                                  <CheckIcon sx={{ mr: 2}}  className='table-button'/>
                                );
                              }
                            })()}
                          </Box>
                        </TableRow>
                      </TableCell>
                    </TableRow>
                  ))
              : "No Data Found"}
          </TableBody>
         
        </Table>
        <TablePagination
        className="table"
        sx={{ display: "flex", justifyContent: "center" }}
        component="div"
        page={page}
        onPageChange={handleChangePage}
        count={admin.length}
        rowsPerPageOptions={[5, 10, 15, 100]}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </TableContainer>
      
    </>
  );
}
