const questions = { 
    "Legislação": [
    {
        question: "É permitido aos pedestres...",
        options: [
            "A) cruzar vias de trânsito rápido",
            "B) utilizar o acostamento,nas rodovias",
            "C) permanecer na pista de rolamento",
            "D) obstruir a via, sem autorização"
        ],
        correct: 1
    },
    {
        question: "2. A placa de 'PARE' indica que o condutor deve:",
        options: [
            "A) Apenas diminuir a velocidade.",
            "B) Parar obrigatoriamente o veículo.",
            "C) Aumentar a velocidade.",
            "D) Manter a mesma velocidade."
        ],
        correct: 1
    },
    {
        question: "3. O uso de cinto de segurança é:",
        options: [
            "A) Obrigatório apenas para o condutor.",
            "B) Obrigatório apenas para os passageiros da frente.",
            "C) Obrigatório para todos os ocupantes do veículo.",
            "D) Opcional para os passageiros do banco traseiro."
        ],
        correct: 2
    },
    {
        question: "4. Quando o condutor se depara com uma faixa de pedestre sem semáforo, ele deve:",
        options: [
            "A) Aumentar a velocidade para atravessar rapidamente.",
            "B) Parar e dar prioridade ao pedestre.",
            "C) Buzinar para alertar os pedestres.",
            "D) Continuar sem parar."
        ],
        correct: 1
    },
    {
        question: "5. Em que situação é permitido transitar pelo acostamento?",
        options: [
            "A) Apenas para ultrapassagens rápidas.",
            "B) Em situações de emergência, para socorro e veículos de serviço.",
            "C) Quando há congestionamento.",
            "D) Em vias urbanas de grande movimento."
        ],
        correct: 1
    },
    {
        question: "6. A sinalização vertical é composta por:",
        options: [
            "A) Marcas no pavimento.",
            "B) Placas de regulamentação, advertência e indicação.",
            "C) Sinais luminosos.",
            "D) Gestos dos agentes de trânsito."
        ],
        correct: 1
    },
    {
        question: "7. Qual é a infração cometida por um condutor que dirige sob efeito de álcool?",
        options: [
            "A) Infração leve.",
            "B) Infração média.",
            "C) Infração grave.",
            "D) Infração gravíssima."
        ],
        correct: 3
    },
    {
        question: "8. Ultrapassar outro veículo em faixa contínua amarela é considerado:",
        options: [
            "A) Infração leve.",
            "B) Infração média.",
            "C) Infração gravíssima.",
            "D) Permitido, desde que com segurança."
        ],
        correct: 2
    },
    {
        question: "9. Para obter a Carteira Nacional de Habilitação (CNH), o candidato deve ter:",
        options: [
            "A) 18 anos completos.",
            "B) 16 anos completos.",
            "C) 21 anos completos.",
            "D) 14 anos completos."
        ],
        correct: 0
    },
    {
        question: "10. Qual é o prazo máximo para renovar a CNH para condutores com menos de 65 anos?",
        options: [
            "A) 2 anos.",
            "B) 5 anos.",
            "C) 10 anos.",
            "D) 15 anos."
        ],
        correct: 1
    },
    {
        question: "11. Em cruzamentos sem sinalização, a preferência é do veículo:",
        options: [
            "A) Que estiver em maior velocidade.",
            "B) Que vier pela direita do condutor.",
            "C) Que estiver mais próximo do cruzamento.",
            "D) Que buzinar primeiro."
        ],
        correct: 1
    },
    {
        question: "12. Qual é a velocidade máxima permitida em vias urbanas de trânsito rápido?",
        options: [
            "A) 60 km/h.",
            "B) 50 km/h.",
            "C) 80 km/h.",
            "D) 100 km/h."
        ],
        correct: 0
    },
    {
        question: "13. Em uma rotatória, quem tem a preferência de passagem?",
        options: [
            "A) Veículos que já estão circulando dentro da rotatória.",
            "B) Veículos que estão entrando na rotatória.",
            "C) Pedestres na faixa de segurança.",
            "D) Bicicletas."
        ],
        correct: 0
    },
    {
        question: "14. Qual é o prazo para registrar um veículo novo?",
        options: [
            "A) 15 dias.",
            "B) 30 dias.",
            "C) 45 dias.",
            "D) 60 dias."
        ],
        correct: 1
    },
    {
        question: "15. Qual é o significado de uma placa de advertência triangular com borda vermelha?",
        options: [
            "A) Indica proibição.",
            "B) Indica advertência sobre condições perigosas na via.",
            "C) Indica informação de serviços.",
            "D) Indica obrigatoriedade."
        ],
        correct: 1
    },
    {
        question: "16. O uso de capacete é obrigatório para:",
        options: [
            "A) Condutores de ciclomotores.",
            "B) Passageiros de ônibus.",
            "C) Passageiros de motocicletas.",
            "D) Condutores de carros."
        ],
        correct: 2
    },
    {
        question: "17. Quais documentos o condutor deve portar obrigatoriamente ao dirigir?",
        options: [
            "A) Apenas o CRLV.",
            "B) Apenas a CNH.",
            "C) CNH e CRLV.",
            "D) RG e CNH."
        ],
        correct: 2
    },
    {
        question: "18. A ultrapassagem deve ser feita pela:",
        options: [
            "A) Direita.",
            "B) Esquerda.",
            "C) Calçada.",
            "D) Acostamento."
        ],
        correct: 1
    },
    {
        question: "19. Quando o pedestre tem a preferência sobre veículos automotores?",
        options: [
            "A) Somente em faixas sinalizadas.",
            "B) Em qualquer local da via.",
            "C) Ao atravessar a faixa de pedestres em cruzamentos sem semáforo.",
            "D) Apenas em áreas rurais."
        ],
        correct: 2
    },
    {
        question: "20. A cor amarela no trânsito é utilizada para:",
        options: [
            "A) Indicar parada obrigatória.",
            "B) Orientar fluxos de trânsito.",
            "C) Regulamentar situações de risco e advertência.",
            "D) Informar serviços de emergência."
        ],
        correct: 2
    },
    {
        question: "21. Qual é a penalidade para quem dirige com a CNH suspensa?",
        options: [
            "A) Multa.",
            "B) Multa e apreensão do veículo.",
            "C) Multa, apreensão do veículo e cassação da CNH.",
            "D) Apenas advertência."
        ],
        correct: 2
    },
    {
        question: "22. O condutor que não respeitar a sinalização de parada obrigatória comete:",
        options: [
            "A) Infração leve.",
            "B) Infração média.",
            "C) Infração grave.",
            "D) Infração gravíssima."
        ],
        correct: 3
    },
    {
        question: "23. Qual é a validade do CRLV?",
        options: [
            "A) 1 ano.",
            "B) 2 anos.",
            "C) 5 anos.",
            "D) 10 anos."
        ],
        correct: 0
    },
    {
        question: "24. Estacionar em vagas exclusivas para deficientes físicos sem a devida autorização é:",
        options: [
            "A) Infração leve.",
            "B) Infração média.",
            "C) Infração grave.",
            "D) Infração gravíssima."
        ],
        correct: 3
    },
    {
        question: "25. O uso de celular ao volante é considerado:",
        options: [
            "A) Infração leve.",
            "B) Infração média.",
            "C) Infração grave.",
            "D) Infração gravíssima."
        ],
        correct: 3
    }
]
};

export default questions;
