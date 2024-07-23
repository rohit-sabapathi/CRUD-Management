import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateTeacher({ teachers, updateTeacher }) {
  const { id } = useParams();
  const teacher = teachers.find(teacher => teacher.id === parseInt(id));
  const [firstName, setFirstName] = useState(teacher ? teacher.firstName : '');
  const [lastName, setLastName] = useState(teacher ? teacher.lastName : '');
  const [email, setEmail] = useState(teacher ? teacher.email : '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!teacher) {
      navigate('/CRUD-Management/teachers');
    }
  }, [teacher, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTeacher({ id: parseInt(id), firstName, lastName, email });
    navigate('/CRUD-Management/teachers');
  };

  return (
    <div>
      <h2 className='mb-3 mt-3'>Update Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for='first-name' className='form-label'>Teacher First Name</label>
          <input
            id='first-name'
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter the Teacher's First Name"
            required
          />
        </div>
        <div className="mb-3">
          <label for='last-name' className='form-label'>Teacher Last Name</label>
          <input
            id='last-name'
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter the Teacher's Last Name"
          />
        </div>
        <div className="mb-3">
          <label for='email' className='form-label'>Teacher Email</label>
          <input
            id='email'
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the Teacher's Email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Teacher</button>
      </form>
    </div>
  );
}

export default UpdateTeacher;
