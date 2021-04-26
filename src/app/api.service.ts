import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from './todo';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

    // API: GET /todos
    public getAllTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(API_URL + '/todos');
    }

    // API: POST /todos
    public createTodo(todo: Todo) {
      return this.http
        .post<Todo>(API_URL + '/todos', todo);
    }

    // API: GET /todos/:id
    public getTodoById(todoId: number) {
      return this.http
        .get<Todo>(API_URL + '/todos/' + todoId);
    }

    // API: PUT /todos/:id
    public updateTodo(todo: Todo) {
      return this.http
        .put<Todo>(API_URL + '/todos/' + todo.id, todo);
    }

    // DELETE /todos/:id
    public deleteTodoById(todoId: number) {
      return this.http
        .delete<Todo>(API_URL + '/todos/' + todoId);
    }
}
