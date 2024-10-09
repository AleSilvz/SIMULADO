
const questions = { 
        "Primeiro Socorros": [
            {
                question: "1. Qual é a primeira atitude a tomar ao encontrar uma pessoa inconsciente?",
                options: [
                "A) Tentar acordá-la com força.",
                "B) Verificar a respiração e chamar ajuda.",
                "C) Agitar a pessoa até que ela reaja.",
                "D) Administrar água para reanimá-la."
            ],
            correct: 1
        },
        {
            question: "2. O que fazer em caso de hemorragia?",
            options: [
                "A) Colocar a pessoa deitada e esperar ajuda.",
                "B) Pressionar a ferida com um pano limpo e elevar a parte afetada.",
                "C) Lavar a ferida com água e sabão.",
                "D) Usar gelo diretamente na ferida."
            ],
            correct: 1
        },
        {
            question: "3. Como realizar a manobra de Heimlich?",
            options: [
                "A) Pressionar o peito da vítima.",
                "B) Colocar as mãos na parte inferior das costelas e empurrar para dentro e para cima.",
                "C) Fazer compressões no abdômen.",
                "D) Buzinar para chamar a atenção da vítima."
            ],
            correct: 1
        },
        {
            question: "4. O que fazer em caso de queimadura?",
            options: [
                "A) Aplicar gelo diretamente sobre a queimadura.",
                "B) Lavar a área queimada com água corrente fria.",
                "C) Romper as bolhas que se formarem.",
                "D) Aplicar óleo ou pomada na queimadura."
            ],
            correct: 1
        },
        {
            question: "5. Qual é o principal objetivo da RCP (ressuscitação cardiopulmonar)?",
            options: [
                "A) Aumentar a frequência cardíaca.",
                "B) Manter a circulação sanguínea e a respiração até a chegada de ajuda.",
                "C) Estimular a vítima a acordar.",
                "D) Reduzir a dor no peito."
            ],
            correct: 1
        },
        {
            question: "6. O que é um acidente vascular cerebral (AVC)?",
            options: [
                "A) Uma contusão na cabeça.",
                "B) Uma interrupção do fluxo sanguíneo para o cérebro.",
                "C) Uma fratura craniana.",
                "D) Uma lesão nos pulmões."
            ],
            correct: 1
        },
        {
            question: "7. Quais são os sinais de um AVC?",
            options: [
                "A) Dor no peito e dificuldade para respirar.",
                "B) Fraqueza em um lado do corpo, dificuldade para falar e dor de cabeça intensa.",
                "C) Náuseas e vômitos.",
                "D) Perda de consciência e febre."
            ],
            correct: 1
        },
        {
            question: "8. O que fazer se uma pessoa estiver tendo uma convulsão?",
            options: [
                "A) Colocar objetos na boca para impedir que ela morda a língua.",
                "B) Segurá-la para evitar que se mova.",
                "C) Afastar objetos perigosos e proteger a cabeça dela.",
                "D) Dar água para ela beber."
            ],
            correct: 2
        },
        {
            question: "9. Como tratar uma picada de inseto?",
            options: [
                "A) Aplicar calor na área afetada.",
                "B) Limpar a área com água e sabão e aplicar compressa fria.",
                "C) Arranhar a área para aliviar a coceira.",
                "D) Cobrir a picada com fita adesiva."
            ],
            correct: 1
        },
        {
            question: "10. O que fazer em caso de desmaio?",
            options: [
                "A) Deixar a pessoa de pé.",
                "B) Colocar a pessoa deitada com as pernas elevadas.",
                "C) Dar água para ela.",
                "D) Jogar água fria em seu rosto."
            ],
            correct: 1
        },
        {
            question: "11. O que deve ser feito em caso de intoxicação?",
            options: [
                "A) Fazer a pessoa vomitar imediatamente.",
                "B) Identificar o veneno, se possível, e chamar o centro de controle de intoxicações.",
                "C) Administrar água para diluir a substância.",
                "D) Dar comida à vítima."
            ],
            correct: 1
        },
        {
            question: "12. Como imobilizar uma fratura?",
            options: [
                "A) Movimentar a área afetada para evitar rigidez.",
                "B) Usar uma tala e não mover a parte fraturada.",
                "C) Aplicar calor na área.",
                "D) Pedir à vítima que ande normalmente."
            ],
            correct: 1
        },
        {
            question: "13. Qual é a maneira correta de realizar compressões torácicas durante a RCP?",
            options: [
                "A) Colocar as mãos na parte superior do peito.",
                "B) Usar apenas uma mão.",
                "C) Manter uma frequência de 100 a 120 compressões por minuto, com profundidade de 5 a 6 cm.",
                "D) Fazer compressões lentas e leves."
            ],
            correct: 2
        },
        {
            question: "14. O que fazer em caso de sangramento nasal?",
            options: [
                "A) Inclinar a cabeça para trás.",
                "B) Inclinar a cabeça para frente e pressionar as narinas.",
                "C) Colocar água fria no nariz.",
                "D) Tampar o nariz com algodão."
            ],
            correct: 1
        },
        {
            question: "15. Como reconhecer uma parada cardiorrespiratória?",
            options: [
                "A) A pessoa apresenta respiração irregular e pulso fraco.",
                "B) A pessoa não responde e não apresenta respiração.",
                "C) A pessoa se queixa de dor no peito.",
                "D) A pessoa está apenas tonta."
            ],
            correct: 1
        },
        {
            question: "16. O que não se deve fazer ao tratar uma queimadura elétrica?",
            options: [
                "A) Desligar a fonte de eletricidade.",
                "B) Tocar na vítima para verificar seu estado.",
                "C) Levar a vítima ao hospital.",
                "D) Lavar a queimadura com água."
            ],
            correct: 1
        },
        {
            question: "17. O que caracteriza uma queimadura de primeiro grau?",
            options: [
                "A) Pele vermelha e dolorida, sem bolhas.",
                "B) Pele com bolhas e intensa dor.",
                "C) Pele carbonizada.",
                "D) Pele escamosa e seca."
            ],
            correct: 0
        },
        {
            question: "18. O que fazer se uma pessoa engasgar?",
            options: [
                "A) Fazer a manobra de Heimlich.",
                "B) Administrar água.",
                "C) Deixar a pessoa tossir até que desengasgue.",
                "D) Colocar a pessoa deitada de lado."
            ],
            correct: 0
        },
        {
            question: "19. Como tratar uma lesão na cabeça?",
            options: [
                "A) Aplicar pressão para parar o sangramento.",
                "B) Não mover a pessoa e chamar ajuda.",
                "C) Jogar água fria na cabeça.",
                "D) Dar medicamentos à pessoa."
            ],
            correct: 1
            },
            {
            question: "20. O que deve ser feito em caso de afogamento?",
            options: [
            "A) Tentar salvar a pessoa sem ajuda.",
            "B) Retirar a pessoa da água e realizar RCP se necessário.",
            "C) Esperar que ela saia da água sozinha.",
            "D) Chamar um especialista em salvamento."
            ],
            correct: 1
        }
    ]
};

export default questions;