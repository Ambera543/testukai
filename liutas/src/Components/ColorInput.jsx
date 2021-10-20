// const colors = ["red", "green", "blue", "yellow", "pink", "purple", "brown", "orange", "gold"];
// const generateColor = () => {
//  return colors[index];};


function ColorInput({handleColor}) {
  const change = (e) => { handleColor(e)}
  return (
    <>
      <div className="colorinput">
        <input type="color"  onChange={(e) => change(e)}></input>
      </div>
    </>
  );
}

export default ColorInput;
