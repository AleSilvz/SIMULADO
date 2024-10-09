import direcaodefensivaquestions from './Questions/direção_defensiva.js';
import mecaniabasicaquestions from './Questions/mecânica_básica.js';
import legislacaoquestions from './Questions/legislação.js';
import meioambientequestions from './Questions/meio_ambiente.js';
import psocorrosquestions from './Questions/primeiros_socorros.js';
import placasquestions from './Questions/placas.js';

// Array de questões organizadas por categorias
const quizData = {
    "Direção Defensiva": direcaodefensivaquestions["Direção Defensiva"],
    "Legislação": legislacaoquestions["Legislação"],
    "Mecânica Básica": mecaniabasicaquestions["Mecânica Básica"],
    "Meio Ambiente": meioambientequestions["Meio Ambiente"],
    "Primeiros Socorros": psocorrosquestions["Primeiro Socorros"],
    "Placas": placasquestions["Placas"],
};

let selectedCategory = null;
let currentQuestion = 0;
let selectedOption = null; // Variável para armazenar a opção selecionada
let score = 0;

// Carregar questão com base na categoria e índice
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
        option.style.background = "#FF9800"; // Cor padrão das opções
        option.disabled = false;

        // Adicionar evento de clique para cada opção
        option.onclick = () => selectOption(index);
    });
}

// Selecionar uma opção e permitir a re-escolha
function selectOption(index) {
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.style.background = "#FF9800"); // Cor padrão
    options[index].style.background = "#c07402"; // Cor de seleção (amarelo)
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
        options[selectedOption].style.background = "#FF9800"; // Verde para correto
    } else {
        options[selectedOption].style.background = "#FF9800"; // Vermelho para incorreto
        options[questionData.correct].style.background = "#FF9800"; // Mostrar a resposta correta
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

    result.innerText = `Categoria: ${selectedCategory}\n` +
                       ` Acertou ${score} de ${totalQuestions} questões\n` +
                       ` Nota: ${percentage.toFixed(2)}%`;

    if (percentage >= 70) {
        result.innerText += "\nAPROVADO";
    } else {
        result.innerText += "\nREPROVADO";
    }

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    result.style.display = "block";
    document.getElementById("menu-btn").style.display = "block"; // Mostrar o botão de menu
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
