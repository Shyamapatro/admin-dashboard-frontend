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
import { Box } from "@mui/system";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";
import querystring from "querystring";
import { confirmAlert } from "react-confirm-alert";
import { ApiServices } from "../../Config/api";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Datatable({achivements,query,AchivementsAPI,onDelete}) {
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


  // const onEditClick = (id, record) => {
  //   console.log("rowdotid==============", id);
  //   navigate(`/admin-achievements/edit/${id}` + "?" + querystring.stringify(record));
  // };

  // const submit = (id) => {
  //   confirmAlert({
  //     title: "Confirm to submit",
  //     message: "Are you sure to do this.",
  //     buttons: [
  //       {
  //         label: "Yes",
  //         onClick: () => onDeleteAdmin(id),
  //       },
  //       {
  //         label: "No",
  //       },
  //     ],
  //   });
  // };

  // const onDeleteAdmin = (id) => {
  //   ApiServices.DeleteAchivement(id)
  //     .then((response) => {
  //       AchivementsAPI();
  //       navigate("/admin-achievements");
  //       toast.success("Successfully Deleted");
  //     })
  //     .catch((error) => {
  //       onDelete(achivements.id);
  //       console.log(error.response);
  //     });
  // };

  const onGetButtonClick = (id) => {
    console.log("rowdotid==============", id);
    navigate(`/admin-achievements/getDetail/${id}`);
  };
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell className="tableCell" >ID</TableCell>
              <TableCell className="tableCell" align="left">Achivement Type</TableCell>
              <TableCell  className="tableCell" align="left">Achivement</TableCell>
             <TableCell className="tableCell" align="left">CreatedAt</TableCell>
              <TableCell className="tableCell" align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {achivements.length && achivements[0]
              ? achivements.filter(item => {
                if (query === '') {
                  return item;
                } else if (item.Type.toLowerCase().includes(query.toLowerCase()) 
                || item.name.toLowerCase().includes(query.toLowerCase())
               ) {
                  return item;
                }
              })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <TableRow variant="head" >
                       <TableCell align="left" className="tableCell">{item.id} </TableCell>
                      <TableCell align="left" className="tableCell"> {item.Type} </TableCell>
                      <TableCell align="left" className="tableCell">{item.name}</TableCell>
                      <TableCell align="left" className="tableCell">{item.createdAt}</TableCell>
                     
                      <TableCell align="center" className="tableCell">
                        <TableRow  
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          {/* <EditIcon
                            sx={{ color: "black", m: 1 }}
                            onClick={() => {
                              onEditClick(item.id, item);
                            }}
                          /> */}

                          {/* <DeleteIcon
                            sx={{ color: "black", m: 1 }}
                            onClick={() => {
                              submit(item.id);
                            }}
                          />
 */}
                          <VisibilityIcon
                         
                            sx={{ color: "black", m: 1 }}
                            onClick={() => {
                              onGetButtonClick(item.id);
                            }}
                            
                          /> 

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
        count={achivements.length}
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
