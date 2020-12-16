<template>
  <!--Seccion noticias-->
  <div id="news" class="noticias">
    <div class="tituloNoticias">
      <h2>Ultimas Noticias</h2>
    </div>
    <div class="contenedorNoticias">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              v-bind:src="noticiaAnime1Imagen"
              alt="Imagen Noticia 1"
            />
            <div class="card-body">
              <h5 class="card-title">{{ noticiaAnime1Titular }}</h5>
              <p class="card-text">{{ noticiaAnime1Descripcion }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Fecha: {{ noticiaAnime1Fecha }}</small>
              <p>
                <a
                  v-bind:href="noticiaAnime1Url"
                  class="link-info"
                  target="_blank"
                >
                  Seguir Leyendo..</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              v-bind:src="noticiaAnime2Imagen"
              alt="Imagen Noticia 2"
            />
            <div class="card-body">
              <h5 class="card-title">{{ noticiaAnime2Titular }}</h5>
              <p class="card-text">{{ noticiaAnime2Descripcion }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Fecha: {{ noticiaAnime2Fecha }}</small>
              <p>
                <a
                  v-bind:href="noticiaAnime2Url"
                  class="link-info"
                  target="_blank"
                >
                  Seguir Leyendo..</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              v-bind:src="noticiaManga1Imagen"
              alt="Imagen Noticia 3"
            />
            <div class="card-body">
              <h5 class="card-title">{{ noticiaManga1Titular }}</h5>
              <p class="card-text">{{ noticiaManga1Descripcion }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Fecha: {{ noticiaManga1Fecha }}</small>
              <p>
                <a
                  v-bind:href="noticiaManga1Url"
                  class="link-info"
                  target="_blank"
                >
                  Seguir Leyendo..</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              v-bind:src="noticiaManga2Imagen"
              alt="Imagen Noticia 4"
            />
            <div class="card-body">
              <h5 class="card-title">{{ noticiaManga2Titular }}</h5>
              <p class="card-text">{{ noticiaManga2Descripcion }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Fecha: {{ noticiaManga2Fecha }}</small>
              <p>
                <a
                  v-bind:href="noticiaManga1Url"
                  class="link-info"
                  target="_blank"
                >
                  Seguir Leyendo..
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SeccionNoticias",
  data() {
    return {
      noticiaAnime1Titular: "Noticia no encontrada",
      noticiaAnime1Descripcion: "No se encontro la noticia",
      noticiaAnime1Imagen: "https://i.imgur.com/dZv4sHc.jpg",
      noticiaAnime1Url: "",
      noticiaAnime1Fecha: "2020",
      noticiaAnime2Titular: "Noticia no encontrada",
      noticiaAnime2Descripcion: "No se encontro la noticia",
      noticiaAnime2Imagen: "https://i.imgur.com/dZv4sHc.jpg",
      noticiaAnime2Url: "",
      noticiaAnime2Fecha: "2020",
      noticiaManga1Titular: "Noticia no encontrada",
      noticiaManga1Descripcion: "No se encontro la noticia",
      noticiaManga1Imagen: "https://i.imgur.com/dZv4sHc.jpg",
      noticiaManga1Url: "",
      noticiaManga1Fecha: "2020",
      noticiaManga2Titular: "Noticia no encontrada",
      noticiaManga2Descripcion: "No se encontro la noticia",
      noticiaManga2Imagen: "https://i.imgur.com/dZv4sHc.jpg",
      noticiaManga2Url: "",
      noticiaManga2Fecha: "2020",
    };
  },
  methods: {
    async agregarNoticia() {
      /*Implementacion api por anime y metodo fetch*/
      let noticiasAnime = await fetch(
        "https://jikan1.p.rapidapi.com/anime/16498/news",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "8a781b4168msh9abb85788f7abc4p178096jsne8f307d2bdb1",
            "x-rapidapi-host": "jikan1.p.rapidapi.com",
          },
        }
      );
      let noticiasAnimeJSON = await noticiasAnime.json();

      let datosNoticiaAnime = noticiasAnimeJSON.articles;

      if (datosNoticiaAnime[0] != null) {
        this.noticiaAnime1Titular = datosNoticiaAnime[0]["title"];
        this.noticiaAnime1Imagen = datosNoticiaAnime[0]["image_url"];
        this.noticiaAnime1Descripcion = datosNoticiaAnime[0]["intro"];
        this.noticiaAnime1Fecha = datosNoticiaAnime[0]["date"];
        this.noticiaAnime1Url = datosNoticiaAnime[0]["url"];

        this.noticiaAnime2Titular = datosNoticiaAnime[1]["title"];
        this.noticiaAnime2Imagen = datosNoticiaAnime[1]["image_url"];
        this.noticiaAnime2Descripcion = datosNoticiaAnime[1]["intro"];
        this.noticiaAnime2Fecha = datosNoticiaAnime[1]["date"];
        this.noticiaAnime2Url = datosNoticiaAnime[1]["url"];
      }
/* implementacion api por manga */
      let noticiasManga = await fetch(
        "https://jikan1.p.rapidapi.com/manga/2/news",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "8a781b4168msh9abb85788f7abc4p178096jsne8f307d2bdb1",
            "x-rapidapi-host": "jikan1.p.rapidapi.com",
          },
        }
      );
      let noticiasMangaJSON = await noticiasManga.json();
      let datosNoticiaManga = noticiasMangaJSON.articles;
      if (datosNoticiaManga[0] != null) {
        this.noticiaManga1Titular = datosNoticiaManga[0]["title"];
        this.noticiaManga1Imagen = datosNoticiaManga[0]["image_url"];
        this.noticiaManga1Descripcion = datosNoticiaManga[0]["intro"];
        this.noticiaManga1Fecha = datosNoticiaManga[0]["date"];
        this.noticiaManga1Url = datosNoticiaManga[0]["url"];

        this.noticiaManga2Titular = datosNoticiaManga[5]["title"];
        this.noticiaManga2Imagen = datosNoticiaManga[5]["image_url"];
        this.noticiaManga2Descripcion = datosNoticiaManga[5]["intro"];
        this.noticiaManga2Fecha = datosNoticiaManga[5]["date"];
        this.noticiaManga2Url = datosNoticiaManga[5]["url"];
      }
    },
  },
  created: function () {
    this.agregarNoticia();
  },
};
</script>