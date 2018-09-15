import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CreateNewButton from "./CreateNewButton";
import VenueForm from "./Form";
import { Modal, ModalHeader } from "reactstrap";
import VenueCard from "./VenueCard";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NightLife extends React.Component {
  state = {
    modal: false,
    venueArray: [
      {
        name: "Arena Ktown",
        address: "3319 Wilshire Blvd, Los Angeles, CA 90010",
        url: "https://www.arenaktown.com",
        category: "club"
      },
      {
        name: "Terra Cotta",
        address: "3760 Wilshire Blvd, Los Angeles, CA 90010",
        url: "http://www.terracottala.com",
        category: "lounge/bar"
      }
    ]
  };

  addNewVenue = () => {
    console.log("button has been clicked");
    this.setState({
      modal: true
    });
  };

  handleClose = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    const { classes } = this.props;
    const { modal } = this.state;
    const closeBtn = (
      <button className="close" onClick={this.handleClose}>
        &times;
      </button>
    );
    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar style={{ backgroundColor: "rgb(20, 22, 23)" }}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.grow}
              >
                NightLife
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <Grid container spacing={24} style={{ marginTop: "4%" }}>
          <Grid item xs={1}>
            <CreateNewButton addNew={this.addNewVenue} />
          </Grid>
          <Grid item xs={4}>
            {this.state.venueArray &&
              this.state.venueArray.map(venue => (
                <div key={venue.address}>
                  <VenueCard
                    name={venue.name}
                    address={venue.address}
                    url={venue.url}
                    category={venue.category}
                  />
                  <br />
                </div>
              ))}
          </Grid>
        </Grid>
        <Modal isOpen={modal} toggle={this.handleClose} style={{ top: "12%" }}>
          <ModalHeader toggle={this.handleClose} close={closeBtn}>
            Venue
          </ModalHeader>
          <VenueForm />
        </Modal>
      </React.Fragment>
    );
  }
}

NightLife.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NightLife);
