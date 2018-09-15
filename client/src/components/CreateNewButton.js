import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class CreateNewButton extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="fab"
          className={classes.button}
          style={{ backgroundColor: "#44c495", marginLeft: "30%" }}
          onClick={this.props.addNew}
        >
          <AddIcon />
        </Button>

        {/* <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
          <Icon>edit_icon</Icon>
        </Button>
        
        <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
          <DeleteIcon />
        </Button> */}
      </div>
    );
  }
}

CreateNewButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateNewButton);
