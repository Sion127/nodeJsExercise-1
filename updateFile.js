//Update el archivo
//Importar el MODULO fs de FileSystem (fs)
//Cuando importes un módulo Se recomienda nombrarlo que le correcponde al mismo módulo
const fs = require("fs");

//Ejecutar el método para actualizar el archivo
fs.appendFile(
    "firstNodeFile.txt",
    "\nMás informacion agregada",
    {encoding: "utf-8"},
    (err) => {
        if (err){
            console.error("No se puede actualizar el archivo",err);
        } else {
            console.log("Archivo actualizado");
        }
    }
);