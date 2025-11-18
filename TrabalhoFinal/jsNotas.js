function acharDisciplina(){
    const parametroUrl = new URLSearchParams(window.location.search);
    const urlId = parametroUrl.get('id');
    const disciplinas = JSON.parse(localStorage.getItem("disciplinas"));
    const disciplinaEncontrada = disciplinas.find(disciplina => disciplina.id === urlId);
    if(!disciplinaEncontrada){
        return null;
    }
    return disciplinaEncontrada;
}

function acharAluno(){
    const parametroUrl = new URLSearchParams(window.location.search);
    const urlRa = parametroUrl.get('ra');
    const alunos = JSON.parse(localStorage.getItem("alunos"));
    const alunoEncontrado = alunos.find(aluno => aluno.ra === urlRa);
    if(!alunoEncontrado){
        return null;
    }
    return alunoEncontrado;
}

function acharNota(disciplina, alunoRa){
    const notas = disciplina.notas.find(nota => nota.alunoId === alunoRa);
    if(!notas){
        return null;
    }
    return notas;
}

document.getElementById('disciplinaEscolhida').textContent = acharDisciplina().nome;

document.getElementById('btVoltar').onclick = () => {
    window.location.href =`PgDisciplina.html?id=${acharDisciplina().id}&ra=${acharAluno().ra}`;
};

const disciplinaAtual = acharDisciplina();
const raUsuario = acharAluno().ra;
const nota = acharNota(disciplinaAtual,raUsuario);
const notaHtml = document.getElementById('notaEscolhida');

if(nota.avaliacoes.length > 0){
    const av = nota.avaliacoes;
    let html = '<ul style="list-style: nome; padding: 0;">';

    av.forEach((avaliacao,index) => {
        const nomeAv = `Avaliação ${index + 1}`;
        const notaAv = avaliacao.nota.toFixed(2);

        html += `<li>${nomeAv}: ${notaAv}</li><br>`;
    });

    notaHtml.innerHTML = html;
}
document.getElementById('notaEscolhida').textContent = nota.avaliacoes.forEach((avaliacao,index) => {
    const mostrar = avaliacao.nota.toFix(2);
    itemLista += `<li>Avaliação ${index + 1}: <strong>${mostrar}</strong></li>`;
});

