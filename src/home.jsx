import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate('/login');
  }
  const handleregister = () => {
    navigate('/register');
  }

  return (
    <div>
      <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <img src="../public/download.jpg" style={{width:'100%',height:'700px'}} alt="" />
              
            </div>
            <div className="col-6 mt-5">
              <h2>Welcome To School Management System</h2>
              <p className="text-justify">A school management system is an integrated software solution designed to streamline various
                 administrative and academic processes within educational institutions. It facilitates effective 
                 communication between teachers, students, and parents, ensuring a collaborative learning environment.
                  By automating tasks such as attendance tracking, grade management, and timetable scheduling, 
                  the system enhances operational efficiency. Additionally, it provides a centralized database for managing student information, enabling easy access 
                  to records and reports. With features like online enrollment, fee management, and performance analytics, schools can make informed decisions and improve overall productivity. Furthermore, the system supports real-time updates, ensuring that all stakeholders are informed of any changes or announcements promptly. By utilizing such a system, educational institutions can focus more on teaching and learning, fostering a positive academic atmosphere. Ultimately, a school management system plays a 
                crucial role in modernizing education and enhancing the overall school experience.
             </p>
             
                <button className="btn btn-primary w-25 mt-2" onClick={handlelogin}>Login</button><br/>
                <button className="btn btn-primary w-25 mt-2">Login as Guest</button><br/>
                <a className='primary' onClick={handleregister}>Don't have an account ?sign up</a>
              
            </div>

          </div>
        </div>
    </div>
  );
}

export default Home;
