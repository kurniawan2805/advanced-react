import React from 'react';

const Form = ({onSubmit}) => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log();
    onSubmit(e.target.query.value);
    e.target.query.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        id="query"
        placeholder="Enter Github handle here ..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
