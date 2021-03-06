import React from 'react';
import mockVolunteers from '../../MockData/MockUnregisteredVolunteers';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function UnregisteredVolunteerList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
      <div>
        <Paper className={classes.root}>
          <List className={classes.root} >
            <h5>
                מתנדבים חדשים שטרם אושרו
            </h5>
            {mockVolunteers.map((user) => 
            {
                const labelId = `checkbox-list-label-${user}`;
                return (
                <ListItem key={user.id} role={undefined} dense button onClick={handleToggle(user)}>
                    <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(user) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${user.firstName +" " + user.lastName + " ," + user.phoneNumber}`} />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                );
            })}
            <a><button type="button" class="btn btn-outline-secondary">אישור</button></a>
          </List>
        </Paper>         
      </div>
    
  );
}

export default UnregisteredVolunteerList;