
let cargarDatos = () => {

  let cantidadDatos=0

    fetch("https://api.api-onepiece.com/characters")
      .then(response => response.json())
      .then(myJson => {
        //const primeros20 = myJson.features.slice(0,20)
        console.log(myJson)
        console.log(myJson.slice(0,100))
        cantidadDatos = myJson.slice(0,100).length
        console.log(cantidadDatos)
        for (personaje of myJson.slice(0,25)){
          let nombre = personaje.french_name
          let estatura = personaje.size
          let edad = personaje.age
          let rol = personaje.job
          let fecha_nac = personaje.birthday
          let fruta = personaje.fruitId
          if(nombre =="" || estatura == "" || edad == "" || rol == "" || fecha_nac == ""){
              continue
          }
          if(fruta!=null){
              fruta = "Sí"
          }
          else{
              fruta = "No"
          }
          let plantilla = 
          `<tr>
            <td>${nombre}</td>
            <td>${estatura}</td>
            <td>${edad}</td>
            <td>${rol}</td>
            <td>${fecha_nac}</td>
            <td>${fruta}</td>
          </tr>`
          document.querySelector(".table-responsive .table .datos").innerHTML += plantilla

        }
        
        let plantilla_paginacion = `<li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        </a>
        </li>`

        for(var i = 0; i< cantidadDatos/20;i++){
          plantilla_paginacion = plantilla_paginacion + `<li class="page-item"><a class="page-link" href="#" >${i+1}</a></li>`
        }

        plantilla_paginacion = plantilla_paginacion + `<li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        </a>
        </li>`

        document.querySelector(".pagination").innerHTML += plantilla_paginacion
        
        
      })
      
      .catch(console.error);
  
  }




 
window.addEventListener('DOMContentLoaded', (event) => {
   cargarDatos()
});