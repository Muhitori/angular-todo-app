import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private api: ApiService) { }

  getAll(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  getById(id: number): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  add(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  delete(id: number): Observable<Todo> {
    return this.api.deleteTodoById(id);
  }

  toggleCompleted(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
