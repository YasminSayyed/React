import React from "react";

function Card(props){
    return(
        
        <div className="card">
            <img src={props.imgsrc} alt=""/>
            <div className="card__info">
            <p className="card__category">{props.sname}</p>
                <h3 className="card__title">{props.title}</h3>
                 <a href={props.link} target="_blank">
                    <button className="btn">Watch Now</button>
                </a>
  
            </div>
        </div>
          
   
    );
}

export default Card;