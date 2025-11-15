import alunos from './alunos.json' with { type: 'json' };
import professores from './professores.json' with { type: 'json' };
import disciplinas from './disciplinas.json' with { type: 'json' };
import materiais from './materiais.json' with { type: 'json' };
import login from './login.json' with { type: 'json' };

export const load = () => {
    localStorage.setItem('alunos', JSON.stringify(alunos));
    localStorage.setItem('professores', JSON.stringify(professores));
    localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
    localStorage.setItem('materiais', JSON.stringify(materiais));
    localStorage.setItem('login', JSON.stringify(login));
}

load();