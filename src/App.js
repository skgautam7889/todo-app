import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import EditForm from "./components/EditForm";
import "./styles.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();
    console.log("Date.now().toString(36) + Math.random().toString(36).substr(2)==>",Date.now().toString(36) + Math.random().toString(36).substr(2))
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id:Math.random().toString(20).substr(2),
          text: todo.trim(),
          date: new Date(),
        }
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="App">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      {/* <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Name</th>
                    {/* <th scope="col">Create Date</th> */}
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo,index) => (
                    <TodoItem
                      key={index}
                      todo={todo}
                      onEditClick={handleEditClick}
                      onDeleteClick={handleDeleteClick} 
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
