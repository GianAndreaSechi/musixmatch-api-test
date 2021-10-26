import './card-item.layout.css';

function CardItem(props){
    let separator = ""
    let rating = "#" + props.rating
    if (props.artist){
        separator = " - "
        rating = ""
    }
    return(
        <div>
            <div className="row">
                <span className="title">{props.name} </span><br/>
                <span className="description">{rating}{props.album}{separator}{props.artist}</span>
            </div>
        </div>
    )
}

export default CardItem;