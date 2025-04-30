function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && telefone && mensagem) {
        alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('mensagem').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}