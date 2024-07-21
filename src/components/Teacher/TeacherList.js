import React from 'react';
import { Link } from 'react-router-dom';

function TeacherList({ teachers, deleteTeacher }) {
    return (
        <div>
            <h2 className='mt-3'>List of Teachers</h2>
            <Link to="/add-teacher" className='btn btn-primary mb-3 mt-3'>Add Teacher</Link>
            <table className='table'>
                <thead>
                    <tr className='table-dark'>
                        <th>Teacher First Name</th>
                        <th>Teacher Last Name</th>
                        <th>Teacher Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                        <tr className='table-light' key={teacher.id}>
                            <td>{teacher.firstName}</td>
                            <td>{teacher.lastName}</td>
                            <td>{teacher.email}</td>
                            <td>
                                <Link to={`/edit-teacher/${teacher.id}`}><button className='btn btn-outline-info me-2'>Update</button></Link>
                                <button className="btn btn-outline-danger" onClick={() => deleteTeacher(teacher.id)}>Delete</button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;
