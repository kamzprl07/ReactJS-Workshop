import React, { Component } from 'react';
import '../../styles/my-theme.css';
class FooterComponent extends Component {
    render() {
      return (
        <footer>
     <div className="social-network-links">
       <a className="facebook" href="#">
         <i className="icon fab fa-facebook-f"></i>
       </a>
       <a className="twitter" href="#">
         <i className="icon fab fa-twitter"></i>
       </a>
       <a className="instagram" href="#">
         <i className="icon fab fa-instagram"></i>
       </a>
       <a className="linkedin" href="#">
         <i className="icon fab fa-linkedin-in"></i>
       </a>
       <a className="github" href="#">
         <i className="icon fab fa-github"></i>
       </a>
     </div>
     <div className="copyright"><span> All Rights Reserved © 2018</span></div>
   </footer>
      );
    }
  }
  
  export default FooterComponent;

  
