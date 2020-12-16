<template>
  <!--Seccion Banner servicios-->
  <header>
    <div
      id="carouselServicio"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselServicio"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselServicio"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselServicio"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://i.imgur.com/huCBacO.jpg"
            class="d-block w-100"
            alt="Imagen Servicio Cosplay Y Accesorios"
          />
          <div
            style="
              background-color: rgba(254, 238, 252, 40%);
              border-radius: 5%;
            "
            class="carousel-caption d-none d-md-block text-dark"
          >
            <h3>Cosplay Y Accesorios</h3>
            <p style="font-size: 20px;">
              Manejamos diversidad de productos para tus necesidades
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.imgur.com/c7gZMh1.jpgg"
            class="d-block w-100"
            alt="Imagen Servicio Musica"
          />
          <div
              style="
                background-color: rgba(254, 238, 252, 40%);
                border-radius: 5%;
              "
              class="carousel-caption d-none d-md-block text-dark"
            >
              <h3>Musica Asiatica</h3>
              <p style="font-size: 20px;">
                Queremos brindarte el mejor servicio y aqui en contraras tu musica
                favorita desde opening, j-rock, k-pop y mas...
              </p>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.imgur.com/OSxW7QB.jpg"
            class="d-block w-100"
            alt="Imagen Servicio Anime Y Manga"
          />
          <div
              style="
                background-color: rgba(254, 238, 252, 40%);
                border-radius: 5%;
              "
              class="carousel-caption d-none d-md-block text-dark"
            >
              <h3>Anime Y Manga</h3>
              <p style="font-size: 20px;">
                Te traemos todo tipo de manga y anime que se acomode a tus gustos
              </p>
            </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselServicio"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselServicio"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
    <!--
    
  --></header>
</template>

<script>
export default {
  name: "BannerServicio",
};
</script>
