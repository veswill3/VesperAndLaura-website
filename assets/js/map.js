// Note: travel_log will already be loaded from travel_metadata.js

(function() {
    var map = L.map('map', {
        center: [2, 0],
        zoom: 2,
        maxBounds: L.latLngBounds([-90, -180], [90, 180])
    });

    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
        minZoom: 2
    }).addTo(map);

    function buildPopupContent(loc) {
        var popupContent = '<p><strong>'+loc.name+', '+loc.country_name+'</strong>';
        if (loc.dates_visited) {
            dateStr = loc.dates_visited.toString();
            dateStr = dateStr.replace(/:/g, ' to ');     // ':' => 'to'
            dateStr = dateStr.replace(/,/g, '<br>and '); // ',' => 'and'
            popupContent += '<br>Visited: '+dateStr;
        }
        popupContent += '</p>';
        if (loc.image_path) {
            popupContent += '<img src="/images/'+loc.image_path+'" style="width: 100%;">';
        }
        if (loc.blog_url) {
            popupContent += '<p><a href="/'+loc.blog_url+'/">See the full post for more info</a>.</p>';
        }
        return popupContent;
    }

    var latLngMarkerMap = {},
        markerGroup = L.markerClusterGroup({ maxClusterRadius: 35 });

    travel_log.forEach(function(loc) {
        if (!loc.add_to_map) return;
        var latLng = loc.latLng,
            marker;
        // find or create a marker for this location
        if (latLng in latLngMarkerMap) {
            marker = latLngMarkerMap[latLng];
            // Add popup content from this visit
            marker._popup.setContent(marker._popup.getContent()+'<hr>'+buildPopupContent(loc));
        } else {
            marker = L.marker(latLng);
            marker.bindPopup(buildPopupContent(loc));
            markerGroup.addLayer(marker);
            latLngMarkerMap[latLng] = marker;
        }
    });

    // Create a marker for Madison WI
    markerGroup.addLayer(L.marker([43.0730517,-89.40123019999999])
        .bindPopup('<p><strong>Madison</strong><br>Where we met, lived for 5 years, and got married!</p>'));

    map.addLayer(markerGroup);
})();
