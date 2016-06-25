// Note: tripList will already be loaded from /map/our_travels.js

var map = L.map("map", {
    center: [2, 0],
    zoom: 2,
    maxBounds: L.latLngBounds([-90, -180], [90, 180])
});
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw", {
    id: "mapbox.emerald",
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    minZoom: 2
}).addTo(map);

function buildPopupContent(loc) {
    popupContent = "<p><strong>" + loc.name + ", " + loc.country_name + "</strong>";

    if (loc.dates_visited) {
        dateStr = loc.dates_visited.toString();
        dateStr = dateStr.replace(new RegExp(":", "g"), " to ");  // replace : with to
        dateStr = dateStr.replace(new RegExp(",", "g"), "<br>and "); // replace , with and
        popupContent += "<br>Visited: " + dateStr;
    }

    popupContent += "</p>";

    if (loc.image_path) {
        popupContent += "<img src=\"/images/" + loc.image_path + "\" style=\"width: 100%;\">";
    }

    if (loc.blog_url) {
        popupContent += "<p><a href=\"/" + loc.blog_url + "/\">See the full post for more info</a>.</p>";
    }

    return popupContent;
}

var latLngMarkerIndex = {};

var markers = L.markerClusterGroup({
    maxClusterRadius: 35
});

for (var i = 0; i < travel_log.length; i++) {
    var loc = travel_log[i];
    if (!loc.add_to_map) { continue; }

    var latLng = loc.latLng;

    var marker;
    // find or create a marker for this location
    if (latLng in latLngMarkerIndex) {
        marker = latLngMarkerIndex[latLng];
        // Add popup content from this visit
        var popup = marker._popup;
        popup.setContent(popup.getContent() + "<hr>" + buildPopupContent(loc));
    } else {
        var marker = L.marker(latLng).bindPopup(buildPopupContent(loc));
        markers.addLayer(marker);
        latLngMarkerIndex[latLng] = marker;
    }
}

// Create a marker for Madison WI
markers.addLayer(L.marker([43.0730517,-89.40123019999999]).bindPopup("<p><strong>Madison</strong><br>Where we met, lived for 5 years, and got married!</p>"));

map.addLayer(markers);
