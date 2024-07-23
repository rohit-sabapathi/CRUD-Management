import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddStudentForm ({ addStudent }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent({ firstName, lastName, email });
        navigate('/CRUD-Management/students');
    };

    return (
        <div>
            <h2 className='mb-3 mt-3'>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label for='first-name' className='form-label' >Student First Name</label>
                    <input
                        className='form-control'
                        id='first-name'
                        type="text"
                        placeholder=" Enter the First Name of the Student"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label for='last-name' className='form-label'>Student Last Name</label>
                    <input
                        className='form-control'
                        id='last-name'
                        type="text"
                        placeholder="Enter the Last Name of the Student"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label for='email' className='form-label'>Student Email</label>
                    <input
                        className='form-control'
                        id='email'
                        type="email"
                        placeholder="Enter the Email of the Student"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='btn btn-primary'>Add Student</button>
            </form>
        </div>
    );
};

export default AddStudentForm;
