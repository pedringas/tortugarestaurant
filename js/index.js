new TypeIt("#simpleUsage", {
    strings: "Bienvenido a <br>TORTUGA",
    speed: 70,
    waitUntilVisible: true,
  }).go();


  var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 20000,
  wrap: false
})
