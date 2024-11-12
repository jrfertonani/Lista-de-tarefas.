import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;



  onSubmit(){
    console.log(this.tarefa, this.categoria);
  }

}
