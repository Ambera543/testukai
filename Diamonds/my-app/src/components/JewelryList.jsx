
import Jewely from "./Jewely"

function JewelryList({jewerlys}) {

    return (
        <div>
            {jewerlys.map((jewely) => <Jewely key={jewely.id} jewelry={jewely}></Jewely>)}
        </div>
    )
}


export default JewelryList;



//     quantity: "",
//     price: "",
//     in_stock: "",
//   last_order: ""</h1>
//   }