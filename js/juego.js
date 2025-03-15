// Preguntas y respuestas
const preguntas = [
    {
        pregunta:
            "¿Cuál de estas hierbas es conocida por mejorar la memoria y la concentración?",
        opciones: ["Manzanilla", "Romero", "Lavanda", "Diente de león"],
        correcta: 1,
    },
    {
        pregunta: "¿Qué piedra se asocia con el amor y la compasión?",
        opciones: ["Fluorita", "Granate", "Cuarzo rosa", "Citrino"],
        correcta: 2,
    },
    {
        pregunta:
            "¿Cuál de estas piedras es considerada una piedra de cambio y transformación?",
        opciones: ["Malaquita", "Ojo de tigre", "Ágata de fuego", "Cuarzo verde"],
        correcta: 0,
    },
    {
        pregunta: "¿Qué hierba se utiliza en rituales de deseos y abundancia?",
        opciones: ["Hibisco", "Salvia", "Manzanilla", "Diente de león"],
        correcta: 3,
    },
    {
        pregunta:
            "¿Qué hierba es un potente cicatrizante y se usa para tratar heridas y quemaduras?",
        opciones: ["Caléndula", "Menta", "Orégano", "Albahaca"],
        correcta: 0,
    },
    {
        pregunta:
            "¿Cuál de estas piedras se usa en rituales para atraer la pasión y la vitalidad?",
        opciones: ["Turmalina negra", "Amatista", "Ópalo de fuego", "Aguamarina"],
        correcta: 2,
    },
    {
        pregunta:
            "¿Cuál de estas piedras está asociada con los signos Aries, Escorpio y Capricornio?",
        opciones: ["Jaspe rojo", "Cuarzo rosa", "Amatista", "Labradorita"],
        correcta: 0,
    },
    {
        pregunta:
            "¿Qué piedra tiene una fuerte conexión con Géminis, Piscis y Acuario?",
        opciones: ["Citrino", "Fluorita", "Malaquita", "Granate"],
        correcta: 1,
    },
    {
        pregunta: "¿Cuál de estos signos está asociado con la piedra Lapis Lazuli?",
        opciones: ["Acuario", "Aries", "Capricornio", "Libra"],
        correcta: 0,
    },
    {
        pregunta: "¿Cuál de estos signos está asociado con la piedra Amazonita?",
        opciones: ["Tauro", "Virgo", "Escorpio", "Piscis"],
        correcta: 1,
    },
    {
        pregunta: "¿Con qué elemento se asocia el Ojo de Tigre?",
        opciones: ["Agua", "Aire", "Tierra", "Fuego"],
        correcta: 2,
    },
    {
        pregunta: "¿Cuál es el elemento asociado a la Turmalina Negra?",
        opciones: ["Aire", "Agua", "Fuego", "Tierra"],
        correcta: 3,
    },
    {
        pregunta: "¿Cuál de estas piedras está asociada al elemento Aire?",
        opciones: ["Granate", "Crisoprasa", "Celestina", "Espinela roja"],
        correcta: 1,
    },
    {
        pregunta: "¿Cuál de estas piedras está asociada al elemento Agua?",
        opciones: ["Malaquita", "Fluorita", "Amatista", "Cornalina"],
        correcta: 2,
    },
    {
        pregunta: "¿Cuál de estas piedras está asociada al elemento Fuego?",
        opciones: ["Cuarzo rosa", "Jaspe rojo", "Cuarzo ahumado", "Citrino"],
        correcta: 3,
    },
];

// Variable para almacenar las preguntas barajadas
let preguntasBarajadas = [];

const dados = [
    { nombre: "dado1", imagen: "img/juego/dados/dado1.png", valor: 1 },
    { nombre: "dado2", imagen: "img/juego/dados/dado2.png", valor: 2 },
    { nombre: "dado3", imagen: "img/juego/dados/dado3.png", valor: 3 },
    { nombre: "dado4", imagen: "img/juego/dados/dado4.png", valor: 4 },
    { nombre: "dado5", imagen: "img/juego/dados/dado5.png", valor: 5 },
    { nombre: "dado6", imagen: "img/juego/dados/dado6.png", valor: 6 },
];

// Variables globales para controlar el juego
let indicePregunta = 0;
let preguntasTotales = 0;
let descuentoActual = 0;
let temporizador;
let respuestasCorrectas = 0;

// Función para barajar preguntas usando el algoritmo Fisher-Yates
function barajarPreguntas() {
    // Crear una copia del array de preguntas
    let preguntasTemp = [...preguntas];
    let preguntasAleatorias = [];

    // Mientras queden preguntas en el array temporal
    while (preguntasTemp.length > 0) {
        // Seleccionar una pregunta aleatoria
        const indiceAleatorio = Math.floor(Math.random() * preguntasTemp.length);
        // Añadir la pregunta seleccionada al nuevo array
        preguntasAleatorias.push(preguntasTemp[indiceAleatorio]);
        // Eliminar la pregunta seleccionada del array temporal
        preguntasTemp.splice(indiceAleatorio, 1);
    }

    return preguntasAleatorias;
}

// PRIMER PASO -> QUE SE TIRE EL DADO Y SE DEFINA EL % DE DESCUENTO A APLICAR Y LA CANTIDAD DE PREGUNTAS QUE SE HARAN EN EL SIGUIENTE PASO

const btnTirarDado = document.querySelector(".boton-dado");
const gifDado = document.querySelector(".gif-dado");
const resultadosDisplay = document.querySelector(".resultado-dado");
const resultadoNumero = document.querySelector(".resultado-numero");
const resultadoDescuento = document.querySelector(".resultado-descuento");
const imgDadoResultado = document.querySelector(".img-dado-resultado");
const btnDadoContinuar = document.querySelector(".boton-dado-continuar");

// Función para tirar un dado aleatorio
function tirarDadoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * dados.length);
    return dados[indiceAleatorio];
}

btnTirarDado.addEventListener("click", () => {
    btnTirarDado.style.display = "none"; // Ocultar botón de tirar dado

    // Mostrar GIF de animación del dado
    gifDado.innerHTML = `<img src="img/juego/gif-dados.gif" alt="Dado girando" class="col-8">`;

    setTimeout(() => {
        gifDado.innerHTML = ""; // Ocultar el GIF después de 5 segundos

        // Obtener resultado del dado
        const dadoSeleccionado = tirarDadoAleatorio();

        // Asignar descuento según el número obtenido
        if (dadoSeleccionado.valor <= 2) {
            descuentoActual = 10;
            preguntasTotales = 3;
        } else if (dadoSeleccionado.valor <= 4) {
            descuentoActual = 20;
            preguntasTotales = 4;
        } else {
            descuentoActual = 30;
            preguntasTotales = 5;
        }

        // Mostrar resultado del dado
        resultadoNumero.textContent = `Sacaste un ${dadoSeleccionado.valor}`;
        imgDadoResultado.src = dadoSeleccionado.imagen;
        imgDadoResultado.alt = `Dado ${dadoSeleccionado.valor}`;
        resultadoDescuento.textContent = `Tu descuento será del ${descuentoActual}%.`;

        // Mostrar los resultados y el botón de continuar
        resultadosDisplay.classList.remove("d-none");
        btnDadoContinuar.classList.remove("d-none");
    }, 5000); // Esperar 5 segundos antes de mostrar el resultado
});

// BOTON CoNTINUAR LUEGO DE TIRAR EL DADO NOS LIMPIA LA INTERFAZ PARA COMENZAR CON EL JUEGO DE PREGUNTAS

const interfazBienvenida = document.querySelector(".bienvenida");
const interfazDados = document.querySelector(".tirada-dado");
const interfazPreguntas = document.querySelector(".preguntas");
const preguntaContainer = document.querySelector(".pregunta");
const resultadosContainer = document.querySelector(".resultados");

btnDadoContinuar.addEventListener("click", () => {
    interfazBienvenida.classList.add("d-none");
    interfazDados.classList.add("d-none");
    interfazPreguntas.classList.remove("d-none");

    // Reiniciamos las variables del juego
    indicePregunta = 0;
    respuestasCorrectas = 0;

    // Barajamos las preguntas antes de empezar
    preguntasBarajadas = barajarPreguntas();

    // Mostramos las preguntas
    mostrarPregunta();
});

function mostrarPregunta() {
    clearInterval(temporizador); // Limpiamos cualquier temporizador anterior

    if (indicePregunta < preguntasTotales) {
        const preguntaActual = preguntasBarajadas[indicePregunta];

        preguntaContainer.innerHTML = `
            <div class="pregunta-contenido columna p-3">
                <h4 class="titulo-oscuro text-center">Pregunta ${indicePregunta + 1
            } de ${preguntasTotales}</h4>
                <p class="tx-contenido-oscuro text-center">${preguntaActual.pregunta
            }</p>
                <ul class="opciones-lista container row list-unstyled justify-content-center align-items-center">
                    ${preguntaActual.opciones.map(
                    (opcion, i) =>
                        `<li class="my-2 col-12 col-md-3 text-center"><button class="boton-opcion tx-contenido-oscuro p-3 m-2 rounded-3 btn" onclick="verificarRespuesta(${i})">${opcion}</button></li>`
                ).join("")}
                </ul>
                <p id="temporizador" class="titulo-oscuro text-center">Tiempo restante: 20s</p>
            </div>
        `;

        iniciarTemporizador();
    } else {
        // Todas las preguntas fueron respondidas
        mostrarResultados();
    }
}

function iniciarTemporizador() {
    let tiempoRestante = 20;

    document.getElementById(
        "temporizador"
    ).textContent = `Tiempo restante: ${tiempoRestante}s`;

    temporizador = setInterval(() => {
        tiempoRestante--;
        document.getElementById(
            "temporizador"
        ).textContent = `Tiempo restante: ${tiempoRestante}s`;

        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            indicePregunta++;
            mostrarPregunta();
        }
    }, 1000);
}

// Definimos verificarRespuesta en el ámbito global para que sea accesible desde HTML
window.verificarRespuesta = function (indiceSeleccionado) {
    clearInterval(temporizador);

    const preguntaActual = preguntasBarajadas[indicePregunta];

    if (indiceSeleccionado === preguntaActual.correcta) {
        respuestasCorrectas++;
    } else {
    }

    indicePregunta++;
    mostrarPregunta();
};

function mostrarResultados() {
    interfazPreguntas.classList.add("d-none");
    resultadosContainer.classList.remove("d-none");

    let mensaje = "";
    let codigoDescuento = "";

    if (respuestasCorrectas === preguntasTotales) {
        codigoDescuento = generarCodigoDescuento();
        mensaje = `
            <div class="resultado-final columna p-3 my-5 py-5 f-c-a-transparente">
                <h3 class="titulo-oscuro text-center">¡Felicidades!</h3>
                <p class="tx-contenido-oscuro text-center p-4">Has respondido correctamente todas las preguntas.</p>
                <p class="tx-contenido-oscuro text-center">Tu código de descuento del ${descuentoActual}% es:</p>
                <p class="codigo-descuento titulo-oscuro text-center p-3 my-3">${codigoDescuento}</p>
            </div>
        `;
    } else {
        mensaje = `
            <div class="resultado-final columna p-3 my-5 py-5 f-c-a-transparente">
                <h3 class="titulo-oscuro text-center">¡Lo sentimos!</h3>
                <p class="tx-contenido-oscuro text-center p-4">Has respondido correctamente ${respuestasCorrectas} de ${preguntasTotales} preguntas.</p>
                <p class="tx-contenido-oscuro text-center p-2">Necesitas responder todas correctamente para obtener el descuento.</p>
                <button class="boton-home texto-boton text-center col-8 col-md-5 p-2 m-5 fondo-color-secundario" onclick="reiniciarJuego()">Intentar de nuevo</button>
            </div>
        `;
    }

    resultadosContainer.innerHTML = mensaje;
}

function generarCodigoDescuento() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigo = "";

    for (let i = 0; i < 8; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return `ELIXIR${codigo}`;
}

window.reiniciarJuego = function () {
    indicePregunta = 0;
    respuestasCorrectas = 0;
    preguntasTotales = 0;
    descuentoActual = 0;

    resultadosContainer.classList.add("d-none");
    interfazBienvenida.classList.remove("d-none");
    interfazDados.classList.remove("d-none");
    btnTirarDado.style.display = "block";
    resultadosDisplay.classList.add("d-none");
    btnDadoContinuar.classList.add("d-none");
};
