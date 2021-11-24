function Item({ data, modal, remove }) {
    const showEdit = () => {
      modal(data);
    };
  
    return (
    <div>
      <div className="card-header">List of Cows</div>
      <table className="table">
      <tbody>
      <tr>
        <th>Name</th>
        <th>Weight</th>
        <th>Milk</th>
        <th>Total milk</th>
        <th>Last milking time</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr>
        <td>{data.name}</td>
        <td>{data.weight}</td>
        <td>{data.milk}</td>
        <td>{data.total_milk}</td>
        <td>{data.last_milking_time.slice(0, 10)}</td>
    <td>
        <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button></td>
        <td>
            <button className="btn btn-primary" onClick={() => remove(data.id)}>
              Delete
            </button>
          </td>
      </tr>
      </tbody>
            </table>
 
     </div>
    );
  }
 
  
  export default Item;