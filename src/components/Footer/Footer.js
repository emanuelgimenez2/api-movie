import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Footer/Footer.scss";
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';








export default function Footer (){

return(
    <div>
        <footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      
      
      
    <div class="col-md-3">
        <h4>Follow Us</h4>
        <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-md-6 grid-margin stretch-card">
                <div className="redes">
                    
                        <div class="template-demo"> <button type="button" class="btn btn-social-icon btn-outline-facebook"><FaFacebookSquare /></button> <button type="button" class="btn btn-social-icon btn-outline-youtube"><i class="fa fa-youtube"></i></button> <button type="button" class="btn btn-social-icon btn-outline-twitter"><i class="fa fa-twitter"></i></button> <button type="button" class="btn btn-social-icon btn-outline-dribbble"><i class="fa fa-dribbble"></i></button> <button type="button" class="btn btn-social-icon btn-outline-linkedin"><i class="fa fa-linkedin"></i></button> <button type="button" class="btn btn-social-icon btn-outline-instagram"><FaInstagram /></button> </div>

                        {/* <FaBeer /> */}
                        
                  
                </div>
            </div>
        </div>
    </div>
</div>
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2021 - Company GE .  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
    </div>
)
}