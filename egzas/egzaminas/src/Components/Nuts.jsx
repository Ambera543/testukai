function Nuts({ data, modal }) {

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
        <td>{data.last_received.slice(0,10)}</td>
        <td><button className="btn-sm btn-primary mx-2" onClick={showEdit}>
          Edit
        </button></td>
        <td><button className="btn-sm btn-primary mx-2" onClick={showDelete}>
          Delete
        </button></td>
      </tr>
    );
  }
  
  export default Nuts;