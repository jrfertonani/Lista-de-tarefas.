import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  tarefas: Tarefa[] = [];


  constructor(private taskService: TasksService ){}


  ngOnInit(): void {
    this.taskService.getTasks().subscribe((dados) => {
      this.tarefas = dados;
      console.log(dados);
    })

  }


}