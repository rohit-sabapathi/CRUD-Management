import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentList from './components/Student/StudentList';
import AddStudentForm from './components/Student/AddStudentForm';
import UpdateStudent from './components/Student/UpdateStudent';
import TeacherList from './components/Teacher/TeacherList';
import AddTeacherForm from './components/Teacher/AddTeacherForm';
import UpdateTeacher from './components/Teacher/UpdateTeacher';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);

    const addStudent = (student) => {
        setStudents([...students, { ...student, id: students.length + 1}]);
    };

    const updateStudent = (updatedStudent) => {
        setStudents(students.map(student => (student.id === updatedStudent.id ? updatedStudent : student)));
    };

    const deleteStudent = (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
         setStudents(students.filter(student => student.id !== id));
        }
    };

    const addTeacher = (teacher) => {
        setTeachers([...teachers, {...teacher, id: teachers.length + 1}]);
    };

    const updateTeacher = (updatedTeacher) => {
        setTeachers(teachers.map(teacher => (teacher.id === updatedTeacher.id ? updatedTeacher : teacher)));
    };

    const deleteTeacher = (id) => {
        if (window.confirm('Are you sure you want to delete this teacher?')) {
            setTeachers(teachers.filter(teacher => teacher.id !== id));
        }
    };

    return (
        <Router>
            <div className='container'>
                <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                    <div className='container nav'>
                        <ul className='nav nav-tabs'>
                            <li className='nav-item'>
                            <Link className='nav-link active' to="/CRUD-Management/">Management System</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link ' to="/CRUD-Management/students">Student Management</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/CRUD-Management/teachers">Teacher Management</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/CRUD-Management/" element={<StudentList students={students} deleteStudent={deleteStudent} />} />
                    <Route path="/CRUD-Management/students" element={<StudentList students={students} deleteStudent={deleteStudent} />} />
                    <Route path="/CRUD-Management/add-student" element={<AddStudentForm addStudent={addStudent} />} />
                    <Route path="/CRUD-Management/edit-student/:id" element={<UpdateStudent students={students} updateStudent={updateStudent} />} />
                </Routes>
                <Routes>
                    <Route path="/CRUD-Management/teachers" element={<TeacherList teachers={teachers} deleteTeacher={deleteTeacher} />} />
                    <Route path="/CRUD-Management/add-teacher" element={<AddTeacherForm addTeacher={addTeacher} />} />
                    <Route path="/CRUD-Management/edit-teacher/:id" element={<UpdateTeacher teachers={teachers} updateTeacher={updateTeacher} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
