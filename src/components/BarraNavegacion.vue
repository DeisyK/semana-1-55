<template>
    <!--Seccion barra Nav -->
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#"><div class="tituloNav">Anime DJK</div></a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#news">Noticias</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#team">Equipo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#footer">Pie De Pagina</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
    export default {
        name: "BarraNavegacion"
    }
</script>
<style>
@font-face{
    font-family: 'Adios';
    src: url(https://drive.google.com/file/d/1gRG16Mpdowx-KkLLtH72Ak2OzEMb_zGh/view?usp=sharing) format("truetype"),
    url(https://drive.google.com/file/d/1VLVV5ASyAcutypYFvbSZm30w3P7wdLBj/view?usp=sharing) format("embedded-opentype"),
    url(https://drive.google.com/file/d/1qKIx4QLLOlIK-rAbQtMJg0MQ76BU3xAG/view?usp=sharing) format("woff");
}

h2{
    margin-top: 1%;
    text-align: center;
    font-family: 'Adios';
    font-size: 50px;
    font-weight: bold;
}
.tituloNav{
    text-align: center;
    font-family: 'Adios';
    font-size: 30px;
}
</style>