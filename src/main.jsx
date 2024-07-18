import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import './studentprofile.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import UserProfile from './studentprofile.jsx'
import TeacherProfile from './teacherProfile.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeacherProfile />
  </React.StrictMode>,
)
