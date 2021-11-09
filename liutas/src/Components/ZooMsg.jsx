function ZooMsg({msg, showMsg}) {

    return (
        <div className="zoo_msg" style={{height: showMsg ? '60px' : '0'}}>
            <span>{msg}</span>
        </div>
    )
}

export default ZooMsg;