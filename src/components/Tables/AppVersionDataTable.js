import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ApiServices } from "../../Config/api";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import TablePagination from '@mui/material/TablePagination';
import querystring from 'querystring'
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from '@mui/material';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
export default function Datatable({version,appVersionAPI,query}) {
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

  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => onDelete(id),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const onDelete = (id) => {
      console.log("rowid", id);
      ApiServices.appDelete(id)
        .then((response) => {

          appVersionAPI();
         
          navigate("/app");
          toast.success("Successfully Deleted");
        })
        .catch((error) => {
         
          console.log(error.response);
        });
    };


    const onEditClick = (id,record) => {
      console.log("rowdotid==============", id);
      navigate(`/app/edit/${id}`+ '?' + querystring.stringify(record));
     
    };


    const onGetButtonClick = (id) => {
      console.log("rowdotid==============", id);
      navigate(`/app/getDetail/${id}`);
    
    
    };
  
  return (
    <>
    <TableContainer component={Paper}>
    <Table className="table" sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
        <TableRow >
          <TableCell className='tableCell'>ID</TableCell>
          <TableCell className='tableCell'>App Name</TableCell>
          <TableCell className='tableCell'>Version</TableCell>
         
          <TableCell className='tableCell'>minimumVersion</TableCell>
          <TableCell className='tableCell'>Platform</TableCell>
          <TableCell className='tableCell' align="center"  sx={{ width:'25%', }}>Actions</TableCell>
        </TableRow>
      </TableHead>
     <TableBody>
     {version.length && version[0]?
        version.filter(item => {
          if (query === '') {
            return item;
          } else if (item.appname.toLowerCase().includes(query.toLowerCase()) || item.id.toLowerCase().includes(query.toLowerCase())|| item.platform.toLowerCase().includes(query.toLowerCase()) 
          // || item.minimumVersion.isFloat().includes(query.isFloat()) 
          // || item.version.includes(query) 
          
           ) {
            return item;
          }
        })
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) =>
        <TableRow>
               <TableCell  className='tableCell' align="center" >{item.id} </TableCell>
               <TableCell  className='tableCell' align="center" >{item.appname} </TableCell>
               <TableCell  className='tableCell' align="center" >{item.version} </TableCell>
               <TableCell  className='tableCell' align="center" >{item.minimumVersion} </TableCell>
               <TableCell  className='tableCell' align="center">{item.platform}</TableCell>
               <TableCell  className='tableCell' align="center"><TableRow >
                <Button  onClick={() => {
                  submit(item.id);
                }}>
                <DeleteIcon  className='table-button'/></Button>
                 <Button sx={{color:'black'}}
                            onClick={() => {
                              onEditClick(item.id,item);
                            }}
                          >
                            <EditIcon className='table-button'/>
                          </Button>
                          <Button sx={{color:'black'}}
                            onClick={() => {
                              onGetButtonClick(item.id);
                            }}
                          >
                            <VisibilityIcon className='table-button'/>
                          </Button>
             
               </TableRow></TableCell>
              
               <TableCell></TableCell>
              </TableRow>)
              : "No Data Found"}
                </TableBody>
    </Table> 
  </TableContainer>
  <TablePagination
  className="table"
   sx={{display: 'flex', justifyContent: 'center'}}
   component="div"
   count={version.length}
   rowsPerPageOptions={[5, 10, 15,100]}
   page={page}
   onPageChange={handleChangePage}
   rowsPerPage={rowsPerPage}
   onRowsPerPageChange={handleChangeRowsPerPage}
 /></>
  );
}
