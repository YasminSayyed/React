import React from "react";
import Netflix from "./media/Netflix";
import Netflixdata from "./media/Netflixdata";
import Amazon from "./media/Amazon";
import Amazondata from "./media/Amazondata";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
   root:{
       flexGrow:1,
   },
   spacing3:{
    width:'100%',
    margin:0,
   },
   
   banner__heading:{
    fontWeight: 700,
    lineHeight: '56px',
    color: '#222222'
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
        <>
        <section className="banner">
        <Container maxWidth="lg" style={{position:'relative'}}>
        <h1 className={classes.banner__heading}>Welcome to <span style={{color:'#e8242e'}}>TV Shows</span></h1>
        <h2>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best shows on TV.</h2>
        
        </Container>
        
        </section>
        <section>
            <Container maxWidth="lg">
                <div className={classes.root}>
                    <Grid container spacing={3} className={classes.spacing3} >
                        <Fav />
                    </Grid>    
                 </div> 
            </Container>
        </section>
        </>
    );
}

export default About;