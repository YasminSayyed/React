import React from "react";
import Card from "../components/Card";


function Amazon(val){
    return(
        <>
         <Card 
         imgsrc={val.imgsrc}
         title={val.title}
         sname={val.sname}
         link={val.link}
        />
        </>
    );
}
export default Amazon;