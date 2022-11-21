let cargarDatos = () => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(response => response.text())
      .then(data => {
      data= JSON.parse(data)
      console.log(data)
      //photos = data.photos
      for (photo of data["photos"]){
        let id= photo.id
        let sol= photo.sol
        let img = photo.img_src
        let date = photo.earth_date
        let plantilla = 
        `<tr>
          <td>${id}</td>
          <td>${sol}</td>
          <td><img src = "${img}" width = 250px><img></td>
          <td>${date}</td>
         </tr>`
        document.querySelector(".containerTabla .tabla-datos .datos").innerHTML += plantilla
    }  
      })
      
      .catch(console.error);
  
  }
 
window.addEventListener('DOMContentLoaded', (event) => {
   cargarDatos()
});