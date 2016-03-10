var map = L.map('map').setView([15, 0], 2);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.emerald'
}).addTo(map);

function onEachFeature(feature, layer) {
    var popupContent = ""

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}

// convert tripList from our_travels.geojson.js to feature collection
var ourTravels = [];
for (var i = tripList.length - 1; i >= 0; i--) {
    trip = tripList[i]
    featureCollection = {
        "type": "FeatureCollection",
        "features": []
    }
    for (var j = trip.locations.length - 1; j >= 0; j--) {
        loc = trip.locations[j]
        feature = {
            "geometry": {
                "type": "Point",
                "coordinates": loc.coordinates
            },
            "type": "Feature",
            "properties": {
                "popupContent": "<strong>Trip: "+trip.tripName+"</strong><p>Location: "+loc.locName+"</p>",
                "style": {color: trip.color}
            }
        }
        featureCollection.features.push(feature)
    }
    ourTravels.push(featureCollection)
}

// add features to the map
for (var i = ourTravels.length - 1; i >= 0; i--) {
    L.geoJson(ourTravels[i], {

        style: function (feature) {
            return feature.properties && feature.properties.style;
        },

        onEachFeature: onEachFeature,

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 4,
                // fillColor: "#ff7800",
                // color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        }
    }).addTo(map);
}
