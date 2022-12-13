import React from "react";
import { Observable, Subscriber } from "rxjs";
import * as XLSX from "xlsx";

export const LectorExcel = ({ pasarArreglo }) => {
  const capturarArchivo = (e) => {
    console.log(e.target.files[0]);

    const file = e.target.files[0];

    const excelObservavble = new Observable((subscriber) => {
      readFile(file, subscriber);
    });

    excelObservavble.subscribe((data) => {
      limpiarInputFile();

      pasarArreglo(data);
      console.log(data);
    });
  };

  const readFile = (file, subscriber) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = fileReader.result;
      const wb = XLSX.read(bufferArray, { type: "buffer" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { rawNumbers: true });
      subscriber.next(data);
      subscriber.complete();
    };
  };

  const limpiarInputFile = () => {
    let input = document.getElementById("inputFile");
    input.value = null;
  };

  return (
    <div>
      <button id="botonLeerExcel" className="btn btn-success ml-2 mr-2 fs-5" >
        <label htmlFor="inputFile" className="mb-0">Leer excel</label>
      </button>
      <input
        type="file"
        id="inputFile"
        className="d-none"
        onChange={(e) => capturarArchivo(e)}
      />
    </div>
  );
};
