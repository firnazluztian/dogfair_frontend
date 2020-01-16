import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const DoggoDelete = props => {
  const initialState = {
    id: null,
    name: '',
    age: '',
    description: '',
    doggo_id: '',
  };

  const [doggo, setDoggo] = useState (initialState);

  const handleChange = event => {
    setDoggo ({...doggo, [event.target.id]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault (); // stop browser from reloading the page
    axios
      .delete (
        `https://dogfair.herokuapp.com/api/license_registrations/${doggo.id}`,
        doggo
      )
      .then (response => {
        console.log (response);
        console.log (response.data);
        alert ("Id " + doggo.id + " is sucessfully deleted");
      })
      .catch (error => {
        console.log (error);
        alert (error);
      });
  };

  return (
    <div className="container">
      <div className="reg-container">
        <div className="column">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="number"
              name="id"
              placeholder="seach id"
              value={doggo.id}
              onChange={handleChange}
            />

            <div className="column">
              <button className="button" type="submit">
                Delete Doggo by id
              </button>
              <Link to="/doggo-registration">
                <button className="button" type="submit">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default DoggoDelete;
