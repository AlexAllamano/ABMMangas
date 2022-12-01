import React from 'react';
import { Observable, Subscriber } from "rxjs";
import * as XLSX from "xlsx";


export const LectorExcel = () => {

    // const capturarArchivo = (e) =>{

    //     const archivo = e.target.files[0];
    //     console.log('archivooo',archivo);

    //     console.log(XLSX.readFile(archivo));

    //     document.getElementById('inputFile').value = null;

    // }


    

 


  const capturarArchivo = (e) => {

    console.log(e.target.files[0]);

    const file = e.target.files[0];

    const excelObservavble = new Observable((subscriber) => {
      readFile(file, subscriber);
    });

    excelObservavble.subscribe((data) => {      
     limpiarInputFile();

     console.log(data); 
     
     return (data);
    });
  }    

  const readFile = (file, subscriber) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = fileReader.result;
      const wb= XLSX.read(bufferArray, { type: "buffer" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { rawNumbers: true });
      subscriber.next(data);
      subscriber.complete();
    };
  }

 const limpiarInputFile = () => {
    let input = document.getElementById("inputFile");
    input.value = null;
  }


 
}
