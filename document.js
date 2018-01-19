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
