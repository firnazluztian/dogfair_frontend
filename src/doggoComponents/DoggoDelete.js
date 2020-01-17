import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';

const DoggoDelete = props => {
  const [doggo, setDoggo] = useState ({});
  const history = useHistory()

  const handleChange = event => {
    setDoggo ({...doggo, [event.target.name]: event.target.value});
  };

  const deleteData = async () => {
    await axios
      .delete (props.urlApi + doggo.id, doggo)
      .then (response => {
        console.log (response);
        console.log (response.data);
        alert ("Id " + doggo.id + " is sucessfully deleted");
        history.push('/doggo-registration')
      })
      .catch (error => {
        console.log (error);
        alert (error);
      });
  }

  const handleSubmit = event => {
    event.preventDefault (); 
    deleteData();
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
