import { Formik } from "formik";
import "../Styled/Formulario.css"
import React from "react";
import { useState } from "react";



function PerritoVenta(){
        const [nombre, setNombre] = useState("")
        const [raza, setRaza] = useState("")
        const [numero, setNumero] = useState("")
        const handleSubmit=(event)=>{ 

            
            setNombre( document.getElementById('nombre').value);
            setRaza( document.getElementById('Raza').value);
            setNumero( document.getElementById('numero').value);

            var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": " Alberto",
  "breed": "Akita",
  "ownerPhone": 9611344741
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/Pet", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
         }
    return(
        
        <Formik>
            <form onSubmit={handleSubmit} className="formulario">
               <label htmlFor="nombre del comprador" >Futuro Dueño</label>
               <input type="text" id="nombre" name="nombre" placeholder="Nombre"/> 
                <div>
                    <label htmlFor="Raza del perro">Raza del perrito</label>
                    <input type="text" id="Raza" name="Raza" placeholder="Raza del perrito"/>
                </div>

                <div>
                    <label htmlFor="Numero">Numero de celular</label>
                    <input   type="text" id="numero" name="numero" placeholder="Numero"/>
                </div>
                <button  
                      type="submit">Comprar</button >
            </form>
            

        </Formik>
    )
}
export default PerritoVenta;