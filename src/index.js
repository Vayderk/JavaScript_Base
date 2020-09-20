import {Todo, TodoList} from "./classes";
import { crearTodoHtml } from "./js/functions";
import "./styles.css";

export const todoList = new TodoList();

todoList.todos.forEach(todo =>  crearTodoHtml( todo ));



 

