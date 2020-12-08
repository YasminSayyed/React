import React from "react";
import Netflix from "./media/Netflix";
import Netflixdata from "./media/Netflixdata";
import Amazon from "./media/Amazon";
import Amazondata from "./media/Amazondata";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
   root:{
       flexGrow:1,
   },
   spacing3:{
    width:'100%',
    margin:0,
   },
   heading:{
   color:' #130f49'
   }
});

const favSeries = "Amazon";
function Fav(){
  if(favSeries == "Amazon"){
    return (
        Amazondata.map(Amazon)
    );
  }
  else{
    return(
        Netflixdata.map(Netflix)
   );
  }
}

function Contact(){
    const classes = useStyles();
    return(
        <section className="contact">
            <Container maxWidth="lg">
                <div className={classes.root}>
                    <Grid container spacing={3} className={classes.spacing3} >
                    <Grid item md={6} sm={6} xs={12} className="d-flex justify-content-center">
                    <h1 className={classes.heading}>CONTACT ME</h1>
                    </Grid>
                        <Grid item md={6} sm={6} xs={12} className="d-flex flex-column" style={{background: '#fff',borderRadius: '5px',padding:'40px 24px'}}>
                            <TextField
                                id="name"
                                label="Name"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="email"
                                label="Email Address"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="message"
                                label="Message"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Button  size="large" variant="contained" color="primary" className="mt-3">
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>    
                 </div> 
            </Container>
        </section>
    );
}

export default Contact;