import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import logo from '../icons/dog.svg';
import axios from 'axios';

const DoggoList = props => {
  const [doggo, setDoggo] = useState ({data: []});
  const [isLoading, setIsLoading] = useState (true);

  useEffect (() => {
    axios
      .get ('https://dogfair.herokuapp.com/api/license_registrations')
      .then (response => {
        console.log (response);
        console.log (response.data);
        setDoggo (response.data);
        setIsLoading (false);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  return (
    <Fragment>
      {isLoading
        ? 'Loading the data ... '
        : doggo.data.map (doggo => (
            <div className="doggo-list-box">
              <div className="columns">
                <div className="column">
                  <img src={logo} alt="logo" width="112" height="28" />
                </div>

                <div className="column is-8" key={doggo.id}>
                  <p><strong>{doggo.name}</strong></p>
                  <p>Age: {doggo.age}</p>
                  <p>Description: {doggo.description}</p>
                  <p>
                    Doggo id:
                    {doggo.doggo_id.first + '...' + doggo.doggo_id.last}
                  </p>
                </div>

                <div className="column">
                  <Link to="/doggo-registration/edit">
                    <button className="button">Edit</button>
                  </Link>
                  <Link to="/doggo-registration/delete">
                    <button className="button">Delete</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
    </Fragment>
  );
};

export default DoggoList;
