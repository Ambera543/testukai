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
        <button className="btn-sm btn-primary m-2" onClick={showEdit}>
          Edit
        </button>
        <button className="btn-sm btn-primary m-3" onClick={showDelete}>
          Delete
        </button>
      </tr>
    );
  }
  
  export default Nuts;