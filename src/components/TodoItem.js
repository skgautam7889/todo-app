export default function TodoItem({
    todo,
    onEditClick,
    onDeleteClick
}) {
    return (
        //   <li key={todo.id}>
        //     {todo.text}
        //     <button onClick={() => onEditClick(todo)}>Edit</button>
        //     <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
        //   </li>
        <tr>
            {/* <th scope="row">{todo.id}</th> */}
            <td>{todo.text}</td>
            {/* <td>{todo.date}</td> */}
            <td>
                <button className="btn btn-info" onClick={() => onEditClick(todo)}>Edit</button>
                &nbsp;<button className="btn btn-danger" onClick={() => onDeleteClick(todo.id)}>Delete</button>
            </td>
        </tr>

    );
}
