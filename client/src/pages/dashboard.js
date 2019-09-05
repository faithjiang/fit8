import React, { Component } from "react";
import axios from 'axios';

class Dashboard extends Component {
  logout = (e) => {
    e.preventDefault();
    axios.get('http://localhost:3001/logout', {withCredentials:true})
      .then(res => {
        if ( res.status === 200 ) {
          window.location = "/";
        }
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <div className="Dashboard">
        <h1>Welcome to Dashboard</h1>
        <button className="btn-primary" onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default Dashboard;
