import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlanetsList from './PlanetsList';
import Planet from './Planet';

class Planets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    // Fetch is are low level api that works like axios, and it is being build into a browser.
    return fetch('https://swapi.co/api/planets')
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json.results
      })
      .then(planets => {
        this.setState({ planets: planets});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <Switch>
        <Route 
          exact
          path='/planets'
          render={
            () => {
              return (<PlanetsList planets={this.state.planets} />);
            }
          }
        /> 
        <Route 
          exact
          path='/planets/:id'
          component={Planet}
        />
      </Switch>
    );
  }
}

export default Planets