import React  from "react";
import "../Styled/Formulario.css"
import {Formik} from "formik"
import { useState } from "react";

function formulario(){


  const [nombre, setNombre] = useState("")
  const [producto, setProducto] = useState("")
  const [cantidad, setCantidad] = useState(0)
  const [servicio, setServicios] = useState("")

  const handleSubmit=(event)=>{ 

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name":  nombre,
      "product": producto,
      "quantityOfProducts": cantidad,
      "typeOfService": servicio
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/client", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }





 



        return(
            <Formik>

               

            <form onSubmit={handleSubmit()} className="formulario" >



              
            <div>
            <label htmlFor="nombre">Nombre del Cliente</label>
            
            <input    name="nombre"  id="nombre" placeholder="Nombre"  onChange={e => setName(e.target.value)} />
            </div>


            <div>
            <label htmlFor="producto">Productos Seleccionados</label>
             
            <input   name="productos"  id="producto" placeholder="Producto" onChange={e => setName(e.target.value)} />
            </div>



            <div>
            <label htmlFor="cantidad">Cantidad de productos seleccionados</label>
            
            <input   name="cantidad"   id="cantidad" placeholder="Cantidad"  onChange={e => setName(e.target.value)} />  
            </div>

            
            <div>
            <label htmlFor="servicios">Tipo de servicio seleccionado</label>
             
            <input   name="servicios"    id="servicio" placeholder="Tipo de servicios"  onChange={e => setName(e.target.value)} /> 
            </div>


              <button type="submit">Enviar</button>
            </form>

              
         
            </Formik>
         
        )

}
  
     
    

export default formulario;