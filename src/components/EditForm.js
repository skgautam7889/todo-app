export default function EditForm({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
}) {
    return (
        //   <form onSubmit={onEditFormSubmit}>
        //     <h2>Edit Todo</h2>
        //     <label htmlFor="updateTodo">Update todo: </label>
        //     <input
        //       name="updateTodo"
        //       type="text"
        //       placeholder="Update todo"
        //       value={currentTodo.text}
        //       onChange={onEditInputChange}
        //     />
        //     <button type="submit" onClick={onEditFormSubmit}>
        //       Update
        //     </button>
        //     <button onClick={() => setIsEditing(false)}>Cancel</button>
        //   </form>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <h2>Create todo:</h2>
                        <form className="form-inline" onSubmit={onEditFormSubmit}>
                            <div className="form-group">
                                {/* <label htmlFor="email">Name:</label> */}
                                <input
                                    className="form-control"
                                    name="updateTodo"
                                    type="text"
                                    placeholder="Update todo"
                                    value={currentTodo.text}
                                    onChange={onEditInputChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                            <button className="btn btn-primary" type="submit" onClick={onEditFormSubmit}>Update</button> &nbsp;
                            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
