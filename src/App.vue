<template>
  <div id="app">
    <barra-navegacion></barra-navegacion>
    <banner-servicio></banner-servicio>
    <seccion-noticias></seccion-noticias>
    
    <!--Seccion equipo -->
    <div id="team" class="equipo">
      <div>
        <h2>Team</h2>
      </div>
      <div>
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-md-3 g-5">
            <div v-for="(miembro, index) of Team" :key="index">
              <team-card :member="miembro"></team-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <seccion-footer></seccion-footer>
  </div>
</template>

<script>
import BannerServicio from "./components/BannerServicio.vue";
import BarraNavegacion from "./components/BarraNavegacion.vue";
import SeccionFooter from "./components/SeccionFooter.vue";
import SeccionNoticias from "./components/SeccionNoticias.vue";
import TeamCard from "./components/TeamCard.vue";

export default {
  name: "App",
  components: {
    BarraNavegacion,
    BannerServicio,
    SeccionFooter,
    TeamCard,
    SeccionNoticias,
  },
  data() {
    return {
      Team: [
        {
          codigo: 1,
          nombre: "Kevin Andres Balcazar Meza",
          descripcion:
            "Vive en Monteria, estundiante de programacion (Amateur), su comida favorita es el perro suizo, su pelicula favorita es la saga predator, su nickname es Clark Kent",
          rol: "Desarrollador Frontend (Header Y Footer)",
          image: "https://i.imgur.com/h1ibIMZ.jpg",
        },
        {
          codigo: 2,
          nombre: "Deisy Katherine Pineda Araque",
          descripcion:
            "Vive en Bogota, estundiante de ing. mecatronica, su comida favorita es pizza mexicana y lasaña, su pelicula favorita es los 13 fantasmas, su nickname es Kathe o Kata",
          rol: "Desarrollador Frontend (Noticias)",
          image: "https://i.imgur.com/zAoJz8Y.jpg",
        },
        {
          codigo: 3,
          nombre: "Jhon Jairo Sanabria Rodriguez",
          descripcion:
            "Vive en Bogota, ing electronico, su comida favorita es la pasta, wraps y sushi, su pelicula favorita es matrix, su nickname es JJ",
          rol: "Desarrollador Frontend (Equipo)",
          image: "https://i.imgur.com/FPDZUXl.jpg",
        },
      ],
    };
  },
};
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
/* Estilos de seccion noticias*/
.noticias {
  border: 5px black solid;
  background: url(https://i.imgur.com/NTZ2vWb.png);
  background-size: 100%;
  background-repeat: repeat;
  height: 100%;
  width: 100%;
}
.tituloNoticias {
  color: white;
  height: 15%;
}
.contenedorNoticias {
  height: 85%;
  display: flex;
  margin-top: 5%;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 5%;
}

/* Estilos de seccion equipo*/
.equipo {
  margin-bottom: 1%;
}
</style>

    