import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {

  }
};

function TeamCard(props) {
  const { classes, team } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="title" component="h2"> {team.name} </Typography>
        <Typography gutterBottom variant="subheading" color="textSecondary" component="h3"> {team.division} </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary"> Scores </Button>
        <Button size="small" color="secondary"> Edit </Button>
      </CardActions>
    </Card>
  );
}

TeamCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamCard);
