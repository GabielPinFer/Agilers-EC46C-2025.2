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
    const professores = JSON.parse(localStorage.getItem("professores"));
    const alunoEncontrado = alunos.find(aluno => aluno.ra === urlRa) || professores.find(p => p.ra === urlRa);
    if(!alunoEncontrado){
        return null;
    }
    return alunoEncontrado;
}

function acharFrequencia(disciplina, alunoRa){
    const frequencia = disciplina.frequencias.find(frequencia => frequencia.alunoId === alunoRa);
    if(!frequencia){
        return null;
    }
    return frequencia;
}

function acharPorcentagem(frequencia){
    const aulasTotais = frequencia.presencas.length;
    const aulasPresentes = frequencia.presencas.filter(presenca => presenca.presente === true).length;

    if(aulasTotais === 0 || aulasTotais === null){
        return 0.00;
    }
    const porcentagem = (aulasPresentes / aulasTotais) * 100;
    return porcentagem.toFixed(2);
}

document.getElementById('disciplinaEscolhida').textContent = acharDisciplina().nome;

document.getElementById('btVoltar').onclick = () => {
    window.location.href =`PgDisciplina.html?id=${acharDisciplina().id}&ra=${acharAluno().ra}`;
};

const disciplinaAtual = acharDisciplina();
const raUsuario = acharAluno().ra;
const freq = acharFrequencia(disciplinaAtual,raUsuario);

document.getElementById('frequenciaEscolhida').textContent = `${acharPorcentagem(freq)}%`;

