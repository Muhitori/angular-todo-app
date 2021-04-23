import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<number> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onToggleComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(id: number) {
    this.remove.emit(id);
  }
}
