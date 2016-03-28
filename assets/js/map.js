// Note: tripList will already be loaded from /map/our_travels.js

function buildPopupContent(location, trip) {
    popupContent = "<p><strong>Trip: " + trip.tripName + "</strong><br>Location: " + loc.locName;

    if (location.dates) {
        dateStr = location.dates.toString();
        dateStr = dateStr.replace(new RegExp(":", "g"), " to ");  // replace : with to
        dateStr = dateStr.replace(new RegExp(",", "g"), "<br>and "); // replace , with and
        popupContent += "<br>Visited: " + dateStr;
    }

    popupContent += "</p>";

    if (location.image) {
        popupContent += "<img src=\"/images/"+location.image+"\" style=\"width: 170px;\">";
    }

    if (location.post) {
        popupContent += "<p><a href=\"/" + location.post + "/\">See the full post for more info</a>.</p>";
    }

    return popupContent;
}

var groups = {};
var ourVisits = {};
// combine info from multiple visits at same location onto one location
for (var i = tripList.length - 1; i >= 0; i--) {
    trip = tripList[i];
    groups[trip.tripName] = new L.LayerGroup();

    for (var j = trip.locations.length - 1; j >= 0; j--) {
        loc = trip.locations[j];
        name = loc.locName;

        if (!(name in ourVisits)) {
            // only create the objects the first time
            ourVisits[name] = {
                "coordinates": loc.coordinates,
                "color": trip.color,
                "popupContent": "",
                "visits": {}
            };
        }

        if (ourVisits[name].popupContent != "") {
            ourVisits[name].popupContent += "<hr>";
        }

        ourVisits[name].popupContent += buildPopupContent(loc, trip);

        // add a trip visit
        ourVisits[name].visits[trip.tripName] = {
            dates: loc.dates
        };
    }
}

// Create location markers and add them to layer groups
for (var locName in ourVisits) {
    if (!ourVisits.hasOwnProperty(locName)) continue;

    var loc = ourVisits[locName];
    var marker = L.circleMarker(loc.coordinates, {
        radius: 5,
        color: loc.color,
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
    }).bindPopup(loc.popupContent);

    for (var tripName in loc.visits) {
        if (!loc.visits.hasOwnProperty(tripName)) continue;

        marker.addTo(groups[tripName]);
    }
}

var attr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

var grayscale = L.tileLayer(url, {id: 'mapbox.light', attribution: attr, maxZoom: 18}),
    streets = L.tileLayer(url, {id: 'mapbox.streets', attribution: attr, maxZoom: 18}),
    emerald = L.tileLayer(url, {id: 'mapbox.emerald', attribution: attr, maxZoom: 18});

var initLayers = [emerald]
// start showing all trips
for (key in groups) {
    if (!groups.hasOwnProperty(key)) continue;
    initLayers.push(groups[key]);
}

var map = L.map('map', {
    center: [15, 0],
    zoom: 2,
    layers: initLayers
});

var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets,
    "Emerald": emerald
};

L.control.layers(baseLayers, groups).addTo(map);

var marker = L.circleMarker([43.0730517,-89.40123019999999], {
    radius: 5,
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
}).bindPopup("<p><strong>Madison</strong><br>Where we met, lived for 5 years, and got married!</p>").addTo(map);
