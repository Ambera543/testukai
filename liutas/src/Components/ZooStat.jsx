function ZooStat({stat, groupStat}) {


    return (
        <div className="zoo_stat">
            <div className="zoo_stat_stat">
                <span><i>Animals Count:</i> <b>{stat.count}</b></span>
                <span><i>Animals Weight:</i> <b>{stat.weight.toFixed(2)} kg</b></span>
                <span><i>Animals Average Weight:</i> <b>{stat.average.toPrecision(5)} kg</b></span>
            </div>
            <div className="zoo_stat_gstat">
                {
                    groupStat.map(s => <span key={s.type}><i>{s.type}</i> <b>{s.count}</b></span>)
                }
            </div>
        </div>
    )
}

export default ZooStat;