import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div className="footer-img">
      <img className="logo2" src="https://i.imgur.com/lrEC5HI.jpg"/>
      <p1>Tayran</p1> 
      </div>
      <div className="copyright">
        <p className="p4">©2020 The Tayaran</p>
        <p className="p4">All rights reserved.</p>
      </div>
      <div className="contact" id="contact">
        <h4>Contact Us</h4>
        <p className="p4">New York, NY 10014</p>
        <p className="p4">(333) 002-0001</p>
        <p className="p4">World@Tayaran.com</p>
      </div>
      <div className="social">
        <h4>Follow Us</h4>
        <div className="icon"><img src="/images/Icon_Facebook.svg" alt="Facebook" /></div>
        <div className="icon"><img src="/images/Icon_Instagram.svg" alt="Instagram" /></div>
      </div>
      <div id="contact-mobile"></div>
    </footer>
  )
}

export default Footer;