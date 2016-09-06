(function() {
    var imgs = [
        {
            "path": "china/pagoda.jpg",
            "info": "Bejing, China",
            "link": "Our-first-adventure-in-asia"
        },
        {
            "path": "st_martin/beach_with_moon.jpg",
            "info": "St Marten",
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
            "info": "From Pacaya volcano, Guatemala",
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
            "info": "Above lake Wilcacocha near Huaraz Peru",
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
            "info": "Cooking with chef Hector in Lima, Peru",
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
            "info": "On the Beagle channel in Tierra del Fuego",
            "link": "Ushuaia-Argentina"
        },
        {
            "path": "ushuaia/beagle_channel_sunset.jpg",
            "info": "Islands of Tierra del Fuego in the Beagle channel",
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
            "info": "Laguna Esmeralda near Ushuaia Argentina",
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
            "info": "Ipanema beach in Rio de Janeiro, Brazil",
            "link": "Rio-de-Janeiro-Brazil"
        },
        {
            "path": "rio/christ_the_redeemer_pano.jpg",
            "info": "View from Christ the Redeemer in Rio de Janeiro, Brazil",
            "link": "Rio-de-Janeiro-Brazil"
        },
        {
            "path": "copenhagen/nyhavn.jpg",
            "info": "Nyhavn canal in Copenhagen, Denmark",
            "link": "Copenhagen-Denmark"
        },
        {
            "path": "norway/frogner_wide.jpg",
            "info": "Frogner park in Oslo, Norway",
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
        }
        // ,
        // {
        //     "path": "croatia1/plitvice_waterfall_pano.jpg",
        //     "info": "Plitvice Lakes National Park, Croatia",
        //     "link": "Croatia-part-one"
        // }
        // ,
        // {
        //     "path": "",
        //     "info": "",
        //     "link": ""
        // }
    ];
    // Choose an image at random
    var i = Math.floor(Math.random() * imgs.length),
        featImg = document.getElementById("feature-img"),
        choosenImg = featImg.getAttribute("src") + imgs[i].path;
        featImgInfo = document.getElementById("feature-img-info");
    featImg.setAttribute("src", choosenImg);
    featImgInfo.innerHTML = imgs[i].info;
    featImgInfo.setAttribute("href", "/" + imgs[i].link);
})();
