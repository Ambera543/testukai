function Item({ data, modal }) {

    const showEdit = () => {
      modal(data);
    };
  
    const showDelete = () => {
      modal(data);
    };

    return (
      <tr>
        <td>{data.product}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td>
        <td>{data.last_received}</td>
        <button className="btn btn-primary-spacing" onClick={showEdit}>
          Edit
        </button>
        <button className="btn btn-primary" onClick={showDelete}>
          Delete
        </button>
      </tr>
    );
  }
  
  export default Item;