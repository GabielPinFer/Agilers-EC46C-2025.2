export const getDisciplina = () => {
    const params = new URLSearchParams(window.location.search);
    const idDisciplina = params.get('id');
    const disciplinas = JSON.parse(localStorage.getItem("disciplinas"));
    const disciplina = disciplinas.find(disciplina => disciplina.id === idDisciplina);
    return disciplina || {};
}

export const getMateriais = () => {
    const disciplina = getDisciplina();
    const materiais = JSON.parse(localStorage.getItem("materiais")) || [];
    return materiais.filter(material => disciplina.materiais.some(m => m.id == material.id));
}

const listaMateriais = document.getElementById("listaMateriais");
getMateriais().forEach(material => {
    const item = document.createElement("li");
    item.innerHTML = `<a href=${material.url}>${material.titulo}</a>`
    listaMateriais.appendChild(item);
})
