import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DoggoList from '../doggoComponents/DoggoList';
import DoggoInput from '../doggoComponents/DoggoInput';
import DoggoDelete from '../doggoComponents/DoggoDelete';
import DoggoEdit from '../doggoComponents/DoggoEdit';

const API= 'https://dogfair.herokuapp.com/api/license_registrations/'

const DoggoRegistrationPage = () => {
  return (
    <div className="container-fluid" style={{padding: '2em'}}>
      <div className="columns">
        <div className="column">
          <Switch>
            <Route exact path="/doggo-registration/">
              <DoggoInput urlApi={API} />
            </Route>
            <Route path="/doggo-registration/delete">
              <DoggoDelete urlApi={API} />
            </Route>
            <Route path="/doggo-registration/edit">
              <DoggoEdit urlApi={API} />
            </Route>
          </Switch>
        </div>
        <div className="column">
          <DoggoList urlApi={API} />
        </div>
      </div>
    </div>
  );
};

export default DoggoRegistrationPage;
