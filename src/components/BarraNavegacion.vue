<template>
    <!--Seccion barra Nav -->
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
            <h2 class="tituloNav">Animes DJK</h2>
        </a>
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#news">Noticias</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#team">Equipo</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#footer">Pie de pagina</a>
                </li>
            </ul>
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