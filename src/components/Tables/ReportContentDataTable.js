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
import Button from "@mui/material/Button";
import { ApiServices } from "../../Config/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TablePagination from "@mui/material/TablePagination";
import querystring from "querystring";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
export default function Datatable({ content, onDelete, ContentAPI,query}) {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const onDeletereportbug = (id) => {
    console.log("rowdotid==============", id);
    ApiServices.DeletereportedContent(id)
      .then((response) => {
        console.log("rrrrrrresopnse", response);
        ContentAPI();
        navigate("/reported-bugs");
        toast.success("Successfully Deleted");
      })
      .catch((error) => {
        onDelete(content.id);
        console.log(error.response);
      });
  };

  const onEditClick = (id, record) => {
    console.log("rowdotid==============", id);
    navigate(
      `/reported-content/edit/` + id + "?" + querystring.stringify(record)
    );
    // const editAdmin = (id,record) => {
    //   navigate('/route/admin/edit/' + id + '?' + querystring.stringify(record));
    // }
  };

  const onGetButtonClick = (id) => {
    console.log("rowdotid==============", id);
    navigate(`/reported-content/getDetail/${id}`);
  };


  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => onDeletereportbug(id),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
          <TableHead>
            <TableRow
             className="tableCell"
            >
              <TableCell
                align="center"
               className="tableCell"
              >
                ID
              </TableCell>
              <TableCell
                align="center"
               className="tableCell"
              >
                reportedBy
              </TableCell>
              <TableCell
                align="center"
               className="tableCell"
              >
                reportedItem
              </TableCell>
              <TableCell
                align="center"
               className="tableCell"
              >
                Description
              </TableCell>
              <TableCell
                align="center"
               className="tableCell"
              >
                Status
              </TableCell>
              <TableCell
                align="center"
               className="tableCell"
                style={{width: '25%'}} >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.length && content[0]
              ? content.filter(item => {
                if (query === '') {
                  return item;
                } else if (
                  item.reportedBy.toLowerCase().includes(query.toLowerCase()) 
                || item.id.toLowerCase().includes(query.toLowerCase())  ||
                item.reportedItem.toLowerCase().includes(query.toLowerCase()) 
                ||
                item.status.toLowerCase().includes(query.toLowerCase()) 
                ||
                item.Description.toLowerCase().includes(query.toLowerCase()) 
                 ) {
                  return item;
                }
              })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <TableRow variant="head">
                      <TableCell align="left"   className="tableCell">{item.id} </TableCell>
                      <TableCell align="left"   className="tableCell">{item.reportedBy}</TableCell>
                      <TableCell align="left"   className="tableCell">{item.reportedItem}</TableCell>
                      <TableCell align="left"   className="tableCell">{item.Description}</TableCell>
                      <TableCell align="left"   className="tableCell">
                        {(() => {
                          if (item.status === "pending") {
                            return (
                              <Paper
                                sx={{
                                  width: 1,
                                  textAlign: "center",
                                  p: 1.2,
                                  backgroundColor: "#a9d3f8",
                                  color: "white",
                                  borderRadius: 6,
                                }}
                              >
                                {item.status}
                              </Paper>
                            );
                          } else if (item.status === "approved") {
                            return (
                              <Paper
                                sx={{
                                  width: 1,
                                  textAlign: "center",
                                  p: 1.2,
                                  backgroundColor: "green",
                                  color: "white",
                                  borderRadius: 6,
                                }}
                              >
                                {item.status}
                              </Paper>
                            );
                          } else {
                            return (
                              <Paper
                                sx={{
                                  width: 1,
                                  textAlign: "center",
                                  p: 1.2,
                                  backgroundColor: "red",
                                  color: "white",
                                  borderRadius: 6,
                                }}
                              >
                                {item.status}
                              </Paper>
                            );
                          }
                        })()}
                      </TableCell>
                      <TableCell align="center" className="tableCell">
                        <TableRow>
                          <Button
                            onClick={() => {
                              onGetButtonClick(item.id);
                            }}
                          >
                            <VisibilityIcon sx={{ mr: 2 }} className="table-button" />
                          </Button>
                          <Button
                            onClick={() => {
                              submit(item.id);
                            }}
                          >
                            <DeleteIcon className="table-button" />
                          </Button>
                          <Button
                            className="table-button"
                            onClick={() => {
                              onEditClick(item.id, item);
                            }}
                          >
                            <EditIcon className="table-button"/>
                          </Button>
                        </TableRow>
                      </TableCell>
                    </TableRow>
                  ))
              : "No Data Found"}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
      className="table"
        sx={{ display: "flex", justifyContent: "center" }}
        component="div"
        count={content.length}
   rowsPerPageOptions={[5, 10, 15,100]}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
