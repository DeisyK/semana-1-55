<template>
     <!--Seccion Banner servicios-->
    <header>
        
        <div id="bannerServicio" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#bannerServicio" data-slide-to="0" class="active"></li>
                <li data-target="#bannerServicio" data-slide-to="1" class=""></li>
                <li data-target="#bannerServicio" data-slide-to="2" class=""></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active ">
                    <img src="https://i.imgur.com/huCBacO.jpg" style="width: 100%;" class="img-fluid" alt="imagen banner">
                    <div style="background-color: rgba(254, 238, 252,40%); border-radius: 5%;"
                        class="carousel-caption d-none d-md-block text-dark">
                        <h2>Cosplay Y Accesorios</h2>
                        <p style="font-size: 20px; font-weight: bold;">Manejamos diversidad de productos para tus
                            necesidades</p>
                    </div>
                </div>
                <div class="carousel-item ">
                    <img src="https://i.imgur.com/c7gZMh1.jpgg" style="width: 100%;" class="img-fluid" alt="imagen banner">
                    <div style="background-color: rgba(254, 238, 252,40%); border-radius: 5%;"
                        class="carousel-caption d-none d-md-block text-dark">
                        <h2>Musica Asiatica</h2>
                        <p style="font-size: 20px; font-weight: bold;">Queremos brindarte el mejor servicio y aqui en
                            contraras tu musica favorita desde opening, j-rock, k-pop y mas...</p>
                    </div>
                </div>
                <div class="carousel-item ">
                    <img src="https://i.imgur.com/OSxW7QB.jpg" style="width: 100%;" class="img-fluid" alt="imagen banner">
                    <div style="background-color: rgba(254, 238, 252,40%); border-radius: 5%;"
                        class="carousel-caption d-none d-md-block text-dark">
                        <h2>Anime Y Manga</h2>
                        <p style="font-size: 20px; font-weight: bold;">Te traemos todo tipo de manga y anime que se
                            acomode a tus gustos</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#bannerServicio" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#bannerServicio" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "BannerServicio",
 
    }
</script>
<style lang="css">

</style>