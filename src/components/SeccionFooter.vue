<template>
  <!--Seccion pie de sitio -->
  <footer
    id="footer"
    class="page-footer text-dark pt-4"
    style="background-color: rgb(246, 229, 236)"
  >
    <!-- Footer Text -->
    <div class="container-fluid text-center text-md-left">
      <!-- cuadro de filas -->
      <div class="row">
        <!-- cuadro de columna izquierda -->
        <div class="col-md-6 mt-md-0 mt-3">
          <!-- Contenido fooder-->
          <h5 class="text-uppercase font-weight-bold">Acerca de anime djk</h5>
          <p>
            Anime DJK ofrece el servicio de venta de productos coleccionables
            del mundo GEEK Japones, adaptándose a las necesidades de nuestros
            clientes.
          </p>
          <p class="fst-italic fw-">
            "El motivante principal es aprender y poder ejercer ese conocimiento
            con nuestro propio proyecto personal,ver lo aprendido en
            funcionamiento, con el esfuerzo realizado por cada uno de los
            integrantes del equipo".
          </p>
          <p>
            <a
              href="https://github.com/DeisyK/semana-1-55/tree/master"
              class="badge badge-dark text-dark"
              target="_blank"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/github-163-761603.png"
                alt="Imagen Noticia 2" style="height: 3em; width: 3em;"
              />
              Repositorio
            </a>
          </p>
        </div>
        <hr class="clearfix w-100 d-md-none pb-3" />
        <!--cuadro columna derecha-->
        <div class="col-md-6 mb-md-0 mb-3">
          <!-- Contenido columna -->
          <h5 class="text-uppercase font-weight-bold">Contáctanos</h5>
          <div v-for="(persona, index) of member" :key="index">
            <div>
              <div>
                <!--imagen perfil  -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-bounding-box"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
                <!--informacion nombre persona  -->
                {{ persona.nombre }}
              </div>
              <div>
                <!--imagen pc-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"
                  />
                  <path
                    d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"
                  />
                </svg>
                {{ persona.rol }}
              </div>
              <div>
                <!--imagen correo-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                  />
                </svg>
                <!-- correo -->
                {{ persona.correo }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div class="footer-copyright text-center py-1 bg-dark text-white">
      2020 Copyright: UTP
    </div>
  </footer>
  <!-- Footer -->
</template>
<script>
export default {
  name: "SeccionFooter",
  props: ["member"],
};
</script>