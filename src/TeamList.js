import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TeamCard from './TeamCard'

const teamData = [
  {name: "Foo", division: "Junior"},
  {name: "Bar", division: "Senior"},
  {name: "Baz", division: "Intermediate"},
  {name: "Qux", division: "Junior"},
]
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  fab: {
    position: 'absolute',
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
