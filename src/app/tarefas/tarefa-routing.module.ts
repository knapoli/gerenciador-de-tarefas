import { MarlonComponent } from './marlon/marlon.component';
import { EditarComponent } from './editar/editar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { Routes } from '@angular/router';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarComponent
  },
  {
    path: 'tarefas/marlon',
    component: MarlonComponent
  }
];
