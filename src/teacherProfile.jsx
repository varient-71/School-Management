import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const teacherProfile = () => {
    const attendance = 100;
   
      function getProgressBarClass(attendance){
        if (attendance <= 40) {
            return 'bg-danger'; 
          } else if (attendance <= 75) {
            return 'bg-warning'; 
          } else {
            return 'bg-success'; 
          }
      }
  return (
    <div className="container-fluid">
      <div className="main-body">
       

        <div className="row gutters-sm">
          <div className="col-md-2 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="100" />
                  <div className="mt-3">
                    <h4>Rehan Alam</h4>
                    <p className="text-secondary mb-1"></p>
                    <p className="text-muted font-size-sm"></p>
                    <p className="text-muted font-size-sm"></p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    
                    Mail
                  </h6>
                  <span className="text-secondary w-100">rehan2001@gmail.com</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    
                    Phone
                  </h6>
                  <span className="text-secondary">8210972695</span>
                </li>
               
                
               
              </ul>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  
                 
                  <button className='btn btn-primary w-100'>Salary Details</button>

                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  
                 
                  <button className='btn btn-danger w-100'>Delete</button>

                </li>
               
                
                
               
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Teacher Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                 REhan reyaz Khan 
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Qualification</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    B.ed with Math 
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">D.O.B</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    10/09/1990
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    9876543210
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Joining Date</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">19/09/2008
            
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Aadhar No</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                6578930917654
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                Azad BAsti Gumla
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Teacher</i>Subject</h6>
                    <small>Hindi</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>English </small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Math</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Science</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Social Science</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Teacher</i>Attendance Status</h6>
                    
                    
                    
                    
                    <small>Attendance</small>
                    <div className="progress mb-3" style={{ height: '15px' }}>
      <div className={`progress-bar ${getProgressBarClass(attendance)}`} role="progressbar"
        style={{ width: `${attendance}%` }}
        
      >
         <span className="d-flex align-items-center justify-content-center w-100">
          {attendance}%
        </span>
      </div>
      
    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default teacherProfile;
