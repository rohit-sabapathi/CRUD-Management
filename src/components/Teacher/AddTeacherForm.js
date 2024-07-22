import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTeacherForm ({ addTeacher }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTeacher({ firstName, lastName, email });
        navigate('/CRUD-Management/teachers');
    };

    return (
        <div>
            <h2 className='mb-3 mt-3'>Add Teacher</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label for='first-name' className='form-label'>Teacher First Name</label>
                    <input
                        className='form-control'
                        id='first-name'
                        type="text"
                        placeholder="Enter the First Name of the Teacher"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label for='last-name' className='form-label'>Teacher Last Name</label>
                    <input
                        className='form-control'
                        id='last-name'
                        type="text"
                        placeholder="Enter the Last Name of the Teacher"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label for='email' className='form-label'>Teacher Email</label>
                    <input
                        className='form-control'
                        id='email'
                        type="email"
                        placeholder="Enter the Email of the Teacher"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='btn btn-primary'>Add Teacher</button>
            </form>
        </div>
    );
};

export default AddTeacherForm;
