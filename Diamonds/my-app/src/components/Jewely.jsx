
function Jewely({jewelry, modal}) {

    const  showEdit = () => {
        modal(jewelry)
    }

    return (
        <div className="diamonds_list_jewelry">
            <div className="diamonds_list_jewelry_product">{jewelry.product}</div>
            <div className="diamonds_list_jewelry_quantity">{jewelry.quantity}</div>
            <div className="diamonds_list_jewelry_price">{jewelry.price}</div>
            <div className="diamonds_list_jewelry_stats">
                <span><i>Last order:</i> {new Date(jewelry.last_order).getFullYear()}</span>
                <span><i>Yes</i> {jewelry.in_stock}</span>
            </div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default Jewely;

