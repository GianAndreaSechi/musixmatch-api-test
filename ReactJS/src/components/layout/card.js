import './card.layout.css';

function Card(props){   
    const css = "card " + props.cssClass;
    return(
        <div className={css}>
            {props.children}
        </div>
    );
    
}

export default Card;