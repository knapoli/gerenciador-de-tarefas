import { RouterModule } from '@angular/router';
import { TarefaService } from './shared/tarefa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';
import { MarlonComponent } from './marlon/marlon.component';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarComponent,
    EditarComponent,
    TarefaConcluidaDirective,
    MarlonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
