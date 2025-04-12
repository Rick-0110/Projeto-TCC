document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique aos botões de serviço
    document.querySelectorAll('.btn-servico').forEach(button => {
        button.addEventListener('click', function() {
            const servico = this.closest('.servico-card');
            const nomeServico = servico.querySelector('h3').textContent;
            
            // Verificar se o usuário está logado
            const usuarioLogado = localStorage.getItem('usuarioLogado');
            
            if (usuarioLogado) {
                // Se estiver logado, redirecionar para a página de orçamento
                window.location.href = 'orcamento.html?servico=' + encodeURIComponent(nomeServico);
            } else {
                // Se não estiver logado, redirecionar para a página de login
                alert('Por favor, faça login para solicitar um orçamento.');
                window.location.href = 'login.html';
            }
        });
    });

    // Adicionar evento de clique ao menu
    document.querySelectorAll('.menu ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });
});
