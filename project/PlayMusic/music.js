/*let videos = document.querySelector(".video")
function play(){
    videos.play
}
function pause(){
    videos.pause()
}
function stops(){
    videos.pause()
    videos.currentTime = 0
}
function recuar(){
    videos.currentTime -= 10
}
function avancar(){
    videos.currentTime +=10
}

    let musics = [
        {
            titulo: 'fast', artista: 'juice', src: 'JW/fast.mp3'
        },
        {
            titulo: 'black', artista: 'juice', src: 'JW/black.mp3'
        },
        {
            titulo: 'black', artista: 'juice', src: 'JW/haer.mp3'
        },
        {
            titulo: 'black', artista: 'juice', src: 'JW/already.mp3'
        },
        {
            titulo: 'black', artista: 'juice', src: 'JW/right.mp3'
        }
    ];
    indexMusic = 0;
    let videos = document.querySelector(".video")
    document.querySelector(".adiantar").addEventListener('click', ()=>{
        indexMusic ++;
        rendirezarMusic(indexMusic);
    });
    let music = document.querySelector(".music")
    let art = document.querySelector(".art")
    let nomeM = document.querySelector(".nomeM")
    function rendirezarMusic(index){
           // music.setAttribute('src', musics[index].src);
            music.addEventListener('loadeddata', ()=>{
            art.textContent=musics[index].titulo;
            nomeM.textContent=musics[index].artista;
            })
    }
    function play(){
        videos.play()
    }
    function pause(){
        videos.pause()
    }
    function stops(){
        videos.pause()
        videos.currentTime = 0
    }
    function recuar(){
        videos.currentTime -= 10
    }
    function avancar(){
        videos.currentTime +=10
    }
    let barra = document.querySelector("#progre")
    barra.style.width = Math.floor((videos.currentTime/videos.duration)*100)+'%'*/

let musicass = [
    {titulo:'fast', artista:'Juice World', src:'JW/fast.mp3', img:'imgs/juice1.jpg'},
    {titulo:'already', artista:'Juice World', src:'JW/already.mp3', img:'imgs/juice2.jpg'},
    {titulo:'black', artista:'Juice World', src:'JW/black.mp3', img:'imgs/juice3.jpg'},
    {titulo:'haer', artista:'Juice World', src:'JW/haer.mp3', img:'imgs/juice4.jpg'},
    {titulo:'right', artista:'Juice World', src:'JW/right.mp3', img:'imgs/juice5.jpg'},
    {titulo:'blanco', artista:'Juice World', src:'JW/benny_blanco_juice_wrld_graduation_official_music_video_mp3_13104.mp3', img:'imgs/juice2.jpg'}
];

let musica = document.querySelector(".audioA")
let indexMusica = 0

let duracaoMusica = document.querySelector('.fim')
let imagens = document.querySelector('img')
let nomeMusica = document.querySelector(".h2")
let nomeArtista = document.querySelector(".i")

renderizarMusica(indexMusica)

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))

document.querySelector(".playB").addEventListener('click', tocarMusica)
document.querySelector(".pauseB").addEventListener('click', pausarMusica)
document.querySelector(".repet").addEventListener('click', repetir)
musica.addEventListener('timeupdate', actualizarBarra)

document.querySelector(".voltarB").addEventListener('click', ()=>{
        indexMusica--
        if (indexMusica < musicass.length) {
            indexMusica = 0
        }
        renderizarMusica(indexMusica)
})
document.querySelector(".avancarB").addEventListener('click', ()=>{
        indexMusica++
        if (indexMusica > musicass.length) {
            indexMusica = 0
        }
        renderizarMusica(indexMusica)
})

function renderizarMusica(indexs){
        musica.setAttribute('src', musicass[indexs].src)
        musica.addEventListener('loadeddata', ()=>{
            nomeMusica.textContent = musicass[indexs].titulo
            nomeArtista.textContent = musicass[indexs].artista
            imagens.src = musicass[indexs].img;
            duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
        })
}

function tocarMusica(){
    musica.play()
    document.querySelector(".pauseB").style.display = "block"
    document.querySelector(".playB").style.display = "none"
}
function pausarMusica(){
    musica.pause()
    document.querySelector(".pauseB").style.display = "none"
    document.querySelector(".playB").style.display = "block"
}
function actualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}
function segundosParaMinutos(segundos){
        let campoMinutos = Math.floor(segundos / 60)
        let campoSegundos = segundos % 60
        if (campoSegundos < 10) {
            campoSegundos = '0' + campoSegundos
        }
        return campoMinutos + ':' + campoSegundos
}
document.querySelector('.barra').addEventListener('click', ()=>{
    musica.currentTime += 10
})

function repetir(){
    musica.currentTime = 0
}

let cores = ['red', 'blue', 'brown', 'yellow', '#808080', 'aqua', 'green'];
let i = 0
let timer
function mudarCorFundo(){
    document.body.style.backgroundColor = cores[i]
    i++
     if (i >= cores.length) {
         i = 0
     }
}
document.querySelector('body').addEventListener('click', ()=>{
        clearInterval(timer)
        timer = setInterval(mudarCorFundo, 1000)
        if (duracaoMusica == segundosParaMinutos(Math.floor(musica.duration))) {
            clearInterval(timer)
        }
})