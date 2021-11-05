function Jewely({ jewelry, modal }) {
  const showEdit = () => {
    modal(jewelry);
  };

  const showRemove = () => {
    modal(jewelry);
  };
  // function in_stock() {
  // if (jewelry.in_stock > 0){return "yes";}
  // else return "no";}

  const total = jewelry.quantity * jewelry.price;

  return (
    <div>
      <table>
        <tr>
          <th> Product</th>
          <th> Quantity</th>
          <th> Price</th>
          <th>Total value</th>
          <th> Last order</th>
          <th> In Stock?</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td> {jewelry.product}</td>
          <td>{jewelry.quantity}</td>
          <td>{jewelry.price}</td>
          <td>{total.toFixed(2)}</td>
          <td>{new Date(jewelry.last_order).getFullYear()}</td>
          <td> Yes</td>
          <td>
            <button onClick={showEdit}>Edit</button>
          </td>
          <td>
            <button onClick={showRemove}>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Jewely;
//  <div className="diamonds_list_jewelry_product"> {jewelry.product}</div>
// <div className="diamonds_list_jewelry_quantity">{jewelry.quantity}</div>
// <div className="diamonds_list_jewelry_price">{jewelry.price}</div>
// <div className="diamonds_list_jewelry_stats">
//     <span> {new Date(jewelry.last_order).getFullYear()}</span>
//     <span> {jewelry.in_stock}</span>
// </div>
