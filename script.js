const form = document.getElementById('form-agenda');
let contato;
let telefone;
let tabelaContato;
let novoContato = '';
let contatos = [];
let telefones = [];
let nomeUsuario = '';
let userName;

atualizaUsuario();

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaContato();
    atualizaAgenda();
});

function adicionaContato(){
    contato = document.getElementById('contactName');
    telefone = document.getElementById('contactNumber');

    if(contatos.includes(contato.value)){
        alert('Contato já existe!')
    } else {
        contatos.push(contato.value);
        telefones.push(telefone.value);
        tabelaContato = document.querySelector('tbody');
        novoContato += '<tr>';
        novoContato += `<td>${contato.value}</td>`;
        novoContato += `<td>${telefone.value}</td>`;
        novoContato += '</tr>';
    }
}
function atualizaAgenda(){
    tabelaContato.innerHTML = novoContato;
    contato.value = '';
    telefone.value = '';
}
function atualizaUsuario(){
    nomeUsuario = prompt('Digite o nome do Usuário da Agenda: ');
    userName = document.getElementById('username');
    userName.innerHTML = nomeUsuario;
}