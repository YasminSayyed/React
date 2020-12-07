import React from "react";
import Netflix from "./media/Netflix";
import Netflixdata from "./media/Netflixdata";
import Amazon from "./media/Amazon";
import Amazondata from "./media/Amazondata";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
   root:{
       flexGrow:1,
   },
   spacing3:{
    width:'100%',
    margin:0,
   },

});
const favSeries = "Netflix";

function Fav(){
  if(favSeries == "Netflix"){
    return(
         Netflixdata.map(Netflix)
    );
  }
  else{
    return (
        Amazondata.map(Amazon)
    );
  }
}

function About(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Grid container spacing={3} className={classes.spacing3} >
        <Fav />
        </Grid>    
        </div> 
    );
}

export default About;