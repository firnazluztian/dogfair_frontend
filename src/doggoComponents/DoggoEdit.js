import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from '../components/RegistrationForm'

// incomplete
const DoggoEdit = props => {
  const [doggo, setDoggo] = useState ({});
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
    <RegistrationForm
      formTitle="Edit"
      onSubmit={onSubmit}
      onChange={handleInputChange}
      value={[doggo.name, doggo.age, doggo.description, doggo.doggo_id]}
    />
  );
};

export default DoggoEdit;
