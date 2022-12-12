
import "../Styled/Productos.css"
import Veterinario from "../Imagenes/Veterinario.jpg"
import banioantipulgas from "../Imagenes/banioantipulgas.jpg"
import banioestetico from "../Imagenes/banioestetico.jpg"
import baniopersonalizado from "../Imagenes/baniopersonalizado.jpeg"
import esterilizacion from "../Imagenes/esterilizacion.jpeg"
import Limpio from "../Imagenes/Limpio.jpeg"
function Servicios(){






    return(
   
      <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
        <img className="IMGDOG1" src={Veterinario}></img>
          <div class="card-body">
            <h5 class="card-title">Veterinaria</h5>
            <p class="card-text">Le daremos atencion a tu mascota le realizaremos chequeos para ver su salud 
            y ver si le faltan vacunas
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
        <img className="IMGDOG1" src={banioantipulgas}></img>
          <div class="card-body">
            <h5 class="card-title">Baño anti pulgas</h5>
            <p class="card-text">No puedes eliminar las pulgas de tu perro nosotros te ayudaremos con estetico
            baño anti pulgas con todo incluido tanto como shampo antipulga entre muchas otras cosas mas
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
        <img className="IMGDOG1" src={banioestetico}></img>
          <div class="card-body">
            <h5 class="card-title">Baño estetico</h5>
            <p class="card-text">Le adremos ese estilo que tanto te gusta a tu perrito</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
        <img className="IMGDOG1" src={baniopersonalizado}></img>
          <div class="card-body">
            <h5 class="card-title">Baño personalizado</h5>
            <p class="card-text">Usted elige que tiepo de baño desea, baño completo ,solo antipulgas . o solo baño sencillo</p>
          </div>
        </div>
      </div>



      <div class="col">
        <div class="card">
        <img className="IMGDOG1" src={esterilizacion}></img>
          <div class="card-body">
            <h5 class="card-title">Esterilizacion</h5>
            <p class="card-text">Con la esterilización ayudamos a prevenir las posibles  
            infecciones que pueda presentar tu mascota </p>
          </div>
        </div>
      </div>




      <div class="col">
        <div class="card">
        <img className="IMGDOG1" src={Limpio}></img>
          <div class="card-body">
            <h5 class="card-title">Limpieza dental</h5>
            <p class="card-text">Te ayudaremos con la hingiene de tu perrito para que sus dientes esten sanos y fuertes</p>
          </div>
        </div>
      </div>




      
      
    </div>


      


        
         
        
    )
}
export default Servicios;