import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input()
  todo: Todo;

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
