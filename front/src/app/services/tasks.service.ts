import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }


  getTasks(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.URL);
  }


  deleteTask(tarefa: Tarefa):Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.URL}/${tarefa.id}`);
  }

  updateTask(tarefa:Tarefa):Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.URL}/${tarefa.id}`,tarefa);
  }


}
