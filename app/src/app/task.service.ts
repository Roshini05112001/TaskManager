import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksUrl = 'assets/tasks.json';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.tasksUrl);
  }
}

