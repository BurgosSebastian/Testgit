const texto = document.querySelector(".texto")
const btn = document.querySelector(".btn")
let prevresul = ""
const genPen = () => {
    let resultados =["izquierda","derecha","medio"]
    let result = Math.floor(Math.random()*3)
    if(result == prevresul){
        texto.innerHTML = `${resultados[result]}` + " de nuevo"
    } else{
        prevresul = result
        texto.innerHTML = resultados[result]
    }
}

btn.addEventListener("click",genPen) ;
