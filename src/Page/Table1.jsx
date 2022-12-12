import React from "react"
import { useEffect , useState} from "react";

function Table(){

  const [clientes, setClientes] = useState([])
const get =()=>{
 

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
 
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    
    redirect: 'follow'
  };
  
  fetch("http://localhost:8080/client", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result) 
      setClientes(result)
    })
    .catch(error => console.log('error', error));

}

useEffect(()=>{
 
  get()
},[]
)






    return(
     <>
         <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Producto</th>
      <th scope="col">cantidad</th>
      <th scope="col">tipo</th>
    </tr>
  </thead>

  <tbody>

  {clientes.map((valor) => (
        <tr>
        <th scope="row">{valor.id}</th>
        <td>{valor.name}</td>
        <td>{valor.product}</td>
        <td>{valor.quantityOfProducts}</td>
        <td>{valor.typeOfService}</td>
      
        </tr>
      ))}
    


    </tbody> 

</table>





   
     </>
    )
}
export default Table;