import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe(data => this.todos = data.todos);
  }

  onAddTodo(todo: Todo) {
    this.todoService.add(todo)
    .subscribe({
      next: createdTodo => this.todos.push(createdTodo),
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
