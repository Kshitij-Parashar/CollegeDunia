
function initMap() {
    var uluru = {lat: 50.8503, lng: 4.3517};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var url = 'src/img/green.png';
    var image = {
        url: url,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
    };
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });
}

function changeProfileCSS(){
        var classes = document.getElementById('myNavbar').classList;
            if(classes.length == 4){
                $('#profileContent').animate({'margin-top': '-320px'}, "slow");
            }
            else{
                $('#profileContent').animate({'margin-top':'0px'}, "fast");
            }
}


