const questions = [
    {
        question: "¿Cuál es mi comida favorita?",
        options: ["Hamburguesa", "Pizza", "Pollo", "Pasticho"],
        answer: "Pasticho"
    },
    {
        question: "¿Cuál es mi color favorito?",
        options: ["Rojo", "Azul", "Verde", "Amarillo"],
        answer: "Rojo"
    },
    {
        question: "¿Cuál es mi animal favorito?",
        options: ["Perro", "Gato", "Pájaro", "Conejo"],
        answer: "Gato"
    },
    {
        question: "Si pudiera viajar a cualquier lugar del mundo, ¿a dónde iría primero?",
        options: ["Japón", "Italia", "Suiza", "Perú"],
        answer: "Suiza"
    },
    {
        question: "¿Qué película puedo ver una y otra vez sin cansarme?",
        options: ["El Señor de los Anillos", "Son como Niños", "Forrest Gump", "Madagascar"],
        answer: "Son como Niños"
    },
    {
        question: "¿Cuál es mi hobby?",
        options: ["Tocar el piano", "Cocinar", "Electrónica", "Practicar origami"],
        answer: "Electrónica"
    },
    {
        question: "¿Qué superpoder me gustaría tener?",
        options: ["Volar", "Leer la mente", "Teletransportación", "Invisibilidad"],
        answer: "Teletransportación"
    },
    {
        question: "¿Cuál es mi mayor miedo?",
        options: ["Las alturas", "Las arañas", "Hablar en público", "Ninguna de las anteriores"],
        answer: "Ninguna de las anteriores"
    },
    {
        question: "¿Qué estación me gustaría estar?",
        options: ["Primavera", "Verano", "Otoño", "Invierno"],
        answer: "Invierno"
    },
    {
        question: "¿Cómo me gusta pasar un día libre perfecto?",
        options: ["Maratón de series en casa", "Explorando nuevas teorías", "Leyendo en un café", "Haciendo deporte al aire libre"],
        answer: "Explorando nuevas teorías"
    },
    {
        question: "¿Cuál es mi género musical favorito?",
        options: ["Rock", "Pop", "Electrónica", "Todas las anteriores"],
        answer: "Todas las anteriores"
    },
    {
        question: "Si pudiera aprender algo nuevo al instante, ¿qué sería?",
        options: ["Hablar un idioma nuevo", "Tocar un instrumento musical", "Programación avanzada", "Pintura al óleo"],
        answer: "Hablar un idioma nuevo"
    },
    {
        question: "¿Qué es lo primero que me gustó de ti?",
        options: ["Tus locuras", "La profundidad de tus conversaciones", "Tu sinceridad", "Tu espíritu aventurero", "Todas las anteriores"],
        answer: "Todas las anteriores"
    },
    {
        question: "¿Qué aspecto de tu personalidad admiro más?",
        options: ["Tu empatía hacia los demás", "Tu pasión por aprender cosas nuevas", "Tu valentía ante los desafíos", "Tu sentido del humor inigualable"],
        answer: "Tu empatía hacia los demás"
    },
    {
        question: "¿Qué talento tuyo me impresiona siempre?",
        options: ["Tu habilidad para contar historias", "Cómo capturas momentos con la fotografía", "Tu destreza en la cocina", "Tu facilidad para hacer feliz a los demás"],
        answer: "Tu facilidad para hacer feliz a los demás"
    },
    {
        question: "¿Qué me hace sentir agradecido de tenerte en mi vida?",
        options: ["Tu apoyo incondicional", "Las risas compartidas", "Las lecciones que aprendo de ti", "Los momentos tranquilos juntos"],
        answer: "Los momentos tranquilos juntos"
    },
    {
        question: "¿Qué palabra me pegaste?",
        options: ["Que tu", ";-;", "Tremendo", "Todas las anteriores"],
        answer: "Todas las anteriores"
    },
    {
        question: "¿Cómo describiría lo que siento por ti en una palabra?",
        options: ["Admiración", "Alegría", "Compañerismo", "Cariño" ,"Todas las anteriores"],
        answer: "Todas las anteriores"
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementById("reset-btn");

function showQuestion() {
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "bg-gray-300 p-2 rounded text-black";
        button.onclick = () => checkAnswer(button, option);
        optionsElement.appendChild(button);
    });

    nextButton.classList.add("hidden");
    resetButton.classList.add("hidden");
}

function checkAnswer(selectedButton, selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach(button => {
        button.classList.remove("bg-gray-300");
        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {
        nextButton.classList.remove("hidden");
    } else {
        resetButton.classList.remove("hidden");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Redirigir al usuario a regalo.html cuando complete el quiz
        window.location.href = "regalo.html";
    }
}

function resetGame() {
    currentQuestionIndex = 0;
    showQuestion();
}

showQuestion();
nextButton.addEventListener("click", nextQuestion);
resetButton.addEventListener("click", resetGame);