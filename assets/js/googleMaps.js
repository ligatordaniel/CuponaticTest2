function iniciarMap(){
    var coord = {lat:-33.448473 ,lng: -70.648544};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}