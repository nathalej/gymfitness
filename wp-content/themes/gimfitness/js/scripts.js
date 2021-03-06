jQuery(document).ready(($) => {
  $('.site-header .menu-principal .menu').slicknav({
    label: '',
    appendTo: '.site-header',
  });


  // Mapa de Leaflet

  const lat = document.querySelector('#lat').value,
        lng = document.querySelector('#lng').value,
        direccion = document.querySelector('#direccion').value;

  if(lat && lng && direccion){
    var map = L.map('mapa').setView([lat,lng], 15);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup(direccion)
      .openPopup();
  }

});
