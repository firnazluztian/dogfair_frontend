import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import DoggoList from '../doggoComponents/DoggoList';
import DoggoInput from '../doggoComponents/DoggoInput';
import DoggoDelete from '../doggoComponents/DoggoDelete';
import DoggoEdit from '../doggoComponents/DoggoEdit';

const DoggoRegistrationPage = () => {
  return (
    <div className="container-fluid" style={{padding: '2em'}}>
      <div className="columns">
        <div className="column">
          <Switch>
            <Route exact path="/doggo-registration/">
              <DoggoInput />
            </Route>
            <Route path="/doggo-registration/delete">
              <DoggoDelete />
            </Route>
            <Route path="/doggo-registration/edit">
              <DoggoEdit />
            </Route>
          </Switch>
        </div>
        <div className="column">
          <DoggoList />
        </div>
      </div>
    </div>
  );
};

export default DoggoRegistrationPage;
