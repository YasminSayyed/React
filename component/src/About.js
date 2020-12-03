import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "Netflix";

function Fav(){
  if(favSeries == "Netflix"){
    return <Netflix />;
  }
  else{
      return <Amazon />
  }
}

function About(){
    return(
        <Fav />
    );
}

export default About;