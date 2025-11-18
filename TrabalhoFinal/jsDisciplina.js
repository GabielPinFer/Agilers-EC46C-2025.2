
function acharDisciplina(){
    const parametroUrl = new URLSearchParams(window.location.search);
    const urlId = parametroUrl.get('id');
    const disciplinas = JSON.parse(localStorage.getItem("disciplinas"));

    const disciplinaEncontrada = disciplinas.find(disciplina => disciplina.id === urlId);
    return disciplinaEncontrada;
}

function acharAluno(){
    const parametroUrl = new URLSearchParams(window.location.search);
    const urlRa = parametroUrl.get('ra');
    const alunos = JSON.parse(localStorage.getItem("alunos"));

    const alunoEncontrado = alunos.find(aluno => aluno.ra === urlRa);
    return alunoEncontrado;
}

document.getElementById('disciplinaEscolhida').textContent = acharDisciplina().nome;

document.getElementById('btFrequencia').onclick = () => {
    window.location.href = `pgFrequencia.html?id=${acharDisciplina().id}&ra=${acharAluno().ra}`;
};

document.getElementById('btNotas').onclick = () => {
    window.location.href = `pgNotas.html?id=${acharDisciplina().id}&ra=${acharAluno().ra}`;
};

document.getElementById('btParticipantes').onclick = () => {
    window.location.href = `pgParticipantes.html`;
};

document.getElementById('btMateriais').onclick = () => {
    window.location.href = `pgMateriais.html`;
};