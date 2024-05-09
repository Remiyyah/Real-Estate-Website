// main.js
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=console.debug&libraries=maps,marker&v=beta`;
document.head.appendChild(script);