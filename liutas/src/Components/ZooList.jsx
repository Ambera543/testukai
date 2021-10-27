import ZooAnimal from "./ZooAnimal";

function ZooList({animals}) {

    return (
        <div className="zoo_list">
            {animals.map(animal => <ZooAnimal key={animal.id} animal={animal}></ZooAnimal>)}
        </div>
    )
}

export default ZooList;