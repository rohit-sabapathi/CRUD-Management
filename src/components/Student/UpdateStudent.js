import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateStudent({ students, updateStudent }) {
  const { id } = useParams();
  const student = students.find(student => student.id === parseInt(id));
  const [firstName, setFirstName] = useState(student ? student.firstName : '');
  const [lastName, setLastName] = useState(student ? student.lastName : '');
  const [email, setEmail] = useState(student ? student.email : '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!student) {
      navigate('/CRUD-Management/students');
    }
  }, [student, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent({ id: parseInt(id), firstName, lastName, email });
    navigate('/CRUD-Management/students');
  };

  return (
    <div>
      <h2 className='mb-3 mt-3'>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for='first-name' className='form-label'>Student First Name</label>
          <input
            className='form-control'
            id='first-name'
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter the Student's First Name"
            required
          />
        </div>
        <div className="mb-3">
          <label for='last-name' className='form-label'>Student Last Name</label>
          <input
            id='last-name'
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter the Student's Last Name"
          />
        </div>
        <div className="mb-3">
          <label for='email' className='form-label'>Student Email</label>
          <input
            id='email'
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the Student's Email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Student</button>
      </form>
    </div>
  );
}

export default UpdateStudent;
