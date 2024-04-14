function Heroes(props) {
    return (
        <div>
        <img src={props.imgLink} alt=''/> 
        <h2>{props.name}</h2>
        <div>{props.description}</div>
        </div>
    ); 
}

export default Heroes;