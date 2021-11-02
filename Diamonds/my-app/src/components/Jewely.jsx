
function Jewely({jewelrys, modal}) {

    const  showEdit = () => {
        modal(jewelrys)
    }

    return (
        <div className="diamonds_list_jewelry">
            <div className="diamonds_list_jewelry_product">{jewelrys.product}</div>
            <div className="diamonds_list_jewelry_quantity">{jewelrys.quantity}</div>
            <div className="diamonds_list_jewelry_price">{jewelrys.price}</div>
            <div className="diamonds_list_jewelry_stats">
                <span><i>Last order:</i> {new Date(jewelrys.last_order).getFullYear()}</span>
                <span><i>Yes</i> {jewelrys.in_stock}</span>
            </div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default Jewely;
console.log(Jewely);
// onClick={showEdit}