import { React } from "react";
import { LectorExcel } from "../Auxiliares/LectorExcel/LectorExcel";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AltaUsuarios } from "./AltaUsuarios/AltaUsuarios";
import {getUsuarios, postUsuarios} from '../../services/ApiService'


export const ListaUsuarios = () => {

  const [rows, setRows] = useState([]);
  const [gatillo, setGatillo] = useState(false);


  useEffect(() => {
    
    getUsuarios().then(arr => {
      setRows(arr.data);

      console.log(rows);
    })   


  },[gatillo]);

  const cargarUsuario = (data) =>{
    postUsuarios(data);

    setGatillo(!gatillo);
    console.log(gatillo);
  }

  const obtenerArreglo = (datosExcel) => {
    setRows(datosExcel);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "apellido", headerName: "Apellido", flex: 1 },
    { field: "usuario", headerName: "Usuario",flex: 1 },
  ];

  return (
    <div className="container listaUsuarios pt-5 ">
      <h2 className="textoAmarillo text-center">Lista de usuarios</h2>
      <LectorExcel pasarArreglo={obtenerArreglo} />

      <div className="back-amarillo mb-5" style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 5,
            borderColor: "red",
            "& .MuiDataGrid-cell:hover": {
              color: "black",
            },
          }}
          rows={rows}
          rowHeight={56}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>      

      <AltaUsuarios cargarUsuario={cargarUsuario}/>
    </div>
  );
};
