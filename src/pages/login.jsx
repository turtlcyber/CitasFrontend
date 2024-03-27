import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Adminlogin from '../images/adminlogin.png';
import '../pages/login.css';

const Login = () => {
  const [usrForm, setUserForm] = useState({ username: "", password: "" });

  const submit = async () => {
    let formData = new FormData();
    formData.append("usename", usrForm.username);
    formData.append("password", usrForm.password);
    await axios.post("http://192.168.1.5:8100/auth/admin-login", usrForm).then(res => {
      console.log(res.data);
      let { data } = res.data;
      let { token } = data;

      localStorage.setItem("token", token);
      if (res.data.token) {
        router.push("/admin");
      }

    }).catch(err => {
      console.log(err)
    });


    // console.log(usrForm)
  }
  return (
    <div className='container imgsection'>
      <div className='row loginsection'>
        <Card>
          <form className="row adminimg">
            <div className="col-md-6  col-sm-6 loginform">
              <div className='admin'><h1>Admin Login</h1></div>
              <label for="inputEmail4" className="form-label">User Name</label>
              <input type="text" className='form-control' onChange={e => setUserForm(old => { return { ...old, username: e.target.value } })} />
              <br></br> <label for="inputPassword4" className="form-label">Password</label>
              <input type='text' className='form-control' onChange={e => setUserForm(old => { return { ...old, password: e.target.value } })} />
              <div className="col-12 mt-5">
                <button type="submit" className="btn btn-success" onClick={submit}>Sign in</button>
              </div>
            </div>
            <div className="col-md-6">
              <Card>
                <div className='imgadmin mb-2 mt-2'>
                  <Image className='imgmob' src={Adminlogin} alt="Logo" width={450} height={390} />
                </div>
              </Card>
            </div>

          </form>
        </Card>
      </div>
    </div>
  )
}

export default Login