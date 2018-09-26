import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import TeamCard from './TeamCard'

const divisions = ["SR5", "SR3", "INT5", "INT3", "JR", "Elem", "Classroom"]
const teamData = [
  {name: "Foo", division: divisions[Math.floor(Math.random() * Math.floor(divisions.length))]},
  {name: "Bar", division: "Elem"},
  {name: "Baz", division: "SR5"},
  {name: "Qux", division: "JR"},
]
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

function TeamList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="headline">Your Teams</Typography>
        </Grid>
        {teamData.map(team => <Grid key={team.name} item sm={4} xs={6}>
          <TeamCard team={team}/>
        </Grid>)}
      </Grid>

      <Button variant="fab" className={classes.fab} color="primary">
        <AddIcon />
      </Button>
    </div>
  );
}

TeamList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamList);
