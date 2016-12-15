(function() {
    var imgs = [
        {
            "path": "china/pagoda.jpg",
            "info": "Beijing, China",
            "link": "Our-first-adventure-in-asia"
        },
        {
            "path": "st_martin/beach_with_moon.jpg",
            "info": "St. Martin",
            "link": "st-martin"
        },
        {
            "path": "panama/old_city_boats.jpg",
            "info": "Panama City",
            "link": "Panama-City"
        },
        {
            "path": "mexico/roof_garden.jpg",
            "info": "Chapultepec Castle in Mexico City",
            "link": "Mexico-City"
        },
        {
            "path": "mexico/pyramids_pano.jpg",
            "info": "Pyramids of Teotihuacan outside Mexico City",
            "link": "Mexico-City"
        },
        {
            "path": "lake_atitlan/boats_on_the_lake.jpg",
            "info": "Lake Atitlán from Panajachel, Guatemala",
            "link": "Panajachel_Guatemala"
        },
        {
            "path": "antigua/volcano_sunset.jpg",
            "info": "From Pacaya Volcano, Guatemala",
            "link": "Antigua-Guatemala"
        },
        {
            "path": "bogota/monserrate_pano.jpg",
            "info": "Monserrate above Bogotá, Colombia",
            "link": "Bogota-Colombia"
        },
        {
            "path": "quito/plaza_grande.jpg",
            "info": "Plaza Grande in Quito, Ecuador",
            "link": "Quito-Ecuador"
        },
        {
            "path": "quito/view_from_the_top.jpg",
            "info": "Quito, Ecuador",
            "link": "Quito-Ecuador"
        },
        {
            "path": "los_monos/capachino_blancos.jpg",
            "info": "Los Monos near Puyo, Ecuador",
            "link": "Los-Monos"
        },
        {
            "path": "banos/from_bellavista.jpg",
            "info": "Bellavista viewpoint above Baños, Ecuador",
            "link": "Banos-Ecuador"
        },
        {
            "path": "cuenca/top_of_cathedral_with_laura.jpg",
            "info": "Cuenca, Ecuador",
            "link": "Cuenca-Ecuador"
        },
        {
            "path": "mancora/sunset.jpg",
            "info": "Mancora, Peru",
            "link": "Mancora-Peru"
        },
        {
            "path": "trujillo/admin_buildings.jpg",
            "info": "Chan Chan outside Trujillo, Peru",
            "link": "Trujillo-Peru"
        },
        {
            "path": "huaraz/top_of_wilcacocha.jpg",
            "info": "Above Lake Wilcacocha near Huaraz, Peru",
            "link": "Huaraz-Peru"
        },
        {
            "path": "santa_cruz/lake_before_santa_cruz.jpg",
            "info": "Santa Cruz Trek near Huaraz, Peru",
            "link": "Santa-Cruz-Trek"
        },
        {
            "path": "santa_cruz/santa_cruz_summit_2.jpg",
            "info": "From Punto Union on the Santa Cruz Trek near Huaraz, Peru",
            "link": "Santa-Cruz-Trek"
        },
        {
            "path": "lima/cooking_class_food.jpg",
            "info": "Cooking with Chef Hector in Lima, Peru",
            "link": "Lima-Peru"
        },
        {
            "path": "ica/dark_dune.jpg",
            "info": "Huacachina, Peru",
            "link": "Ica-Peru"
        },
        {
            "path": "arequipa/cruz_del_condor.jpg",
            "info": "Cruz Del Condor in Colca Canyon, Peru",
            "link": "Arequipa-Peru"
        },
        {
            "path": "arequipa/rain.jpg",
            "info": "Rain coming in over the volcanoes outside Arequipa, Peru",
            "link": "Arequipa-Peru"
        },
        {
            "path": "lake_titicaca/copacabana_harbor.jpg",
            "info": "Copacabana harbor on Lake Titicaca",
            "link": "Lake-Titicaca"
        },
        {
            "path": "lake_titicaca/isla_del_sol.jpg",
            "info": "Isla del Sol in Lake Titicaca",
            "link": "Lake-Titicaca"
        },
        {
            "path": "lake_titicaca/isla_del_sol2.jpg",
            "info": "Isla del Sol in Lake Titicaca",
            "link": "Lake-Titicaca"
        },
        {
            "path": "lake_titicaca/bus_ride_to_puno.jpg",
            "info": "Along the drive to Puno, Peru",
            "link": "Lake-Titicaca"
        },
        {
            "path": "la_paz/death_road.jpg",
            "info": "Upper portion of the Death Road",
            "link": "La-Paz-Bolivia"
        },
        {
            "path": "sucre/sucre_mirador.jpg",
            "info": "Sucre, Bolivia",
            "link": "Sucre-Bolivia"
        },
        {
            "path": "salt_flats/laguna_colorado3.jpg",
            "info": "Laguna Colorado in southern Bolivia",
            "link": "Salt-Flats"
        },
        {
            "path": "salt_flats/laguna_verde2.jpg",
            "info": "Laguna Verde in southern Bolivia",
            "link": "Salt-Flats"
        },
        {
            "path": "salt_flats/salt_flat_sunset.jpg",
            "info": "Sunset over the Bolivian Salt Flats",
            "link": "Salt-Flats"
        },
        {
            "path": "/salt_flats/salt_flat.jpg",
            "info": "Salar de Uyuni, Bolivia",
            "link": "Salt-Flats"
        },
        {
            "path": "/valparaiso_chile/valparaiso_cityscape.jpg",
            "info": "Valparaiso, Chile",
            "link": "Valparaiso-Chile"
        },
        {
            "path": "/valparaiso_chile/valparaiso_harbor.jpg",
            "info": "Valparaiso, Chile",
            "link": "Valparaiso-Chile"
        },
        {
            "path": "valparaiso_chile/valparaiso_cityscape2.jpg",
            "info": "Valparaiso, Chile",
            "link": "Valparaiso-Chile"
        },
        {
            "path": "santiago_chile/santiago.jpg",
            "info": "Santiago, Chile",
            "link": "Santiago-Chile"
        },
        {
            "path": "buenos_aires/book_store_pano.jpg",
            "info": "El Ateneo Grand Splendid in Buenos Aires, Argentina",
            "link": "Buenos-Aires-Argentina"
        },
        {
            "path": "buenos_aires/buenos_aires_skyline.jpg",
            "info": "Buenos Aires, Argentina",
            "link": "Buenos-Aires-Argentina"
        },
        {
            "path": "ushuaia/beagle_channel_pano.jpg",
            "info": "On the Beagle Channel in Tierra del Fuego",
            "link": "Ushuaia-Argentina"
        },
        {
            "path": "ushuaia/beagle_channel_sunset.jpg",
            "info": "Islands of Tierra del Fuego in the Beagle Channel",
            "link": "Ushuaia-Argentina"
        },
        {
            "path": "ushuaia/tierra_del_fuego_national_park_pano.jpg",
            "info": "Tierra del Fuego National Park",
            "link": "Ushuaia-Argentina"
        },
        {
            "path": "ushuaia/laguna_esmerelda_hike_river_pano.jpg",
            "info": "Hiking to Laguna Esmeralda",
            "link": "Ushuaia-Argentina"
        },
        {
            "path": "ushuaia/laguna_esmerelda_pano.jpg",
            "info": "Laguna Esmeralda near Ushuaia, Argentina",
            "link": "Ushuaia-Argentina"
        },
        {
            "path": "ushuaia/ushuaia_overlook.jpg",
            "info": "Overlooking Ushuaia, Argentina",
            "link": "Ushuaia-Argentina"
        },
        {
            "path": "calafate_chalten/glacier_from_balconies_pano.jpg",
            "info": "Perito Moreno Glacier near El Calafate, Argentina",
            "link": "El-Calafate-and-El-Chalten-Argentina"
        },
        {
            "path": "calafate_chalten/mirador_de_las_agulias_pano.jpg",
            "info": "Mirador de las Agulias near El Chaltén, Argentina",
            "link": "El-Calafate-and-El-Chalten-Argentina"
        },
        {
            "path": "calafate_chalten/laguna_torre_pano.jpg",
            "info": "Laguna Torre near El Chaltén, Argentina",
            "link": "El-Calafate-and-El-Chalten-Argentina"
        },
        {
            "path": "calafate_chalten/laguna_de_los_tres_with_fitzroy_pano.jpg",
            "info": "Monte Fitz Roy overlooking Laguna de los Tres",
            "link": "El-Calafate-and-El-Chalten-Argentina"
        },
        {
            "path": "around_coyhaique/cerro_castillo_pano.jpg",
            "info": "Near Villa Cerro Castillo, Chile",
            "link": "Around-Coyhaique-Chile"
        },
        {
            "path": "around_coyhaique/ice_holes_above.jpg",
            "info": "Ice formations in the norther ice fields of San Rafael National Park, Chile",
            "link": "Around-Coyhaique-Chile"
        },
        {
            "path": "around_coyhaique/monkey_puzzle_tree.jpg",
            "info": "A Monkey Puzzle tree in Coyhaique, Chile",
            "link": "Around-Coyhaique-Chile"
        },
        {
            "path": "around_coyhaique/laguna_cerro_castillo_pano2.jpg",
            "info": "Laguna Cerro Castillo near Villa Cerro Castillo, Chile",
            "link": "Around-Coyhaique-Chile"
        },
        {
            "path": "bolson_bariloche/cerro_campanario_pano.jpg",
            "info": "View from the top of Cerro Campanario in Bariloche, Argentina",
            "link": "El-Bolson-and-Bariloche"
        },
        {
            "path": "iguazu/iguazu_pano.jpg",
            "info": "From the Argentina side of Iguazu Falls",
            "link": "Iguazu-Falls"
        },
        {
            "path": "iguazu/iguazu_pano2.jpg",
            "info": "From the Brazilian side of Iguazu Falls",
            "link": "Iguazu-Falls"
        },
        {
            "path": "iguazu/iguazu_pano3.jpg",
            "info": "From the Argentina side of Iguazu Falls",
            "link": "Iguazu-Falls"
        },
        {
            "path": "rio/view_partway_up_sugarloaf_pano.jpg",
            "info": "View from the top of Urca Hill in Rio de Janeiro, Brazil",
            "link": "Rio-de-Janeiro-Brazil"
        },
        {
            "path": "rio/christ_above_pano.jpg",
            "info": "Christ the Redeemer watching over Rio de Janeiro, Brazil",
            "link": "Rio-de-Janeiro-Brazil"
        },
        {
            "path": "rio/christ_the_redeemer_pano2.jpg",
            "info": "View from Christ the Redeemer in Rio de Janeiro, Brazil",
            "link": "Rio-de-Janeiro-Brazil"
        },
            {
            "path": "rio/ipanema_beach_pano.jpg",
            "info": "Ipanema Beach in Rio de Janeiro, Brazil",
            "link": "Rio-de-Janeiro-Brazil"
        },
        {
            "path": "rio/christ_the_redeemer_pano.jpg",
            "info": "View from Christ the Redeemer in Rio de Janeiro, Brazil",
            "link": "Rio-de-Janeiro-Brazil"
        },
        {
            "path": "copenhagen/nyhavn.jpg",
            "info": "Nyhavn in Copenhagen, Denmark",
            "link": "Copenhagen-Denmark"
        },
        {
            "path": "norway/frogner_wide.jpg",
            "info": "Frogner Park in Oslo, Norway",
            "link": "Norway"
        },
        {
            "path": "norway/overlooking_bergen2_pano.jpg",
            "info": "Bergen, Norway",
            "link": "Norway"
        },
        {
            "path": "norway/overlooking_bergen_pano.jpg",
            "info": "Bergen, Norway",
            "link": "Norway"
        },
        {
            "path": "stockholm/overlooking_stockholm_pano.jpg",
            "info": "Stockholm, Sweden",
            "link": "Stockholm-Sweden"
        },
        {
            "path": "austria_slovenia/butterfly_house.jpg",
            "info": "The Imperial Butterfly House in Vienna, Austria",
            "link": "Austria-and-Slovenia"
        },
        {
            "path": "austria_slovenia/hallstatt_village.jpg",
            "info": "Hallstatt Village, Austria",
            "link": "Austria-and-Slovenia"
        },
        {
            "path": "austria_slovenia/lake_bohinj.jpg",
            "info": "Lake Bohinj, Slovenia",
            "link": "Austria-and-Slovenia"
        },
        {
            "path": "croatia1/krk_town_pano.jpg",
            "info": "Krk Town harbor, Krk Island Croatia",
            "link": "Croatia-part-one"
        },
        {
            "path": "croatia1/plitvice_waterfall_pano.jpg",
            "info": "Plitvice Lakes National Park, Croatia",
            "link": "Croatia-part-one"
        },
        {
            "path": "croatia2/dubrovnik_pano2.jpg",
            "info": "Old Town Dubrovnik, Croatia",
            "link": "Croatia-part-two"
        },
        {
            "path": "croatia2/dubrovnik_pano.jpg",
            "info": "Old Town Dubrovnik, Croatia",
            "link": "Croatia-part-two"
        },
        {
            "path": "budapest/danube_above_pano.jpg",
            "info": "Looking out over the Danube River in Budapest, Hungary",
            "link": "Budapest-Hungary"
        },
        {
            "path": "budapest/budapest_central_market_pano.jpg",
            "info": "Great Market Hall in Budapest, Hungary",
            "link": "Budapest-Hungary"
        },
        {
            "path": "budapest/danube_from_buda_castle_pano.jpg",
            "info": "Looking out over the Danube River from Buda Castle in Budapest, Hungary",
            "link": "Budapest-Hungary"
        },
        {
            "path": "budapest/parliament_at_night.jpg",
            "info": "Hungarian Parliament at night in Budapest, Hungary",
            "link": "Budapest-Hungary"
        },
        {
            "path": "poland/library_garden.jpg",
            "info": "The library at the Univeristy of Warsaw in Poland",
            "link": "Poland"
        },
        {
            "path": "poland/yarn_art.jpg",
            "info": "Art in Kraków, Poland",
            "link": "Poland"
        },
        {
            "path": "ireland/slieve_league_pilgrams_path.jpg",
            "info": "Pilgrams Path to Slieve League in Donegal, Ireland",
            "link": "Ireland"
        },
        {
            "path": "ireland/slieve_league_clifs_lookout_pano.jpg",
            "info": "Slieve League in Donegal, Ireland",
            "link": "Ireland"
        },
        {
            "path": "ireland/giants_causeway_finns_chimney_pano.jpg",
            "info": "Finn's Chimney near Giant’s Causeway in Northern Ireland",
            "link": "Ireland"
        },
        {
            "path": "ireland/causeway_coastal_countryside_pano.jpg",
            "info": "View along the Causeway Coastal in Northern Ireland",
            "link": "Ireland"
        },
        {
            "path": "ireland/connor_pass_pano.jpg",
            "info": "Connor Pass in Dingle, Ireland",
            "link": "Ireland"
        },
        {
            "path": "ireland/kylemore_abbey_pano.jpg",
            "info": "Kylemore Abbey in Galway, Ireland",
            "link": "Ireland"
        },
        {
            "path": "scotland/castle_eilean_donan_pano.jpg",
            "info": "Eilean Donan Castle in Scotland",
            "link": "Scotland"
        },
        {
            "path": "scotland/quiraing_hike_pano2.jpg",
            "info": "Quiraing Hike on the Isle of Skye, Scotland",
            "link": "Scotland"
        },
        {
            "path": "scotland/old_man_of_storr_hike_pano.jpg",
            "info": "Old Man of Storr on the Isle of Skye, Scotland",
            "link": "Scotland"
        },
        {
            "path": "scotland/glenfinnan_viaduct_pano.jpg",
            "info": "Glenfinnan Viaduct near Fort William, Scotland",
            "link": "Scotland"
        },
        {
            "path": "scotland/three_sisters_pano2.jpg",
            "info": "Three Sisters in Glencoe, Scotland",
            "link": "Scotland"
        },
        {
            "path": "scotland/hidden_valley_above_three_sisters_pano.jpg",
            "info": "The Hidden Valley at the top of the Three Sisters in Glencoe, Scotland",
            "link": "Scotland"
        },
        {
            "path": "scotland/loch_lomond_pano.jpg",
            "info": "Loch Lomond, Scotland",
            "link": "Scotland"
        },
        {
            "path": "scotland/scottish_highlands_pano.jpg",
            "info": "Scottish Highlands",
            "link": "Scotland"
        },
        {
            "path": "swiss_alps/sun_through_clouds.jpg",
            "info": "Lake Thun in Interlaken, Switzerland",
            "link": "Swiss-Alps"
        },
        {
            "path": "swiss_alps/brienzsee_pano.jpg",
            "info": "Lake Brienz in Interlaken, Switzerland",
            "link": "Swiss-Alps"
        },
        {
            "path": "swiss_alps/brienzsee_pano2.jpg",
            "info": "Lake Brienz in Interlaken, Switzerland",
            "link": "Swiss-Alps"
        },
        {
            "path": "swiss_alps/mannlichen_pano.jpg",
            "info": "The view from Männlichen near Interlaken, Switzerland",
            "link": "Swiss-Alps"
        },
        {
            "path": "swiss_alps/schynige_platte_pano2.jpg",
            "info": "The view from Schynige Platte near Interlaken, Switzerland",
            "link": "Swiss-Alps"
        },
        {
            "path": "prague/vltava_pano.jpg",
            "info": "Prague from the Vltava River",
            "link": "Prague-Czech-Republic"
        },
        {
            "path": "germany/frankfurt_skyline_pano.jpg",
            "info": "Frankfurt, Germany",
            "link": "Germany"
        },
        {
            "path": "germany/oktoberfest_hofbrau_tent.jpg",
            "info": "Inside the Hofbräu tent at Oktoberfest in Munich, Germany",
            "link": "Germany"
        }
        ,
        {
            "path": "germany/rudesheimer_pano.jpg",
            "info": "The vineyards of Rüdesheim am Rhein, Germany",
            "link": "Germany"
        },
        {
            "path": "paris/eiffel_tower_and_river.jpg",
            "info": "Under the Eiffel Tower in Paris, France",
            "link": "Paris-France"
        },
        {
            "path": "mumbai/looking_out_from_the_gate_of_india_pano.jpg",
            "info": "Overlooking the Arabian Sea near the Gateway of India in Mumbai",
            "link": "Mumbai-India"
        },
        {
            "path": "udaipur/palace_in_udaipur_pano.jpg",
            "info": "Udaipur, India",
            "link": "Udaipur-India"
        },
        {
            "path": "jodhpur/overlooking_jodhpur_pano.jpg",
            "info": "Overlooking the blue city in Jodhpur, India",
            "link": "Jodhpur-India"
        },
        {
            "path": "pushkar/color_powder.jpg",
            "info": "Street market in Pushkar, India",
            "link": "Pushkar-India"
        }
        // ,
        // {
        //     "path": "pushkar/pushkar_sunset_pano.jpg",
        //     "info": "Sunset over Pushkar, India",
        //     "link": "Pushkar-India"
        // }
        // ,
        // {
        //     "path": "",
        //     "info": "",
        //     "link": ""
        // }
    ];

    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    imgs = shuffle(imgs);

    var featImg = document.getElementById("feature-img"),
        featImgInfo = document.getElementById("feature-img-info"),
        prevBtn = document.getElementById("feature-img-previous-btn"),
        nextBtn = document.getElementById("feature-img-next-btn"),
        numImages = imgs.length,
        index = -1,
        timer = null; // so we can clear it

    prevBtn.onclick = function() {
        clearTimeout(timer);
        index -= 2; // back 2 because loadNextImage will add 1
        if (index < 0) {
            index = numImages + index;
        }
        loadNextImage();
    };

    nextBtn.onclick = function() {
        clearTimeout(timer);
        loadNextImage();
    };

    var loadNextImage = function() {
        index = (index + 1) % numImages;
        var img = imgs[index];
        var downloadingImage = new Image();
        downloadingImage.onload = function() {
            featImgInfo.innerHTML = img.info;
            featImgInfo.setAttribute("href", "/" + img.link);
            featImg.src = this.src;
            timer = setTimeout(loadNextImage, 10000);
        };
        downloadingImage.src = featImg.getAttribute("data-img-base") + img.path;
    };
    loadNextImage();
})();
