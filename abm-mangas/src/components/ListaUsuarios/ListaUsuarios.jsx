import { React } from "react";
import { LectorExcel } from "../Auxiliares/LectorExcel/LectorExcel";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { AltaUsuarios } from "./AltaUsuarios/AltaUsuarios";
import { consultaApi, API_Endpoints, API_Verbos } from "../../services/ApiService";

export const ListaUsuarios = () => {
  const [rows, setRows] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});
  const [grupoSelecionado, setGrupoSelecionado] = useState([]);
  const [botonBorrar, setbotonBorrar] = useState(false);


  useEffect(() => {
    setbotonBorrar(true);
    getListaUsuarios();
  }, []);

  const getListaUsuarios = () => {
    consultaApi(API_Endpoints.USUARIOS, API_Verbos.GET).then((arr) => {
      setRows(arr.data);
    });
  } 

  const cargarUsuario = (data) => {
   consultaApi(API_Endpoints.USUARIOS, API_Verbos.POST, data).then((e) => {
      getListaUsuarios();
    });
  };

  const obtenerArreglo = (datosExcel) => {
    setRows(datosExcel);
  };

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    if (selectedRowsData.length == 1) {
      setUsuarioSeleccionado(selectedRowsData[0]);
      setGrupoSelecionado(selectedRowsData);
      setbotonBorrar(false);
    } else if (selectedRowsData.length == 0) {
      setbotonBorrar(true);
    } else {
      setGrupoSelecionado(selectedRowsData);
    }
  };

  const borrarSeleccionados = () => {    
    grupoSelecionado.map(item => {
      consultaApi(API_Endpoints.USUARIOS, API_Verbos.DELETE,item).then((e) => {
        getListaUsuarios();
      });
    })
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "apellido", headerName: "Apellido", flex: 1 },
    { field: "usuario", headerName: "Usuaio", flex: 1 },
  ];

  return (
    <div className="container listaUsuarios pt-5 ">
      <h2 className="textoAmarillo text-center">Lista de usuarios</h2>
      <div className="d-flex mb-2">
        <LectorExcel pasarArreglo={obtenerArreglo} />
        <button className="btn btn-danger ml-2 mr-2" disabled={botonBorrar} onClick={borrarSeleccionados}>
          Borrar seleccionados
        </button>
      </div>
      <div
        className="back-amarillo mb-5"
        style={{ height: 435, width: "100%" }}
      >
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
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
          disableMultipleSelection={true}
          onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
      </div>

      <AltaUsuarios
        cargarUsuario={cargarUsuario}
        usuarioSeleccionado={usuarioSeleccionado}
      />
    </div>
  );
};
