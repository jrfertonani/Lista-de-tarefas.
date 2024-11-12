import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }


  getTasks(): {

  }


}
