import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable()
export class ApiMockService {

  constructor() { }

  public getAllTodos(): Observable<Todo[]> {
    return of([
      new Todo({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }
}
