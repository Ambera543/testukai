function FieldAnimal({ fieldAnimal, field, goHome, svoris, addSvoris }) {
  if (field === fieldAnimal.field && "cow" === fieldAnimal.animal) {
    return (
      <div className="cow" onClick={() => goHome(fieldAnimal.id)}>
        <h2>{fieldAnimal.id}</h2>
        <h2>{svoris}</h2>
        <button onClick={goHome}>Go Home</button>
         <input type="text" onChange={svoris}  className="input"/>
         <button onClick={addSvoris}>Weight</button> 
  
      </div>
    );
  } else if (field === fieldAnimal.field && "sheep" === fieldAnimal.animal) {
    return (
      <div className="sheep" onClick={() => goHome(fieldAnimal.id)}>
        <h2>{fieldAnimal.id}</h2>
        <h2>{svoris}</h2>
        <button onClick={goHome}>Go Home</button>
        <input type="text" onChange={svoris} className="input" />
         <button onClick={addSvoris}>Weight</button>
      </div>
    );
  } else if (field === fieldAnimal.field && "horse" === fieldAnimal.animal) {
    return (
      <div className="horse" onClick={() => goHome(fieldAnimal.id)}>
        <h2>{fieldAnimal.id}</h2>
        <h2>{svoris}</h2>
        <button onClick={goHome}>Go Home</button>
        <input type="text" onChange={svoris}  className="input"/>
         <button onClick={addSvoris}>Weight</button>
    
      </div>
    );
  } else {
    return null;
  }
}

export default FieldAnimal;

