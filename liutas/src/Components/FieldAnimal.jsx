import OneAnimal from "./OneAnimal";

function FieldAnimal({ fieldAnimal, field, goHome, addWeight, addDate }) {


    if (field === fieldAnimal.field && 'cow' === fieldAnimal.animal) {
        return (
            <div className="cow">
                <OneAnimal goHome={goHome} addWeight={addWeight} addDate={addDate} fieldAnimal={fieldAnimal} ></OneAnimal>
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'sheep' === fieldAnimal.animal) {
        return (
            <div className="sheep">
                <OneAnimal goHome={goHome} addWeight={addWeight} addDate={addDate} fieldAnimal={fieldAnimal} ></OneAnimal>
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'horse' === fieldAnimal.animal) {
        return (
            <div className="horse">
                <OneAnimal goHome={goHome} addWeight={addWeight} addDate={addDate} fieldAnimal={fieldAnimal} ></OneAnimal>
            </div>
        );
    }
    else {
        return null;
    }

}

export default FieldAnimal;





// import { useState } from "react";

// function FieldAnimal({ fieldAnimal, field, goHome, svoris, addSvoris }) {
//   const [weight, setWeight]= useState(0);

//   const handleWeight= (e)=> {setWeight (e.target.value)}

//   if (field === fieldAnimal.field && "cow" === fieldAnimal.animal) {
//     return (
//       <div className="cow">
//         <h2 className="h2">{fieldAnimal.id}</h2>
//         <h2 className="h2">{svoris}</h2>
//         <button onClick={goHome}>Go Home</button>
//          <input type="text" onChange={(e)=> handleWeight(e)} className="input"/>
//          <button onClick={()=>addSvoris(weight)}>Weight</button> 
//       </div>
//     );
//   } else if (field === fieldAnimal.field && "sheep" === fieldAnimal.animal) {
//     return (
//       <div className="sheep">
//         <h2 className="h2">{fieldAnimal.id}</h2>
//         <h2 className="h2">{svoris}</h2>
//         <button onClick={goHome}>Go Home</button>
//         <input type="text" onChange={svoris} className="input" />
//          <button onClick={addSvoris}>Weight</button>
//       </div>
//     );
//   } else if (field === fieldAnimal.field && "horse" === fieldAnimal.animal) {
//     return (
//       <div className="horse">
//         <h2 className="h2">{fieldAnimal.id}</h2>
//         <h2 className="h2">{svoris}</h2>
//         <button onClick={goHome}>Go Home</button>
//         <input type="text" onChange={svoris}  className="input"/>
//          <button onClick={addSvoris}>Weight</button>
    
//       </div>
//     );
//   } else {
//     return null;
//   }
// }

// export default FieldAnimal;

