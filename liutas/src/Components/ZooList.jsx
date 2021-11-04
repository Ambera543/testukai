import ZooAnimal from "./ZooAnimal";

function ZooList({animals,modal}) {




    return (
        <div className="zoo_list">
            {animals.map(animals => <ZooAnimal key={animals.id} animals={animals} modal={modal}></ZooAnimal>)}
        </div>
    )
}

export default ZooList;