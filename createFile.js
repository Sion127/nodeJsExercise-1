//Crea un nuvo archivo
//Importar el MODULO fs de FileSystem (fs)
//Cuando importes un módulo Se recomienda nombrarlo que le correcponde al mismo módulo
const fs = require("fs");

//Ejecutar el método para crear un archivo
fs.writeFile(
    "fisrtNodeFile.txt", //Ruta y nombre del archivo creado
    "Hola Victor", //Contnido del Archivo
    {encoding: "utf-8"}, //Los set de caracteres que contiene el archivo, en este caso es el Standar que incluyen los caracteres Oxidentales
    (err)=> { 
        if (err){
            console.error("No se puede crear un nuevo archivo", err);
        } else {
            console.log("Se ha creado un nuevo archivo nuevo correctamente");
        }
    }
);