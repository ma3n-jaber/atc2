import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
/*import '../../styles/Styles.css';*/
import Navbar from '../../components/Navbar';
import '../../styles/Certificates.css';
const Certificates = () => {
    const navigate = useNavigate();

    const handlePrintRequest = (courseName) => {
        alert('Print request for ${courseName}');
      };
    
    const courses = [
      { name: 'Course 1', notes: 'No comments' },
      { name: 'Course 2', notes: 'Pending approval' },
    ];
    
    const handleBack = ()=>{
        navigate('/dashboard'); // Navigate back to the dashboard
    };
  
    return (
      <>
      <div>
      <Navbar />
      </div>
      <div className="ViewPage">
        <h2 className="section-title">Certificates</h2>
        <table className="certificates-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Comments</th>
              <th>Procedure</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td className="notes">{course.notes}</td>
                <td>
                  <button
                    className="print-request-btn"
                    onClick={() => handlePrintRequest(course.name)}
                  >
                    Print request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      </>
    );
  };
  
  export default Certificates;