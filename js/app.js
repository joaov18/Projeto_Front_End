var projetoFrontEnd = angular.module('projetoFrontEnd', []);
angular.module('projetoFrontEnd').controller("dataBaseCtrl", function ($scope) {
    $scope.titleCard = [
        { title: "Ligações", imagem: '/imagens/telefonema.png' },
        { title: "Chat", imagem: '/imagens/bate-papo.png' },
        { title: "WhatsApp", imagem: '/imagens/bate-papo.png' },
        { id:3, title: "Recebidas por canal", imagem: '/imagens/pie-chart.png' },
        { title: "E-mail", imagem: '/imagens/email.png' },
        { title: "Ticket", imagem: '/imagens/cinema.png' },
        { title: "Bot", imagem: '/imagens/bot.png' },
        { title: "Agentes", imagem: '/imagens/pie-chart.png' },
    ];
    
    $scope.dataCardLigacoes = [
        { descricao: "Recebidos", enumerador: Math.floor(Math.random() * 800) },
        { descricao: "Atendidas", enumerador: Math.floor(Math.random() * 700) },
        { descricao: "Abandonadas", enumerador: Math.floor(Math.random() * 200) },
        { descricao: "% Abandono", enumerador: Math.floor(Math.random() * 100) + '%' },
        { descricao: "TMA", enumerador: Math.floor(Math.random() * 400) },
        { descricao: "TME", enumerador: Math.floor(Math.random() * 20) },
        { descricao: "Cliente na espera", enumerador: Math.floor(Math.random() * 10) },
        { descricao: "20 segundos", enumerador: Math.floor(Math.random() * 600) + 
        ' (' + Math.floor(Math.random() * 100) + '%)' },
        { descricao: "30 segundos", enumerador: Math.floor(Math.random() * 600) + 
        ' (' + Math.floor(Math.random() * 100) + '%)' },
        { descricao: "45 segundos", enumerador: Math.floor(Math.random() * 600) + 
        ' (' + Math.floor(Math.random() * 100) + '%)' },
        { descricao: "60 segundos", enumerador: Math.floor(Math.random() * 600) + 
        ' (' + Math.floor(Math.random() * 100) + '%)' },
    ];

    $scope.dataCardChat = [
        { descricao: "Recebidos", enumerador: Math.floor(Math.random() * 1400) },
        { descricao: "Atendidas", enumerador: Math.floor(Math.random() * 19) },
        { descricao: "Abandonadas", enumerador: Math.floor(Math.random() * 10) },
        { descricao: "% Abandono", enumerador: Math.floor(Math.random() * 100) + '%' },
        { descricao: "TMA", enumerador: Math.floor(Math.random() * 1000) },
        { descricao: "TME", enumerador: Math.floor(Math.random() * 10) },
        { descricao: "Cliente na espera", enumerador: Math.floor(Math.random() * 10) }
    ];

    $scope.dataCardWhatsApp = [
        { descricao: "Recebidos", enumerador: Math.floor(Math.random() * 3500) },
        { descricao: "Atendidas", enumerador: Math.floor(Math.random() * 100) },
        { descricao: "TMA", enumerador: Math.floor(Math.random() * 500) },
        { descricao: "TME", enumerador: Math.floor(Math.random() * 1400) },
        { descricao: "Cliente na espera", enumerador: Math.floor(Math.random() * 30) }
    ];

    $scope.dataCardRecebidas = [
        { ligacoes: Math.floor(Math.random() * 3500) },
        // { chat: Math.floor(Math.random() * 100) },
        // { whatsApp: Math.floor(Math.random() * 500) },
        // { email: Math.floor(Math.random() * 1400) },
        // { ticket: Math.floor(Math.random() * 30) },
        // { bot: Math.floor(Math.random() * 30) }
    ]

    $scope.dataCardEmail = [
        { descricao: "Recebidos", enumerador: Math.floor(Math.random() * 10) },
        { descricao: "Respondidos", enumerador: Math.floor(Math.random() * 300) },
        { descricao: "Concluídos", enumerador: Math.floor(Math.random() * 60) },
        { descricao: "Pendentes", enumerador: Math.floor(Math.random() * 30) },
    ];

    $scope.dataCardTicket = [
        { descricao: "Criados", enumerador: Math.floor(Math.random() * 2000) },
        { descricao: "Encerrados", enumerador: Math.floor(Math.random() * 1600) },
        { descricao: "Pendentes", enumerador: Math.floor(Math.random() * 500) },
    ];

    $scope.dataCardBot = [
        { descricao: "Criados", enumerador: Math.floor(Math.random() * 4700) },
        { descricao: "Encerrados", enumerador: Math.floor(Math.random() * 3900) },
        { descricao: "Pendentes", enumerador: Math.floor(Math.random() * 900) },
    ];

    $scope.dataCardAgentes = [
        { descricao: "Agentes logados", enumerador: Math.floor(Math.random() * 80) },
        { descricao: "Agentes disponíveis", enumerador: Math.floor(Math.random() * 50) },
        { descricao: "Agentes em atendimento", enumerador: Math.floor(Math.random() * 40) },
        { descricao: "Agentes em pausa", enumerador: Math.floor(Math.random() * 20) },
        { descricao: "Agentes deslogados", enumerador: Math.floor(Math.random() * 400) },
    ];
});

