import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, Typography, Button, CardContent, CardActions } from '@material-ui/core';

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
