// Script para o menu mobile
const toggle = document.querySelector('.menu-img');
const menu = document.getElementById('MS');

toggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

// Script para o slider de depoimentos
const imagens = document.querySelectorAll('.depoimentos img');
    let index = 0;

setInterval(() => {
    imagens[index].classList.remove('ativo');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('ativo');
}, 5000);

// Script para validação do formulário
    const envio = document.getElementById('btn');

    envio.addEventListener('click', (enviar) => {
        enviar.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
        }
        else {
            alert('Mensagem enviada com sucesso!');
            return;
        }
        
    });