const app = new Vue({
    el: '#app',
    data: {
        noticiaAnime1Titular: 'Noticia no encontrada',
        noticiaAnime1Descripcion: 'No se encontro la noticia',
        noticiaAnime1Imagen: 'imagenes/404.jpg',
        noticiaAnime1Url: '',
        noticiaAnime1Fecha: '2020',
        noticiaAnime2Titular: 'Noticia no encontrada',
        noticiaAnime2Descripcion: 'No se encontro la noticia',
        noticiaAnime2Imagen: 'imagenes/404.jpg',
        noticiaAnime2Url: '',
        noticiaAnime2Fecha: '2020',
        noticiaManga1Titular: 'Noticia no encontrada',
        noticiaManga1Descripcion: 'No se encontro la noticia',
        noticiaManga1Imagen: 'imagenes/404.jpg',
        noticiaManga1Url: '',
        noticiaManga1Fecha: '2020',
        noticiaManga2Titular: 'Noticia no encontrada',
        noticiaManga2Descripcion: 'No se encontro la noticia',
        noticiaManga2Imagen: 'imagenes/404.jpg',
        noticiaManga2Url: '',
        noticiaManga2Fecha: '2020'
    },
    methods: {
        async agregarNoticia() {            
            let noticiasAnime = await fetch("https://jikan1.p.rapidapi.com/anime/16498/news", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "8a781b4168msh9abb85788f7abc4p178096jsne8f307d2bdb1",
                    "x-rapidapi-host": "jikan1.p.rapidapi.com"
                }
            })
            let noticiasAnimeJSON = await noticiasAnime.json();
            console.log(noticiasAnimeJSON)
            let datosNoticiaAnime = noticiasAnimeJSON.articles
            console.log(datosNoticiaAnime)
           if(datosNoticiaAnime[0]!=null)
            {
                this.noticiaAnime1Titular=datosNoticiaAnime[0]['title']
                this.noticiaAnime1Imagen=datosNoticiaAnime[0]['image_url']
                this.noticiaAnime1Descripcion=datosNoticiaAnime[0]['intro']
                this.noticiaAnime1Fecha=datosNoticiaAnime[0]['date']
                this.noticiaAnime1Url=datosNoticiaAnime[0]['url']

                this.noticiaAnime2Titular=datosNoticiaAnime[1]['title']
                this.noticiaAnime2Imagen=datosNoticiaAnime[1]['image_url']
                this.noticiaAnime2Descripcion=datosNoticiaAnime[1]['intro']
                this.noticiaAnime2Fecha=datosNoticiaAnime[1]['date']
                this.noticiaAnime2Url=datosNoticiaAnime[1]['url']
            }

            let noticiasManga = await fetch("https://jikan1.p.rapidapi.com/manga/2/news", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "8a781b4168msh9abb85788f7abc4p178096jsne8f307d2bdb1",
                    "x-rapidapi-host": "jikan1.p.rapidapi.com"
                }
            })
            let noticiasMangaJSON = await noticiasManga .json();
            console.log(noticiasMangaJSON)
            let datosNoticiaManga = noticiasMangaJSON.articles
            console.log(datosNoticiaManga)
            if(datosNoticiaManga[0]!=null)
            {
                this.noticiaManga1Titular=datosNoticiaManga[0]['title']
                this.noticiaManga1Imagen=datosNoticiaManga[0]['image_url']
                this.noticiaManga1Descripcion=datosNoticiaManga[0]['intro']
                this.noticiaManga1Fecha=datosNoticiaManga[0]['date']
                this.noticiaManga1Url=datosNoticiaManga[0]['url']

                this.noticiaManga2Titular=datosNoticiaManga[5]['title']
                this.noticiaManga2Imagen=datosNoticiaManga[5]['image_url']
                this.noticiaManga2Descripcion=datosNoticiaManga[5]['intro']
                this.noticiaManga2Fecha=datosNoticiaManga[5]['date']
                this.noticiaManga2Url=datosNoticiaManga[5]['url']
            }
        }
    }
})