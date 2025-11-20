function addUsuario(ra, senha){
    var usuario = {ra: ra, senha: senha};
    localStorage.setItem('login',JSON.stringify(usuario));
}

function verificaUsuario(ra,senha){
    const chk = document.getElementById('chkProfessor');
    var bancoDados = JSON.parse(localStorage.getItem('alunos'));
    if(chk.checked) bancoDados = JSON.parse(localStorage.getItem('professores'));

    var usuario = bancoDados.find(userExistente => userExistente.ra === ra && userExistente.senha === senha);

    if(usuario){
        return true;
    }
    return false;
}

document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();

    var usuarioInput = document.getElementById('lgus');
    var senhaInput = document.getElementById('lgsn');

    if(verificaUsuario(usuarioInput.value,senhaInput.value)){
        addUsuario(usuarioInput.value,senhaInput.value);
        window.location.href = 'PgAluno.html';
    }else{
        alert('RA e Senha incompativeis. Tente novamente');
        document.getElementById('lgus').value = '';
        document.getElementById('lgsn').value = '';
    }

});