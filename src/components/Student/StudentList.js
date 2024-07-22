import React from 'react';
import { Link } from 'react-router-dom';

function StudentList({ students, deleteStudent }) {
    return (
        <div>
            <h2 className='mt-3'>List of Students</h2>
            <Link to="/CRUD-Management/add-student" className='btn btn-primary mb-3 mt-3'>Add Student</Link>
            <table className='table'>
                <thead>
                    <tr className='table-dark'>
                        <th>Student First Name</th>
                        <th>Student Last Name</th>
                        <th>Student Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr className='table-light' key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                                <Link to={`/CRUD-Management/edit-student/${student.id}`}><button className='btn btn-outline-info me-2'>Update</button></Link>
                                <button className="btn btn-outline-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
