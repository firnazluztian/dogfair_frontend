import React, {useState} from 'react';
import axios from 'axios';
import RegistrationForm from '../components/RegistrationForm';

const initialState = {
  name: '',
  age: '',
  description: '',
  doggo_id: '',
};

const DoggoInput = props => {
  const [doggo, setDoggo] = useState (initialState);

  const handleInputChange = event => {
    setDoggo ({...doggo, [event.target.name]: event.target.value});
  };

  const postData = async () => {
    await axios
      .post (props.urlApi, {
        registration: {
          name: doggo.name,
          age: doggo.age,
          description: doggo.description,
          doggo_id: doggo.doggo_id,
        },
      })
      .then (response => {
        console.log (response);
        console.log (response.data);
        setDoggo (initialState);
        alert ('succesfully registered');
      })
      .catch (error => {
        console.log (error);
        if (error.response.status === 422) {alert ('that doggo id has already been taken');}
      })
  };

  const onSubmit = event => {
    console.log (event);
    postData ();
  };

  return (
    <RegistrationForm
      formTitle="Add"
      onSubmit={onSubmit}
      onChange={handleInputChange}
      value={[doggo.name, doggo.age, doggo.description, doggo.doggo_id]}
    />
  );
};

export default DoggoInput;
