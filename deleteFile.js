//Eliminar el archivo
//Importar el MODULO fs de FileSystem (fs)
//Cuando importes un módulo Se recomienda nombrarlo que le correcponde al mismo módulo
const fs = require("fs");

fs.unlink (
    "fisrtNodeFile.txt",
    (err)=> {
        if (err){
            console.error("No se puede eliminar un nuevo archivo");
        } else {
            console.log("Se ha ELIMINADO el archivo correctamente",err);
        }
    }
)