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
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button } from "@mui/material";
import { ApiServices } from "../../Config/api";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import TablePagination from '@mui/material/TablePagination';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import querystring from 'querystring'
var image_path = "http://localhost:3000/";
export default function Datatable({
  notification,
  onDelete,
  notificationAPI,
  onGet,
  query
}) {
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
 
  const onGetButtonClick = (id) => {
    console.log("rowdotid==============", id);
    navigate(`/notification/getDetail/${id}`);
  
  
  };

  const onEditButtonClick = (id,record) => {
    console.log("rowdotid==============", id);
   
    navigate(`/notification/edit/${id}`+ '?' + querystring.stringify(record));
  
  
  };

  const onDeletenotification = (id) => {
    console.log("rowdotid==============", id);
    ApiServices.notificationDelete(id)
      .then((response) => {
        console.log("rrrrrrresopnse", response);
        notificationAPI();
        navigate("/notification");
      })
      .catch((error) => {
        onDelete(notification.id);
        console.log(error.response);
      });
  };

  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => onDeletenotification(id),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <>    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow align="center" className="table-head"
               >
            <TableCell align="center" className="tableCell"
               >ID</TableCell>
            <TableCell align="center" className="tableCell"
               >Title</TableCell>
            <TableCell align="center" className="tableCell"
               >Message</TableCell>
            <TableCell align="center" className="tableCell">Image</TableCell>
            {/* <TableCell align="right">CreateAt</TableCell>  */}
            <TableCell align="center" className="tableCell"
                sx={{width:'25%' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notification.length && notification[0]
            ? notification.filter(item => {
              if (query === '') {
                return item;
              } else if (
                item.Title.toLowerCase().includes(query.toLowerCase()) 
              || item.id.toLowerCase().includes(query.toLowerCase())  ||
              item.message.toLowerCase().includes(query.toLowerCase()) 
            
               ) {
                return item;
              }
            }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                <TableRow>
                  <TableCell className="tableCell" align="center">{item.id} </TableCell>
                  <TableCell className="tableCell" align="center">{item.Title}</TableCell>
                  <TableCell className="tableCell" align="center">{item.message}</TableCell>
                  {/* <TableCell align="right">{item.createdAt}</TableCell>  */}
                  <TableCell className="tableCell" align="center"> 
                  <Box
                          component="img"
                          sx={{
                            height: 30,
                            width: 45,
                          }}
                          alt="The house from the offer."
                          src={image_path + item.image}
                        /></TableCell>
                  <TableCell className="tableCell" align="center">
                    <TableRow>
                      <Button
                        onClick={() => {
                          onGetButtonClick(item.id);
                        }}
                      >
                        <VisibilityIcon className="table-button" sx={{ mr: 2 }} />
                      </Button>
                      <Button
                        onClick={() => {
                          submit(item.id);
                        }}
                      >
                        <DeleteIcon sx={{ mr: 2 }}  className="table-button"/>
                      </Button>
                      <Button
                        onClick={() => {
                          onEditButtonClick(item.id,item);
                        }}
                      >
                      <EditIcon sx={{ mr: 0,}}  className="table-button"/>
                      </Button>
                    </TableRow>
                  </TableCell>
                </TableRow>
              ))
            : "No Data Found"}
        </TableBody>
      </Table>
      <TablePagination
      className="table"
     sx={{display: 'flex', justifyContent: 'center'}}
  component="div"
  count={notification.length}
   rowsPerPageOptions={[5, 10, 15,100]}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
    </TableContainer>
    
</>
  );
}
