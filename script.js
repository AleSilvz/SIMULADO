import direcaodefensivaquestions from './questions/direção_defensiva.js';
import mecaniabasicaquestions from './questions/mecânica_básica.js';
import legislacaoquestions from './questions/legislação.js';
import meioambientequestions from './questions/meio_ambiente.js';
import psocorrosquestions from './questions/primeiros_socorros.js';
//import placasquestions from './Questions/placas.js';

// Array de questões organizadas por categorias
const quizData = {
    "Direção Defensiva": direcaodefensivaquestions["Direção Defensiva"],
    "Legislação": legislacaoquestions["Legislação"],
    "Mecânica Básica": mecaniabasicaquestions["Mecânica Básica"],
    "Meio Ambiente": meioambientequestions["Meio Ambiente"],
    "Primeiros Socorros": psocorrosquestions["Primeiro Socorros"],
    //"Placas": placasquestions["Placas"],
};

let selectedCategory = null;
let currentQuestion = 0;
let selectedOption = null; // Variável para armazenar a opção selecionada
let score = 0;

function loadQuestion() {
    document.getElementById("next-btn").style.display = "none"; // Oculta o botão "Próxima Pergunta"
    selectedOption = null; // Reinicia a seleção de opção
    const questionData = getCurrentQuestionData();
    
    document.getElementById("question").innerText = questionData.question;

    // Exibir imagem, se existir
    const questionImage = document.getElementById("question-image");
    if (questionData.image) {
        questionImage.src = questionData.image;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.innerText = questionData.options[index];
        option.classList.remove("selected", "correct", "incorrect"); // Remove classes antigas
        option.disabled = false;

        // Adicionar evento de clique para cada opção
        option.onclick = () => selectOption(index);
    });

    // Atualiza o contador de questões
    const totalQuestions = getTotalQuestions();
    document.getElementById("question-counter").innerText = `${currentQuestion + 1}/${totalQuestions}`;

    updateButtonVisibility(); // Atualiza a visibilidade dos botões ao carregar a pergunta
}


function selectOption(index) {
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected")); // Remove a classe "selected" de todas as opções
    options[index].classList.add("selected"); // Adiciona a classe "selected" à opção selecionada
    selectedOption = index; // Atualiza a opção selecionada
    document.getElementById("next-btn").style.display = "block"; // Mostra o botão "Próxima Pergunta"
}


// Obter a pergunta atual com base na categoria ou se for a prova completa
function getCurrentQuestionData() {
    if (selectedCategory === 'Todas') {
        const allQuestions = Object.values(quizData).flat();
        return allQuestions[currentQuestion];
    }
    return quizData[selectedCategory][currentQuestion];
}

// Verificar a resposta e atualizar pontuação
function checkAnswer() {
    if (selectedOption === null) {
        alert('Selecione uma opção antes de continuar!');
        return;
    }

    const questionData = getCurrentQuestionData();
    const options = document.querySelectorAll(".option");

    if (selectedOption === questionData.correct) {
        score++;
        options[selectedOption].classList.add("correct"); // Adiciona a classe "correct"
    } else {
        options[selectedOption].classList.add("incorrect"); // Adiciona a classe "incorrect"
        /*options[questionData.correct].classList.add("correct"); // Mostrar a resposta correta*/
    }

    options.forEach(option => option.disabled = true); // Desativar todas as opções
    document.getElementById("next-btn").style.display = "block"; // Mostra o botão de próxima pergunta
}


// Ir para a próxima questão ou mostrar resultado final
function nextQuestion() {
    if (selectedOption === null) {
        alert('Selecione uma resposta antes de continuar!');
        return;
    }

    checkAnswer(); // Verifica a resposta antes de prosseguir
    currentQuestion++;
    const totalQuestions = getTotalQuestions();
    if (currentQuestion < totalQuestions) {
        loadQuestion();
    } else {
        showCategoryResult();
    }
}

// Função para voltar à questão anterior
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--; // Decrementa a questão atual
        loadQuestion(); // Carrega a questão anterior
    }
}

// Obter o total de questões baseado na categoria ou se for a prova completa
function getTotalQuestions() {
    if (selectedCategory === 'Todas') {
        return Object.values(quizData).flat().length;
    }
    return quizData[selectedCategory].length;
}

// Mostrar resultado final de uma categoria
function showCategoryResult() {
    const result = document.getElementById("result");
    const totalQuestions = getTotalQuestions();
    const percentage = (score / totalQuestions) * 100;

    result.innerHTML = `Categoria: ${selectedCategory}\n` +
                       ` Acertou ${score} de ${totalQuestions} questões\n` +
                       `Nota: ${percentage.toFixed(0)}%`;

    if (percentage >= 70) {
        result.innerText += "\nAPROVADO";
    } else {
        result.innerText += "\nREPROVADO";
    }

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("back-btn").style.display = "none"; // Ocultar botão "Voltar" no final
    result.style.display = "block";
    document.getElementById("menu-btn").style.display = "block"; // Mostrar o botão de menu
}

// Atualizar a visibilidade dos botões
function updateButtonVisibility() {
    document.getElementById("back-btn").style.display = currentQuestion > 0 ? "block" : "none"; // Oculta o botão "Voltar" na primeira pergunta
    document.getElementById("next-btn").style.display = selectedOption !== null ? "block" : "none"; // Mostra o botão "Próxima Pergunta" se uma opção estiver selecionada
}

// Selecionar a categoria e iniciar o quiz
document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function () {
        selectedCategory = this.dataset.category || 'Todas';
        currentQuestion = 0;
        score = 0;
        document.getElementById("category-selection").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        loadQuestion();
    });
});

// Adicionar evento de clique para o botão "Realizar Prova"
document.getElementById("all-questions-btn").addEventListener("click", function () {
    selectedCategory = 'Todas';
    currentQuestion = 0;
    score = 0;
    document.getElementById("category-selection").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
});

// Evento para voltar ao menu
document.getElementById("menu-btn").addEventListener("click", function () {
    selectedCategory = ''; // Reiniciar a seleção de categoria
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").style.display = "none"; // Ocultar resultado
    document.getElementById("category-selection").style.display = "block"; // Mostrar seleção de categorias
    document.getElementById("menu-btn").style.display = "none"; // Ocultar botão de menu
});

// Evento para o botão "Próxima Pergunta"
document.getElementById("next-btn").addEventListener("click", nextQuestion);

// Evento para o botão "Voltar"
document.getElementById("back-btn").addEventListener("click", previousQuestion);