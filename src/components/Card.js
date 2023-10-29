import {useState} from 'react'
function Card(props){
    const [readmore,setReadMore]=useState(false);
    function readMoreHandler(){
        setReadMore(!readmore);
    }
    
    const description=readmore?props.tour.info:`${props.tour.info.substring(0,200)}....`;

    return(
        <div className="card">
            <img src={props.tour.image} className='image'></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price" >{props.tour.price}</h4>
                   <h4 className="tour-name">{props.tour.name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore?`show less`:`read more`};
                    </span>
                </div>
            </div>
            
            <button onClick={()=>{props.removeTour(props.tour.id)}} className="btn-red">Not Interested</button>
        </div>
    );
}

export default Card;