//Leer el archivo
//Importar el MODULO fs de FileSystem (fs)
//Cuando importes un módulo Se recomienda nombrarlo que le correcponde al mismo módulo
const fs = require("fs");

fs.readFile(
    "fisrtNodeFile.txt",
    {encoding:"utf-8"},
    (err,data) => {
        if (err){
            //Mandar un mensaje por si hay un error en la lectura del ARCHIVO
            console.error("No se puede leer el archivo",(err));
        } else {
            //Imprimir el contenido del ARCHIVO
            console.log(data);
        }
    }
);
