 let taken=document.querySelectorAll(".campos")
let tam=[1]
let n=1
let c=0
let elemento = "?"
let organizado = ["1", "2", "3", "4", "5", "6", "7", "8", elemento]
function puts(){
    for (let i= 0; i<taken.length; i++) {
        let token=Math.round(1+Math.random()*8)
        if (tam.length==n) {
            tam[0] = token
            console.log(token)
            n=0
        }else{
            if(tam.indexOf(token)<0){ 
                c++
                tam[c] = token
                console.log(token)
            }else{
                for(;;){
                    token = Math.round(1+Math.random()*8)
                    if(tam.indexOf(token)<0){
                        c++
                        tam[c] = token
                        console.log(token)
                        break
                    }
                }
            }
        }
    }
    for(let i=0; i<tam.length; i++){
       if(tam[i]==9){
            taken[i].innerText = elemento
       }else{
            taken[i].innerText = tam[i]
       }
    }
}
puts()

for(let i=0; i<taken.length; i++){
    taken[i].addEventListener("click", ()=>{
        change(i)
    })
}

function preencher() {
    console.log("Novo estado: ")
    for(let i=0; i<organizado.length; i++){
        tam[i] = taken[i].innerText
        console.log(tam[i])
    }
    console.log("Estado final: ")
    for(let i=0; i<organizado.length; i++){
        console.log(organizado[i])
    }
    vencer()
}

function vencer() {
    let c =0
    for(let i=0; i<organizado.length; i++){
        if(organizado[i] == tam[i]){
            c++
        }
    }
    if(c==organizado.length){
        console.log("Jogador venceu")
        for(let i=0; i<organizado.length; i++){
            taken[i].style.backgroundColor = "yellow"
        }
    }else{
        for(let i=0; i<organizado.length; i++){
            taken[i].style.backgroundColor = "#00ffff"
        }
        console.log("Dados organizados: "+c)
    }
}

function cor(w=10, x=10, y=10, z=10) {
    taken[w].style.backgroundColor = "green"
    taken[x].style.backgroundColor = "yellow"
    if(y<9 && z==10){
        taken[y].style.backgroundColor = "red"
    }else if(y<9 && z<9){
        taken[y].style.backgroundColor = "pink"
        taken[z].style.backgroundColor = "red"
    }else if(y==10 && z<9){
        taken[z].style.backgroundColor = "yellow"
    }
}
function change(posicao){
    let valor = 0
    switch((posicao+1)){
        case 1:
            // 1 e 3
            if(taken[1].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[1].innerText = valor
            }else if(taken[3].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[3].innerText = valor
            }
        break
        case 2:
            // 0  2 4
            if(taken[0].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[0].innerText = valor
            }else if(taken[2].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[2].innerText = valor
            }else if(taken[4].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[4].innerText = valor
            }
        break
        case 3:
            // 1 e 5
            if(taken[1].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[1].innerText = valor
            }else if(taken[5].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[5].innerText = valor
            }
        break
        case 4:
            // 0 4 e 6
            if(taken[0].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[0].innerText = valor
            }else if(taken[4].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[4].innerText = valor
            }else if(taken[6].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[6].innerText = valor
            }
        break
        case 5:
            // 1 3 5 7
            if(taken[1].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[1].innerText = valor
            }else if(taken[3].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[3].innerText = valor
            }else if(taken[5].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[5].innerText = valor
            }else if(taken[7].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[7].innerText = valor
            }
        break
        case 6:
            // 2 4 8
            if(taken[8].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[8].innerText = valor
            }else if(taken[4].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[4].innerText = valor
            }else if(taken[2].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[2].innerText = valor
            }
        break
        case 7:
            // 3 7
            if(taken[7].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[7].innerText = valor
            }else if(taken[3].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[3].innerText = valor
            }
        break
        case 8:
            //6 4 8
            if(taken[8].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[8].innerText = valor
            }else if(taken[4].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[4].innerText = valor
            }else if(taken[6].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[6].innerText = valor
            }
        break
        case 9:
            // 7 5
            if(taken[7].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[7].innerText = valor
            }else if(taken[5].innerText == elemento){
                valor = taken[posicao].innerText
                taken[posicao].innerText = elemento
                taken[5].innerText = valor
            }
        break
        default:
        break
    }
    preencher()
    whereIs()
}

function whereIs() {
    for(let i=0; i<organizado.length; i++){
        if(taken[i].innerText == elemento){
            corW(i)
        }
    }
}

whereIs()



function corW(posicao){
    switch((posicao+1)){
        case 1:
            // 1 e 3
            cor(1, 3)
        break
        case 2:
            // 0 e 2 4
            cor(0, 2, 4)
        break
        case 3:
            // 1 e 5
            cor(1, 5)
        break
        case 4:
            // 0 4 e 6
            cor(0, 4, 6)
        break
        case 5:
            // 1 3 5 7
            cor(1, 3, 5, 7)
        break
        case 6:
            // 2 4 8
            cor(2, 4, 8)
        break
        case 7:
            // 3 7
            cor(7, 3)
        break
        case 8:
            //6 4 8
            cor(4, 6, 8)
        break
        case 9:
            // 7 5
            cor(5, 7)
        break
        default:
        break
    }
}