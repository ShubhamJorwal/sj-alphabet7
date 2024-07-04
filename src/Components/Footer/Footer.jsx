import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
<footer id="footer">
  {/* <img id='footerimgtop' src="/main/footercurve.png" alt="" /> */}
  <div id="footstart">
    
    

    <div id="foot1st">
      <img className='asdfx65445c54wsw' src="/OrignialLogo.png" alt="" />
      <h2>Payment Methods</h2>
      <div className="foot1stchild">
        <img src="https://opt-v3-files.raksahb.com/static/media/paytmLogoNew.png" alt="" />
        <img src="https://opt-v3-files.raksahb.com/static/media/gpayLogoNew.png" alt="" />
        <img src="https://opt-v3-files.raksahb.com/static/media/upiLogoNew.png" alt="" />
        <img src="https://opt-v3-files.raksahb.com/static/media/internetBanking.png" alt="" />
      </div>
    </div>
    <div id="foot2nd">
      <div id="foot2ndchilddiffer">
      <img src="/Logos/7420314.png" alt="" /> |
      <img src="/Logos/responsgamfoundico.png" alt="" />|
      <img src="/Logos/rngcertifiedlogico.png" alt="" />
      </div>
    </div>
    <div id="foot5th">
      
    <h2>Reach Us</h2>
      <span>
      <li><a href="https://www.facebook.com/martydevelopment/" target="_blank">
        <i className="fab fa-facebook" tabIndex="0"></i>
      </a></li>
    {/* <li><a href="https://codepen.io/Marty-Development" target="_blank">
        <i className="fab fa-codepen" tabIndex="0"></i>
      </a></li> */}
    <li><a href="https://www.instagram.com/marty.development/" target="_blank">
        <i className="fab fa-instagram" tabIndex="0"></i>
      </a></li>
    <li><a href="https://github.com/MartyDevelopment" target="_blank">
        <i className="fab fa-github" tabIndex="0"></i>
      </a></li>
    <li><a href="#">
        <i className="fab fa-youtube" tabIndex="0" target="_blank"></i>
      </a></li>
    <li><a href="#">
        <i className="fab fa-pinterest" tabIndex="0" target="_blank"></i>
      </a></li>
      </span>
    </div>
    {/* <div id="foot2nd">
      <h2>Connect With Us</h2>
      <div className="foot2ndchild">
      <a className="btn" href="#">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a className="btn" href="#">
        <i className="fab fa-wordpress"></i>
      </a>
      <a className="btn" href="#">
        <i className="fab fa-github"></i>
      </a>
      <a className="btn" href="#">
        <i className="fab fa-instagram"></i>
      </a>
      <a className="btn" href="#">
        <i className="fab fa-youtube"></i>
      </a>
      <a className="btn" href="#">
        <i className="fas fa-coffee"></i>
      </a>
      </div>
    </div> */}
    <div id="foot3rd"> 
      <Link to={"/about-us"} >About Us</Link>
      {/* <Link to={"/contact-us"} >Contact Us</Link> */}
      <a target="_blank" href="https://wa.me/+916309854028?text=Connect with Alphabet7 for prompt support and feedback opportunities.">Contact Us</a>
      <Link to={"/conflict-resolution"} >Conflict Resolution</Link>
      <Link to={"/fairness"} >Fairness</Link>
      <Link to={"/payout"} >Payout</Link>
      <Link to={"/registeration-kyc-bank-details"} >Registeration & Bank Details</Link>
      <Link to={"/be-responsible"} >Responsible Gambling</Link>
      <Link to={"/self-exclusion"} >Self Exclusion</Link>
      <Link to={"/privacy-policy"} >Privacy Policy</Link>
      <Link to={"/terms-and-conditions"} >Terms & Conditions</Link>
      <Link to={"/antimoney"} >Anti Money</Link>

    </div>

    <div id="foot4th">
      <p id='foosdjkslxe232'>In order to register for this website, the user is required to accept theGeneral Terms and Conditions.In the event the General <Link to={"/terms-and-conditions"}>Terms and Conditions</Link> are updated, existing users may choose to discontinue using the products and services before the said update shall become effective, which is a minimum of two weeks after it has been announced.</p>
      <p>Copyright © 2024 Alphabet7 | All rights reserved.</p>
    </div>
  </div>
</footer>

<div className="x585w65465sd4f65sd"></div>
    </>
  )
}

export default Footer
