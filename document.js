function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'google_maps.json', true); 
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var responseText = xobj.responseText;
            // Parse JSON string into object
            var actual_JSON = JSON.parse(responseText);
            callback(actual_JSON);
        }
    };
    xobj.send(null);  
}
function viewJSON() {
    loadJSON(function(response) {
        /* Aqui l'objecte response representa l'objecte JSON que ens 
           ha retornat el servidor */
        var llista = "";
        for (i in response.results) {
            var restaurant = response.results [i];
            var restaurantS = "";
            for (j in restaurant.types) {
                restaurantS = restaurantS + restaurant.types [j] + ",";
            }
            llista = llista + "<h1>" + restaurant.name + "<img src = ' "+restaurant.icon+"'>" + "</h1> <br>"
            + "Direcció: "+ restaurant.vicinity + "<br>"
            + "Latitud: " + restaurant.geometry.location.lat + "<br>"
            + "Longitud: "+ restaurant.geometry.location.lng + "<br>"
            + "Tipus: " + restaurantS + "<br>";
        }
        document.getElementById("results").innerHTML = llista;
    });
}

