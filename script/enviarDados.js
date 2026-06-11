function enviarDados() {
    let nome = document.getElementById('ipname').value;
    let email = document.getElementById('ipemail').value;
    let telefone = document.getElementById('iptel').value;
    let dataNascimento = document.getElementById('ipdata').value;
    let ondeConheceu = document.getElementById('slinfo').value; // ADICIONADO
    let desejaNovidades = document.getElementById('ipcheck').checked;
    let mensagem = document.getElementById('taMensagem').value;

    if (!nome || !email) {
        alert("Por favor, preencha os campos obrigatórios (Nome e Email).");
        return;
    }

    document.getElementById('respNome').innerText = "Nome: " + nome;
    document.getElementById('respEmail').innerText = "Email: " + email;
    document.getElementById('respTelefone').innerText = "Telefone: " + (telefone ? telefone : "Não informado");
    document.getElementById('respData').innerText = "Data de Nascimento: " + (dataNascimento ? dataNascimento : "Não informada");
    
    document.getElementById('respInfo').innerText = "Onde nos conheceu: " + ondeConheceu.charAt(0).toUpperCase() + ondeConheceu.slice(1);
    
    document.getElementById('respCheck').innerText = "Deseja receber novidades?: " + (desejaNovidades ? "Sim" : "Não");
    document.getElementById('respMensagem').innerText = "Mensagem: " + (mensagem ? mensagem : "Nenhuma");

    document.getElementById('secaoConfirmacao').style.display = 'block';
}

function confirmarEnvio() {
    alert("Formulário enviado com sucesso!");
    
    document.getElementById('meuFormulario').submit();
}