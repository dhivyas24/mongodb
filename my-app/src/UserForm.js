import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    setName('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default UserForm;
