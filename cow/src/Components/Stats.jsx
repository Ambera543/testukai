function Stats({stats}) {


    return (
        <div className="cow_stats">
            <div className="cow_stats_stat">
                <div><i>Cows:</i> <b>{stats.count}</b></div>
                <div><i>Total milk:</i> <b>{stats.milks} l</b></div>
                
            </div>
     
        </div>
    )
}

export default Stats;