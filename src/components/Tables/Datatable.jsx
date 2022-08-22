import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate
} from '@mui/x-data-grid-generator'

export default function BasicEditingGrid () {
  return (
    <div style={{ height: 480, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  )
}

const columns = [
  { field: 'ID', headerName: 'ID', width: 180, editable: true },
  { field: 'FirstName', headerName: 'First Name', width: 120, editable: true },
  { field: 'LastName', headerName: 'LastName', width: 120, editable: true },
  {
    field: 'Email',
    headerName: 'Email',
    type: 'date',
    width: 120,
    editable: true
  },
  {
    field: 'Type',
    headerName: 'Type',
    type: 'date',
    width: 180,
    editable: true
  },
  {
    field: 'Access',
    headerName: 'Access',
    type: 'date',
    width: 180,
    editable: true
  },
  {
    field: 'Actions',
    headerName: 'Actions',
   
    width: 180,
    editable: true
  }
]

const rows = [
  {
    id: 1,
    FirstName: randomTraderName(),
    LastName: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 2,
    FirstName: randomTraderName(),
    LastName: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 3,
    FirstName: randomTraderName(),
    LastName: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 4,
    FirstName: randomTraderName(),
    LastName: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 5,
    FirstName: randomTraderName(),
    LastName: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 1,
    FirstName: randomTraderName(),
    LastName: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 2,
    FirstName: randomTraderName(),
    LastName: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 3,
    FirstName: randomTraderName(),
    LastName: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 4,
    FirstName: randomTraderName(),
    LastName: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 5,
    FirstName: randomTraderName(),
    LastName: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  }
]
