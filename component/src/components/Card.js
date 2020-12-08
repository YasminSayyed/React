import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
   
    media: {
      width: '100%',
    },
    category:{
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#bbb',
        fontWeight: 600,
    },
  });
  
function Cards(props){
    const classes = useStyles();
    return(
        <Grid item md={3} sm={4} xs={12} className="d-flex flex-column">
        <Card className="d-flex flex-column flex-grow-1">
         <CardActionArea className="justify-content-center">
           <CardMedia
             title={props.sname}
           >
            <img src={props.imgsrc} className={classes.media} alt={props.sname}/>
           </CardMedia>
           <CardContent className="d-flex flex-column text-center">
             <Typography gutterBottom component="p" className={classes.category}>
             {props.sname}
             </Typography>
             <Typography variant="h5" color="textSecondary" component="h3">
             {props.title}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions className="justify-content-center">
         <Button variant="outlined" className="text-center">
            <Link href={props.link} color="inherit"  target="_blank">
                Watch Now
            </Link>
        </Button>
         </CardActions>
       </Card>
       </Grid>
    );
}

export default Cards;