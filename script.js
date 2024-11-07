const avanca = document.querySelectorAll('.btn-proximo'); // Seleciona todos os botões

avanca.forEach(button => {
    // Adiciona um ouvinte de evento de clique para cada botão
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo'); // Seleciona o passo ativo atual
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo'); // Pega o próximo passo com base no atributo data-proximo

        // Remove a classe "ativo" do passo atual
        atual.classList.remove('ativo');

        // Adiciona a classe "ativo" ao próximo passo
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
