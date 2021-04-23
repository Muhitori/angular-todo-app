import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should take parameters from constructor', () => {
    let todo = new Todo({
      title: 'hello',
      complete: true
    });

    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
