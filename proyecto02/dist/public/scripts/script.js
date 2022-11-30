let cargarDatosInicial = () => {


  fetch("https://api.api-onepiece.com/characters")
    .then(response => response.json())
    .then(myJson => {
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
    })
      
    .catch(console.error);
  
}

let cargarDatos = (fruit) => {
  
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
        if(fruit == fruta){
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
        

      }
      
        
        
    })
      
    .catch(console.error);
  
}

let cargarChart1 = () => {


  fetch("https://api.api-onepiece.com/characters")
    .then(response => response.json())
    .then(myJson => {
      //const primeros20 = myJson.features.slice(0,20)
      let $chart1 = document.querySelector("#chart1")
      let personajes = []
      let bounties = []
      for (personaje of myJson.slice(0,25)){
        if(personaje.bounty==""){
          continue
        }else{
          personajes.push(personaje.french_name)
          bounties.push(parseInt(personaje.bounty))
        }
        
      }

      const datosbounty = {
        label:"Bounty por personaje",
        data: bounties,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,
      };

      new Chart($chart1, {
        type: 'bar',// Tipo de gráfica
        data: {
            labels: personajes,
            datasets: [
                datosbounty
            ]
        },
        options: {
          responsive:true
        }
    });
    })
      
    .catch(console.error);
  
}

let cargarChart2 = () => {


  fetch("https://api.api-onepiece.com/characters")
    .then(response => response.json())
    .then(myJson => {
      //const primeros20 = myJson.features.slice(0,20)
      let $chart2 = document.querySelector("#chart2")
      let categorias = ["170 cm - 180 cm","181 cm - 190 cm","191 cm - 200 cm","Más de 200 cm"]
      let estaturas = []
      let cont1 = 0
      let cont2 = 0
      let cont3 = 0
      let cont4 = 0
      for (personaje of myJson.slice(0,25)){
        if(personaje.size==""){
          continue
        }else{
          let est = personaje.size.split("c")
          let estatura = parseInt(est[0])
          if(estatura>=170 && estatura<=180){
            cont1+=1
          }else if(estatura>=181 && estatura<=190){
            cont2+=1
          }else if(estatura>=191 && estatura<=200){
            cont3+=1
          }else if(estatura>200){
            cont4+=1
          }
        }

        estaturas[0]=cont1
        estaturas[1]=cont2
        estaturas[3]=cont3
        estaturas[2]=cont4
        
      }

      const datosEst = {
        data: estaturas, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
        backgroundColor: [
            'rgba(163,221,203,0.2)',
            'rgba(232,233,161,0.2)',
            'rgba(230,181,102,0.2)',
            'rgba(229,112,126,0.2)',
        ],// Color de fondo
        borderColor: [
            'rgba(163,221,203,1)',
            'rgba(232,233,161,1)',
            'rgba(230,181,102,1)',
            'rgba(229,112,126,1)',
        ],// Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($chart2, {
        type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
        data: {
            labels: categorias,
            datasets: [
                datosEst,
            ]
        },
    });
    })
      
    .catch(console.error);
  
}

let cargarOpciones = () => {
  plantilla2= `<option value= "Sí">Sí</option>
      <option value= "No">No</option>` 
  document.querySelector("select#tipo").innerHTML += plantilla2
}


window.addEventListener('change', (event) => {
  let seleccion = document.querySelector('select#tipo');
  let option = seleccion.options[seleccion.selectedIndex].value;
  document.querySelector(".table-responsive .table .datos").innerHTML = ""
  cargarDatos(option);

})


 
window.addEventListener('DOMContentLoaded', (event) => {
  cargarDatosInicial()
   cargarOpciones()
   cargarChart1()
   cargarChart2()
});

