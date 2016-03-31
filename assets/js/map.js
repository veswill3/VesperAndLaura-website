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
        popupContent += "<img src=\"/images/" + location.image + "\" style=\"width: 170px;\">";
    }

    if (location.post) {
        popupContent += "<p><a href=\"/" + location.post + "/\">See the full post for more info</a>.</p>";
    }

    return popupContent;
}

var groups = {};
var coordMarkerIndex = {};
var chronOrderofMarkers = [];
var currentMarkerIndex = -1; // nothing currently

for (var i = 0; i < tripList.length; i++) {
    var trip = tripList[i];
    groups[trip.tripName] = new L.LayerGroup();

    for (var j = 0; j < trip.locations.length; j++) {
        var loc = trip.locations[j];
        var coords = loc.coordinates;

        var marker;
        // find or create a marker for this location
        if (coords in coordMarkerIndex) {
            marker = coordMarkerIndex[coords];
            // update the color
            marker.options["color"] = trip.color;
            // Add popup content from this trip
            var popup = marker._popup;
            popup.setContent(popup.getContent() + "<hr>" + buildPopupContent(loc, trip));
        } else {
            var marker = L.circleMarker(loc.coordinates, {
                radius: 5,
                color: trip.color,
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
            }).bindPopup(buildPopupContent(loc, trip));
            coordMarkerIndex[coords] = marker;
        }

        marker.addTo(groups[trip.tripName]);
        chronOrderofMarkers.push(marker);
        // anytime a user manually opens a marker, update where we are in the list
        marker.on('click', (function(z){
            return function(){ currentMarkerIndex = z; }
        })(chronOrderofMarkers.length - 1));
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

function movePopup (direction) {
    if (direction === -1 && currentMarkerIndex === -1) { currentMarkerIndex = chronOrderofMarkers.length; } // because we are about to subtract 1
    // search in direction for the next openable popup
    var found = false;
    var marker;
    while (!found) {
        currentMarkerIndex += direction;
        if (currentMarkerIndex >= chronOrderofMarkers.length) { // past end of list, wrap to beginning
            currentMarkerIndex = 0;
        } else if (currentMarkerIndex < 0) { // past beginning of list, wrap to end
            currentMarkerIndex = chronOrderofMarkers.length - 1;
        }
        marker = chronOrderofMarkers[currentMarkerIndex];
        if (!marker._map) continue; // marker not on map, skip it
        found = true;
        marker.openPopup();
    }
};

document.getElementById("prev").onclick = function () { movePopup(-1); };
document.getElementById("next").onclick = function () { movePopup(1); };
