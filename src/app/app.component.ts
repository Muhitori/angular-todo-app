import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  todos: Todo[] = [];

  constructor(private todoService: TodoDataService) {}

  ngOnInit(): void {
    this.todoService.getAll()
    .subscribe({
      next: todos => this.todos = todos,
    });
  }

  onAddTodo(todo: Todo) {
    this.todoService.add(todo)
    .subscribe({
      next: todos => this.todos.concat(todo),
    });
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoService.toggleCompleted(todo)
    .subscribe({
      next: updatedTodo => todo = updatedTodo,
    });
  }

  onRemoveTodo(id: number) {
    this.todoService.delete(id)
    .subscribe({
      next: (_) => this. todos = this.todos.filter(todo => todo.id !== id),
    });
  }

}
