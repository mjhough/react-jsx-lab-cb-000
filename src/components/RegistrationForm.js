import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form action="#">
        <input type="text" name="text" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;
