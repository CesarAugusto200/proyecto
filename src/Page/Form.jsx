import React  from "react";
import "../Styled/Formulario.css"
import {Formik} from "formik"

function formulario(){

        return(
            <Formik>

               

            <form className="formulario" >
            <div>
            <label htmlFor="nombre">Nombre del Cliente</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre"/>    
            </div>


            <div>
            <label htmlFor="producto">Productos Seleccionados</label>
            <input type="text" id="producto" name="producto" placeholder="Producto"/>    
            </div>



            <div>
            <label htmlFor="cantidad">Cantidad de productos seleccionados</label>
            <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad"/>    
            </div>

            
            <div>
            <label htmlFor="servicios">Tipo de servicio seleccionado</label>
            <input type="text" id="servicios" name="servicios" placeholder="Tipo de servicios"/>    
            </div>


              <button type="submit">Enviar</button>
            </form>

              
         
            </Formik>
         
        )

}
  
     
    

export default formulario;