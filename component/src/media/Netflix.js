import React from "react";
import Card from "../components/Card";


function Netflix(val){
    return(
      
         <Card
         imgsrc={val.imgsrc}
         title={val.title}
         sname={val.sname}
         link={val.link}
        />
      
    );
}

export default Netflix;
