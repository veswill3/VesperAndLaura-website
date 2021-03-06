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
        },
        {
            "path": "pushkar/pushkar_sunset_pano.jpg",
            "info": "Sunset over Pushkar, India",
            "link": "Pushkar-India"
        },
        {
            "path": "jaipur/view_from_top_of_hindu_temple_pano.jpg",
            "info": "Looking out from atop a Hindu temple near Jaipur, India",
            "link": "Jaipur-India"
        },
        {
            "path": "jaipur/sagar_pano.jpg",
            "info": "Sagar, a water reservoir near Jaipur, India",
            "link": "Jaipur-India"
        },
        {
            "path": "jaipur/stepwell_pano.jpg",
            "info": "A stepwell near Jaipur, India",
            "link": "Jaipur-India"
        },
        {
            "path": "jaipur/wall_above_sagar_pano.jpg",
            "info": "The wall above Sagar with views of the Amber Fort near Jaipur, India",
            "link": "Jaipur-India"
        }
        ,
        {
            "path": "bundi/todaraisingh_step_well_pano.jpg",
            "info": "Hadi Rani Ki Baori in Todaraisingh, India",
            "link": "Bundi-India"
        },
        {
            "path": "bundi/bundi_palace_garden_pano.jpg",
            "info": "Garh Palace garden in Bundi, India",
            "link": "Bundi-India"
        },
        {
            "path": "bundi/bundi_from_palace_pano.jpg",
            "info": "Looking out from Garh Palace in Bundi, India",
            "link": "Bundi-India"
        },
        {
            "path": "bundi/bundi_from_across_pond_pano.jpg",
            "info": "Bundi, India",
            "link": "Bundi-India"
        },
        {
            "path": "bundi/todaraisingh_fort_pano2.jpg",
            "info": "An abandoned fort in Todaraisingh, India",
            "link": "Bundi-India"
        },
        {
            "path": "agra/taj_first_view.jpg",
            "info": "The Taj Mahal near Agra, India",
            "link": "Agra-India"
        },
        {
            "path": "varanasi/ceremony_cover.jpg",
            "info": "Nightly ceremony along the Ganges in Varanasi, India",
            "link": "Varanasi-India"
        },
        {
            "path": "kolkata/victoria_memorial.jpg",
            "info": "The Victoria Memorial in Kolkata, India",
            "link": "Kolkata-India"
        },
        {
            "path": "bangkok/wat_in_thailand.jpg",
            "info": "Ruins in Ayutthaya, Thailand",
            "link": "Bangkok-Thailand"
        },
        {
            "path": "chiang_mai/view_from_doi_suthep_temple.jpg",
            "info": "Overlooking Chiang Mai from Doi Suthep in Thailand",
            "link": "Chiang-Mai-Thailand"
        },
        {
            "path": "pai_chiang_rai/pai_canyon_sunset_pano.jpg",
            "info": "Sunset from the canyons in Pai, Thailand",
            "link": "Pai-Chiang-Rai-Thailand"
        },
        {
            "path": "pai_chiang_rai/white_temple_pano.jpg",
            "info": "Wat Rong Khun outside Chiang Rai, Thailand",
            "link": "Pai-Chiang-Rai-Thailand"
        },
        {
            "path": "pai_chiang_rai/chinese_village_lookout_pano.jpg",
            "info": "Looking out from the Chinese Village near Pai, Thailand",
            "link": "Pai-Chiang-Rai-Thailand"
        },
        {
            "path": "laos/overlooking_luang_probang_from_mt_phousi_pano.jpg",
            "info": "The view from Mt. Phouse in Luang Probang, Laos",
            "link": "Laos"
        },
        {
            "path": "laos/vang_vieng_pano2.jpg",
            "info": "The countryside near Vang Vieng, Laos",
            "link": "Laos"
        },
        {
            "path": "laos/from_hot_air_balloon_pano.jpg",
            "info": "Looking down from a hot air balloon over Vang Vieng, Laos",
            "link": "Laos"
        },
        {
            "path": "laos/viewpoint_near_vang_vieng_pano.jpg",
            "info": "The countryside near Vang Vieng, Laos",
            "link": "Laos"
        },
        {
            "path": "hanoi/vietnam_war_museum_pano.jpg",
            "info": "The Vietnam War Museum in Hanoi, Vietnam",
            "link": "Hanoi-Vietnam"
        },
        {
            "path": "sapa_catba/sapa_hike3_pano.jpg",
            "info": "Rice paddies in Sa Pa, Vietnam",
            "link": "SaPa-and-CatBa-Vietnam"
        },
        {
            "path": "sapa_catba/sapa_hike1_pano.jpg",
            "info": "Rice paddies in Sa Pa, Vietnam",
            "link": "SaPa-and-CatBa-Vietnam"
        },
        {
            "path": "sapa_catba/sapa_water_fall_pano.jpg",
            "info": "Near Sa Pa, Vietnam",
            "link": "SaPa-and-CatBa-Vietnam"
        },
        {
            "path": "sapa_catba/lan_ha_pano.jpg",
            "info": "Lan Ha Bay, Vietnam",
            "link": "SaPa-and-CatBa-Vietnam"
        },
        {
            "path": "sapa_catba/view_from_cat_ba_cannon_fort2_pano.jpg",
            "info": "View from the Cannon Fort on Cát Bà, Vietnam",
            "link": "SaPa-and-CatBa-Vietnam"
        },
        {
            "path": "sapa_catba/cat_ba_national_park_viewpoint2_pano.jpg",
            "info": "Cát Bà National Park, Vietnam",
            "link": "SaPa-and-CatBa-Vietnam"
        },
        {
            "path": "sapa_catba/lan_ha_pano3.jpg",
            "info": "Lan Ha Bay, Vietnam",
            "link": "SaPa-and-CatBa-Vietnam"
        },
        {
            "path": "tam_coc_phong_nha/phong_nha_jungle.jpg",
            "info": "Phong Nha-Kẻ Bàng National Park, Vietnam",
            "link": "TamCoc-and-PhongNha-Vietnam"
        },
        {
            "path": "hue/citadel13.jpg",
            "info": "Inside the Imperial City in Huế, Vietnam",
            "link": "Hue-Vietnam"
        },
        {
            "path": "hue/tomb_feature.jpg",
            "info": "Near the tomb of Minh Mang, second emperor of Nguyen dynasty in Huế, Vietnam",
            "link": "Hue-Vietnam"
        },
        {
            "path": "hoian_danang/japanese_covered_bridge.jpg",
            "info": "The Japanese Covered Bridge in Hoi An, Vietnam",
            "link": "HoiAn-and-DaNang-Vietnam"
        },
        {
            "path": "hoian_danang/sun_through_the_rocks.jpg",
            "info": "Inside a cave temple of the Marble Mountains near Da Nang, Vietnam",
            "link": "HoiAn-and-DaNang-Vietnam"
        },
        {
            "path": "hoian_danang/marble_mountains_pano.jpg",
            "info": "From the top of the Marble Mountains near Da Nang, Vietnam",
            "link": "HoiAn-and-DaNang-Vietnam"
        },
        {
            "path": "hoian_danang/marble_mountains_pano2.jpg",
            "info": "From the top of the Marble Mountains near Da Nang, Vietnam",
            "link": "HoiAn-and-DaNang-Vietnam"
        },
        {
            "path": "hcmc/laura_excited_about_beer.jpg",
            "info": "Excited about beer in Ho Chi Minh City, Vietnam",
            "link": "Ho-Chi-Minh-City-Vietnam"
        },
        {
            "path": "dalat_cantho/roadside_lookout_dalat.jpg",
            "info": "The hills surrounding Đà Lạt, Vietnam",
            "link": "DaLat-and-CanTho-Vietnam"
        },
        {
            "path": "cambodia/angkor_wat3.jpg",
            "info": "Angkor Wat, Cambodia",
            "link": "Cambodia"
        },
        {
            "path": "thai_islands/ao_yon_beach_pano.jpg",
            "info": "Ao Yon beach on Phuket, Thailand",
            "link": "Thai-Islands"
        },
        {
            "path": "thai_islands/koh_tao_beachfront_night_pano.jpg",
            "info": "Koh Tao beachfront, Thailand",
            "link": "Thai-Islands"
        },
        {
            "path": "thai_islands/koh_tao_beach_palm2.jpg",
            "info": "Koh Tao, Thailand",
            "link": "Thai-Islands"
        },
        {
            "path": "thai_islands/koh_tao_beach_sunset_pano.jpg",
            "info": "Sunset off the island of Koh Tao in souther Thailand.",
            "link": "Thai-Islands"
        },
        {
            "path": "peninsular_malaysia/melaka_strait_mosque_sunset2.jpg",
            "info": "Sunset over the Strait of Malacca, in Malacca, Malaysia",
            "link": "Peninsular-Malaysia"
        },
        {
            "path": "singapore/singapore_inflatable_course.jpg",
            "info": "An inflatable course for kids on The Float @ Marina Bay in Singapore",
            "link": "Singapore"
        },
        {
            "path": "singapore/singapore_skyline5.jpg",
            "info": "The skyline in Singapore",
            "link": "Singapore"
        },
        {
            "path": "borneo/wading_into_bako.jpg",
            "info": "Wading into Bako National Park near Kuching, Malaysia",
            "link": "Borneo"
        },
        {
            "path": "philippines/ferry_clouds.jpg",
            "info": "Sunset on the ferry from Siquijor to Dumaguete in the Philippines",
            "link": "Philippines"
        },
        {
            "path": "philippines/chocolate_hills_pano.jpg",
            "info": "The Chocolate Hills on Bohol Island, the Philippines",
            "link": "Philippines"
        },
        {
            "path": "indonesia/senaru_pano.jpg",
            "info": "Senaru on Lombok, Indonesia",
            "link": "Indonesia"
        },
        {
            "path": "indonesia/padang_bai_harbor.jpg",
            "info": "Padang Bai harbor on Bali, Indonesia",
            "link": "Indonesia"
        }
        // ,
        // {
        //     "path": "indonesia/ubud_rice_terraces.jpg",
        //     "info": "Tegallalang Rice Terraces near Ubud, Bali",
        //     "link": "Indonesia"
        // }
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
