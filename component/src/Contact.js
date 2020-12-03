import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "Amazon";

function Fav(){
  if(favSeries == "Amazon"){
    return <Amazon />;
  }
  else{
      return <Netflix />;
  }
}

function Contact(){
    return(
        <Fav />
    );
}

export default Contact;