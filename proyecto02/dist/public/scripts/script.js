let cargarDatos = () => {
    fetch("https://api.api-onepiece.com/characters")
      .then(response => response.json())
      .then(myJson => {
        //const primeros20 = myJson.features.slice(0,20)
        console.log(myJson)
        console.log(myJson.slice(0,20))
        for (personaje of myJson.slice(0,20)){
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
      })
      
      .catch(console.error);
  
  }
 
window.addEventListener('DOMContentLoaded', (event) => {
   cargarDatos()
});