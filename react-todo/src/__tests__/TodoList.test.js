import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";
import AddTodoForm from "../AddTodoForm";

// Mock data for initial todos
const mockTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Write Tests", completed: false }
];

test("renders TodoList with initial todos", () => {
  render(<TodoList todos={mockTodos} toggleTodo={jest.fn()} removeTodo={jest.fn()} />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Write Tests")).toBeInTheDocument();
});

test("adds a new todo", () => {
  const addTodo = jest.fn();
  render(<AddTodoForm addTodo={addTodo} />);

  const input = screen.getByPlaceholderText("Add a new task");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(addTodo).toHaveBeenCalledWith("New Task");
});

test("toggles a todo item", () => {
  const toggleTodo = jest.fn();
  render(<TodoList todos={mockTodos} toggleTodo={toggleTodo} removeTodo={jest.fn()} />);
  
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);

  expect(toggleTodo).toHaveBeenCalledWith(1);
});

test("deletes a todo item", () => {
  const removeTodo = jest.fn();
  render(<TodoList todos={mockTodos} toggleTodo={jest.fn()} removeTodo={removeTodo} />);

  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);

  expect(removeTodo).toHaveBeenCalledWith(1);
});
