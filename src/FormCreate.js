import React from 'react';
import Styles from './Styles';
import { Form } from 'react-final-form';
import { Field } from 'react-final-form-html5-validation';

const FormCreate = ({onSubmit, initialValues}) => (
  <Styles>
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
              required
              minLength={3}
              tooShort="You need a longer name"
              valueMissing="Enter name please?"
            />
          </div>

          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
              required
              minLength={3}
              tooShort="You need a longer surname"
              valueMissing="Enter surname please?"
            />
          </div>

          <div>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
              required
              valueMissing="Enter e-mail please?"
              pattern="[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?"
              patternMismatch="That's not an email adress!"              
            />
          </div>
          <div>
            <label>Gender</label>
            <div>
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="male"
                />{' '}
                Male
              </label>
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="female"
                />{' '}
                Female
              </label>
            </div>
          </div>   
          <div>
            <label>Country of birth</label>
            <Field name="country" component="select">
              <option />
              <option value="Ukraine">Ukraine</option>
              <option value="USA">USA</option>
              <option value="Belgium">Belgium</option>
            </Field>
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Styles>
);

export default FormCreate;
