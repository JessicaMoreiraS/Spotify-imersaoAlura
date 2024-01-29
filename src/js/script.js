const apiKey = "SUA CHAVE API";
window.addEventListener("load", cards_ritmos);
const areaRitimos = document.getElementById("ritmos__content");

const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist")
const resultPlaylist = document.getElementById("result-playlist")

function cards_ritmos(){
    resultArtist.style="display:none";
    var ritmosMusicais = [
        ["Rock", 1, "#FF5733",'Imagem de <a href="https://br.freepik.com/vetores-gratis/modelo-de-capa-de-album-gradiente_49658986.htm#query=capa%20album%20kpop&position=14&from_view=search&track=ais&uuid=4cf33067-0764-42d8-a95c-d99ef2039728">Freepik</a>'],
        ["Pop", 2, "#66B2FF",'Imagem de <a href="https://br.freepik.com/psd-gratuitas/design-de-modelo-y2k_42066005.htm#query=k%20pop%20capa%20de%20album&position=0&from_view=search&track=ais&uuid=c219adbf-066f-4671-ad49-c40c5bddd72b">Freepik</a>'],
        ["Jazz", 3, "#FFD700",'Imagem de <a href="https://br.freepik.com/vetores-gratis/capa-de-cd-de-selecao-de-jazz-vintage_25556350.htm#query=musica%20capa%20album%20jaaz&position=26&from_view=search&track=ais&uuid=461401d0-7dbf-4288-a397-b0dc0316a398">Freepik</a>'],
        ["Blues", 4, "#0000FF",'<a href="https://br.freepik.com/vetores-gratis/adesivo-de-instrumentos-de-musica-jazz-design-retro-grafico-de-entretenimento-na-colecao-de-vetores-azul_20346424.htm#query=saxofone&position=13&from_view=search&track=sph&uuid=4efe5d9a-1dcf-4e6f-bfe6-c921d0b823a6">Imagem de rawpixel.com</a> no Freepik'],
        ["Kpop", 5, "#FF4500",'Imagem de <a href="https://br.freepik.com/psd-gratuitas/modelo-de-folheto-quadrado-no-estilo-brutalismo_49682663.htm#query=capa%20album%20kpop&position=12&from_view=search&track=ais&uuid=4cf33067-0764-42d8-a95c-d99ef2039728">Freepik</a>'],
        ["Forró", 6, "#00FF00",'<a href="https://br.freepik.com/vetores-gratis/icone-de-notas-de-acordeao-de-musica-festival_6589335.htm#query=sanfona&position=4&from_view=search&track=sph&uuid=01e64a40-7bce-495e-9cf9-700d8b2a4aaa">Imagem de studiogstock</a> no Freepik'],
        ["Country", 7, "#8B4513",'Imagem de <a href="https://br.freepik.com/vetores-gratis/ilustracao-de-musica-country-desenhada-a-mao_27510911.htm#query=musica%20capa%20album%20country&position=5&from_view=search&track=ais&uuid=d0d9cef2-985d-4aa3-a88d-f821e454063e">Freepik</a>'],
        ["Eletrônica", 8, "#9932CC",'Imagem de <a href="https://br.freepik.com/vetores-gratis/modelo-de-capa-de-album-de-design-plano_49455528.htm#query=musica%20capa%20album&position=28&from_view=search&track=ais&uuid=eca967c1-5588-4361-9c59-40f29375bb18">Freepik</a>'],
        ["Lo-fi", 9, "#808080",'<a href="https://br.freepik.com/vetores-gratis/ilustracoes-de-gradiente-lo-fi_25644639.htm#query=Lo-fi%20music&position=4&from_view=search&track=ais&uuid=e71638ab-88b0-44b4-a013-9f66218601ea">Imagem de pikisuperstar</a> no Freepik'],
        ["Clássico", 10, "#8B0000",'<a href="https://br.freepik.com/psd-gratuitas/maquete-de-design-de-capa-de-cd-em-branco_3384951.htm#query=musica%20capa%20album&position=0&from_view=search&track=ais&uuid=eca967c1-5588-4361-9c59-40f29375bb18">Imagem de rawpixel.com</a> no Freepik'],
        ["Indie", 11, "#800080",'Imagem de <a href="https://br.freepik.com/psd-gratuitas/design-de-modelo-de-moda_42075354.htm#query=k%20pop%20capa%20de%20album&position=12&from_view=search&track=ais&uuid=c219adbf-066f-4671-ad49-c40c5bddd72b">Freepik</a>'],
        ["Instrumental", 12, "#FFFF00",'<a href="https://br.freepik.com/vetores-gratis/fundo-piano_1012670.htm#page=2&query=piano&position=5&from_view=search&track=sph&uuid=f616dd5f-3f1a-4c35-9d1e-7d716a0c5f4f">Imagem de macrovector</a> no Freepik'],
        ["MPB", 13, "#006400",'<a href="https://br.freepik.com/vetores-gratis/homem-sentado-tocando-violao_7446069.htm#query=mpb&position=48&from_view=search&track=sph&uuid=1a4e4997-4260-4fe0-9350-f4094f64581a">Imagem de studiogstock</a> no Freepik'],
        ["Disco", 14, "#FF1493",'<a href="https://br.freepik.com/vetores-gratis/album-de-musica-electro_3601855.htm#query=musica%20capa%20album&position=26&from_view=search&track=ais&uuid=eca967c1-5588-4361-9c59-40f29375bb18">Imagem de rawpixel.com</a> no Freepik'],
        ["Sertanejo", 15, "#CD853F",'Imagem de <a href="https://br.freepik.com/vetores-gratis/classico-guitarra-fundo_1112817.htm?query=violao#from_view=detail_alsolike">Freepik</a>']
    ];

    for (var i = 0; i < ritmosMusicais.length; i++) {
    
        var card = `<div class="card" style="background-color:${ritmosMusicais[i][2]}">
                        <div class="card__tema">
                            <p>${ritmosMusicais[i][0]}</p>
                        </div>
                        <div class="card__img">
                            <img src="src/assets/playlist/${ritmosMusicais[i][1]}.jpg">
                            <div class="card__img__atribuicao">
                                <p>${ritmosMusicais[i][3]}</p>
                            </div>
                        </div>
                    </div>`;
        areaRitimos.innerHTML += card;
    }
}


function requestApi(searchTerm){
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchTerm}&api_key=${apiKey}&format=json`
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
    resultArtist.innerHTML="";
    resultPlaylist.style="display:none"

    result.results.artistmatches.artist.forEach(element => {
        var cardArtist = `<a class="cardArtist" href="${element.url}">
                            <div class="artist-image">
                                <img src="${element.image[2]['#text']}">
                            </div>
                            <div class="artist-name">
                                <p>${element.name}</p>
                            </div>
                        </a>`
        resultArtist.innerHTML += cardArtist;
    });

    resultArtist.style="display:flex";
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    if (searchTerm == '') {
        resultArtist.style="display:none";
        resultPlaylist.style="display:flex";
        cards_ritmos()
        return;
    }

    requestApi(searchTerm);
})