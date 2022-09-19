import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { Visibility } from "@mui/icons-material";
import { ApiServices } from "../../Config/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import querystring from 'querystring'

var image_path = "http://localhost:3000/";

export default function CategoryDatatable({ category, onDelete, categoryAPI, onGet,query }) {
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
    navigate(`/category/getDetail/${id}`);
  };

  const onEditButtonClick = (id,record) => {
    console.log("rowdotid==============", id);
   
    navigate(`/category/edit/${id}`+ '?' + querystring.stringify(record));
  
  
  };

  const onDeleteCategory = (id) => {
    console.log("rowdotid==============", id);
    ApiServices.CategoryDelete(id)
      .then((response) => {
        console.log("rrrrrrresopnse", response);
        categoryAPI();
        navigate("/category");
      })
      .catch((error) => {
        onDelete(category.id);
        
      });
  };


  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => onDeleteCategory(id),
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
          <TableHead className="table-header">
            <TableRow align="center"
               className="tableCell">
              <TableCell align="center"
               className="tableCell">ID</TableCell>
              <TableCell align="center"
               className="tableCell">Category Name</TableCell>
              <TableCell align="center"
               className="tableCell">Image</TableCell>
              <TableCell align="center"
              className="tableCell"
                sx={{ width:"15%"}} >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.length && category[0]
              ? category.filter(item => {
                if (query === '') {
                  return item;
                } else if (item.name.toLowerCase().includes(query.toLowerCase()) 
                || item.id.toLowerCase().includes(query.toLowerCase())
                 ) {
                  return item;
                }
              })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <TableRow>
                      <TableCell  className="tableCell" align="center">{item.id}</TableCell>
                      <TableCell  className="tableCell" align="center">{item.name}</TableCell>
                      <TableCell  className="tableCell" align="center">
                        <Box
                          component="img"
                          sx={{
                            height: 30,
                            width: 45,
                          }}
                          alt="The house from the offer."
                          src={image_path + item.image}
                        />
                        {/* <img  src={item.image} width="96" height="65"/> */}
                      </TableCell>
                      <TableCell  className="tableCell" align="center" sx={{display: 'flex', flexDirection: 'row'}}>
                        <Button
                          onClick={() => {
                            onGetButtonClick(item.id);
                          }}
                        >
                          <VisibilityIcon className="table-button"/>
                        </Button>
                        <Button
                        onClick={() => {
                          onEditButtonClick(item.id,item);
                        }}
                      >
                      <EditIcon   className="table-button"  />
                      </Button>
                        <Button
                          onClick={() => {
                            submit(item.id);
                          }}
                        >
                          <DeleteIcon className="table-button" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
              : "No Data Found"}
          </TableBody>
          <TablePagination
          className="table"
          sx={{ display: "flex", justifyContent: "center" }}
        component="div"
        count={category.length}
   rowsPerPageOptions={[5, 10, 15,100]}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        </Table>
      </TableContainer>
     
    </>
  );
}
