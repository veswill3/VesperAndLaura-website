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
    "path": "arequipa/laura_with_rocks.jpg",
    "info": "Volcanic rock formations outside Arequipa, Peru",
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
  }
];

// Choose an image at random
var i = Math.floor(Math.random() * (imgs.length));

var featImg = document.getElementById("feature-img");
var choosenImg = featImg.getAttribute("src") + imgs[i].path;
featImg.setAttribute("src", choosenImg);
var featImgInfo = document.getElementById("feature-img-info");
featImgInfo.innerHTML = imgs[i].info;
featImgInfo.setAttribute("href", "/" + imgs[i].link);
