export const getDisciplina = () => {
    const params = new URLSearchParams(window.location.search);
    const idDisciplina = params.get('id');
    const disciplinas = JSON.parse(localStorage.getItem("disciplinas"));
    const disciplina = disciplinas.find(disciplina => disciplina.id === idDisciplina);
    return disciplina || {};
}

export const getProfessor = () => {
    const professores = JSON.parse(localStorage.getItem("professores"));
    const disciplina = getDisciplina();
    const {ra, nome, email} = professores.find(el => el.ra == disciplina.professor.ra);
    return {ra, nome, email};
}

export const getAlunos = () => {
    const disciplina = getDisciplina();
    const alunos = JSON.parse(localStorage.getItem("alunos"));
    return alunos.filter(aluno => disciplina.alunos.some(al => al.ra == aluno.ra)).map(({ra,nome, email}) => ({ra,nome,email}));
}

export const getParticipantes = () => {    
    return [getProfessor(), ...getAlunos()];
}


const participantes = getParticipantes();
participantes.forEach(participante => {
    const participanteElement = document.createElement('li');
    participanteElement.innerHTML = `
        <h3>${participante.nome}</h3>
        <p>Email: ${participante.email}</p>
        <p>Função: ${participante.funcao}</p>
        <hr>
    `;
    document.getElementById('listaParticipantes').appendChild(participanteElement);
});