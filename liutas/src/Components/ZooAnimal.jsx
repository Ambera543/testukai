
function ZooAnimal({animal}) {

    return (
        <div className="zoo_list_animal">
            <div className="zoo_ist_animal_name">{animal.name}</div>
            <div className="zoo_list_animal_type">{animal.type}</div>
            <div className="zoo_list_animal_stats">
                <span><i>Born date:</i> {new Date(animal.born).getFullYear()}</span>
                <span><i>Weight:</i> {animal.weight} kg.</span>
            </div>
        </div>
    )
}

export default ZooAnimal;