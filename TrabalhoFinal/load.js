import alunos from './bdAlunos.json' with { type: 'json' };
import professores from './bdProfessores.json' with { type: 'json' };
import disciplinas from './bdDisciplinas.json' with { type: 'json' };
import materiais from './bdMateriais.json' with { type: 'json' };

export const load = () => {
    localStorage.setItem('alunos', JSON.stringify(alunos));
    localStorage.setItem('professores', JSON.stringify(professores));
    localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
    localStorage.setItem('materiais', JSON.stringify(materiais));
}

load();