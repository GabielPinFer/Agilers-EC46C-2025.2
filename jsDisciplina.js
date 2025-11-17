
    const parametroUrl = new URLSearchParams(window.location.search);
    const urlId = parametroUrl.get('id');
    const disciplinas = JSON.parse(localStorage.getItem("disciplinas"));

    const disciplinaEncontrada = disciplinas.find(disciplina => disciplina.id === urlId);

    document.getElementById('disciplinaEscolhida').textContent = disciplinaEncontrada.nome;

