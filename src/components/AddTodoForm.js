export default function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
}) {
    return (
        //   <form onSubmit={onAddFormSubmit}>
        //     <h2>Add Todo</h2>
        //     <label htmlFor="todo">Create todo: </label>
        //     <input
        //       name="todo"
        //       type="text"
        //       placeholder="Create new todo"
        //       value={todo}
        //       onChange={onAddInputChange}
        //     />
        //   </form>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <h2>Create todo:</h2>
                        <form className="form-inline" onSubmit={onAddFormSubmit}>
                            <div className="form-group">
                                {/* <label htmlFor="email">Name:</label> */}
                                <input
                                    className="form-control"
                                    name="todo"
                                    type="text"
                                    placeholder="Create new todo"
                                    value={todo}
                                    onChange={onAddInputChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-default btn-primary">Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
