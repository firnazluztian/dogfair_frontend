import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';

// incomplete
const DoggoEdit = props => {
  const initialState = {
    id: null,
    name: '',
    age: null,
    description: '',
    doggo_id: '',
  };
  const {handleSubmit, register, errors} = useForm ();
  const [doggo, setDoggo] = useState (initialState);
  const history = useHistory ();

  const handleInputChange = event => {
    setDoggo ({...doggo, [event.target.name]: event.target.value});
  };

  const editData = async () => {
    await axios
      .patch (props.urlApi + doggo.id, doggo)
      .then (response => {
        console.log (response);
        console.log (response.data);
        alert ('Id ' + doggo.id + ' is sucessfully edited');
        history.push ('/doggo-registration');
      })
      .catch (error => {
        console.log (error);
        alert (error);
      });
  }

  const onSubmit = event => {
    console.log (event);
    event.preventDefault ();
    editData(); 
  };

  return (
    <div className="container">
      <div className="reg-container">
        <form onSubmit={handleSubmit (onSubmit)}>
          <p>Edit Doggo registration</p>
          <div className="column">
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              value={doggo.name}
              onChange={handleInputChange}
              ref={register ({
                required: 'Name is required',
                pattern: {
                  message: 'Please input valid name',
                },
              })}
            />
            <p className="has-text-danger">
              {errors.name && errors.name.message}
            </p>
          </div>

          <div className="column">
            <input
              type="number"
              className="input"
              placeholder="Age"
              name="age"
              value={doggo.age}
              onChange={handleInputChange}
              ref={register ({
                required: 'Age is required',
                min: 0,
                max: 100,
                pattern: {
                  message: 'Age must be within 0-100',
                },
              })}
            />
            <p className="has-text-danger">
              {errors.age && errors.age.message}
            </p>
          </div>

          <div className="column">
            <input
              type="text"
              className="input"
              placeholder="Description"
              name="description"
              value={doggo.description}
              onChange={handleInputChange}
              ref={register ({
                required: 'Description is required, up to 100 letters',
                maxLength: 100,
                pattern: {
                  message: 'Description is only up to 100 letters',
                },
              })}
            />
            <p className="has-text-danger">
              {errors.description && errors.description.message}
            </p>
          </div>

          <div className="column">
            <input
              type="text"
              className="input"
              placeholder="Doggo id"
              name="doggo_id"
              value={doggo.doggo_id}
              onChange={handleInputChange}
              ref={register ({
                required: 'Doggo ID is required',
                pattern: {
                  value: /(J)(\d{6})([a-d])/g,
                  message: 'Invalid id format, starts with capital letter J, followed by any 6 digits number, and ends with any lowercase letter from a to d',
                },
              })}
            />
            <p className="has-text-danger">
              {errors.doggo_id && errors.doggo_id.message}
            </p>
          </div>

          <button className="button is-primary" type="submit">Submit</button>
          <Link to="/doggo-registration/">
            <button className="button is-primary" type="submit">Cancel</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DoggoEdit;
