function animar() {

    let animado = document.querySelectorAll(".animar");

    for (var i = 0; i < animado.length; i++) {

        let altura = window.innerHeight / 2.2
        let distancia = animado[i].getBoundingClientRect().top;

        if (distancia <= altura) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriva");
        }
    }
}

var bandera = 0
var bandera2 = 0
var bandera3 = 0
var bandera4 = 0

function contador() {

    let cont1 = document.getElementById('cont1')
    let cont2 = document.getElementById('cont2')
    let cont3 = document.getElementById('cont3')
    let cont4 = document.getElementById('cont4')
    let cantidad1 = 0,
        cantidad2 = 0,
        cantidad3 = 0,
        cantidad4 = 0
    let obj = document.getElementById("estadisticas")
    distancia = obj.getBoundingClientRect().top
    console.log(distancia)
    let altura = window.innerHeight / 2
    if (distancia <= altura)

    {
        if (bandera === 0) {
            let tiempo1 = setInterval(() => {
                bandera = 1
                cont1.textContent = cantidad1 += 1

                if (cantidad1 === 400) {

                    clearInterval(tiempo1)

                }


            }, 25);
        } else {

        }
        if (bandera2 === 0) {
            let tiempo2 = setInterval(() => {
                bandera2 = 1
                cont2.textContent = cantidad2 += 1

                if (cantidad2 === 300) {

                    clearInterval(tiempo2)

                }


            }, 25);
        } else {

        }

        if (bandera3 === 0) {
            let tiempo3 = setInterval(() => {
                bandera3 = 1
                cont3.textContent = cantidad3 += 1

                if (cantidad3 === 500) {

                    clearInterval(tiempo3)

                }


            }, 15);
        } else {

        }

        if (bandera4 === 0) {
            let tiempo4 = setInterval(() => {
                bandera4 = 1
                cont4.textContent = cantidad4 += 1

                if (cantidad4 === 550) {

                    clearInterval(tiempo4)

                }


            }, 15);
        } else {

        }

    }


}



window.addEventListener('scroll', function () {
    animar()
    contador()
})

