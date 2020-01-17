import React from 'react';
import {useForm} from 'react-hook-form';

const RegistrationForm = props => {
const {handleSubmit, register, errors} = useForm ();
  return (
    <div className="container">
      <div className="reg-container">
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <p>{props.formTitle} Doggo Registration</p>
          <div className="column">
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              value={props.value[0]}
              onChange={props.onChange}
              ref={register ({
                required: 'Name is required',
                pattern: {
                  value: '',
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
              value={props.value[1]}
              onChange={props.onChange}
              ref={register ({
                required: 'Age is required',
                min: 0,
                max: 100,
                pattern: {
                  value: '',
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
              value={props.value[2]}
              onChange={props.onChange}
              ref={register ({
                required: 'Description is required, up to 100 letters',
                maxLength: 100,
                pattern: {
                  value: '',
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
              value={props.value[3]}
              onChange={props.onChange}
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

          <button className="button is-primary" type="submit">{props.formTitle}</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
