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