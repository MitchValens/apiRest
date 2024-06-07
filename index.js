var c=require("mongoose");
var e=require("./app");

c.connect("mongodb://127.0.0.1/prueba")
.then(()  => {
    console.log("conexion exito")
    e.listen(8000,()=>{console.log("server okay");})
})
.catch((err)  => {
    console.log(err)
});