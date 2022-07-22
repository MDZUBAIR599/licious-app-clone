import {FaInstagram} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import "../module.css" 
export const Footer=()=>{
    return (  
        <div className="footer-main">
            <div className="f-title">
                <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="" />
                <div className="f-hr"><hr /></div>
            </div>
            <div>
                <div className="f-first">
               <div className="f-inner">
                <div>
                    <h3 className="footer-h1">USEFUL LINKS</h3>
                    <p className="footer-p">Why Licious</p>
                    <p className="footer-p">Refer & Earn</p>
                    <p className="footer-p">Licious Cash & Cash+</p>
                    <p className="footer-p">Careers</p>
                    <p className="footer-p">BLOG</p>
                    <p className="footer-p">Campaigns</p>
                    <p className="footer-p">Bug Bounty Guidelines</p>
                    <p className="footer-p">About Us</p>
                    <p className="footer-p">FSSC 22000</p>
                    <p className="footer-p">FSSAI Licenses</p>
                    <p className="footer-p">Sitemap</p>
                    <br />    
                </div>
                <div className="footer-part1">
                    <h3 className="footer-h1">EXPERIENCE LICIOUS APP ON</h3>
                    <h3 className="footer-h1">MOBILE</h3>
                    <img className="footer-img" src="https://www.licious.in/img/rebranding/app-store-new.svg" alt="" />
                    <img className="footer-img" src="https://www.licious.in/img/rebranding/play-store-new.png" alt="" />
                </div>
            </div>
            
            <div className="f-inner">
                <div className="footer-part2">
                    <h3 className="footer-h1">CONTACT US</h3>
                    <p className="footer-p">Call:1800-4190-786</p>
                    <p className="footer-p">Talktous@licious.com</p>
                    <br />
                    <h3 className="footer-h1">REGISTERED OFFICE</h3>
                    <h3 className="footer-h1">ADDRESS</h3>
                    <p className="footer-p">House of Licious ,Zed Pearl</p>
                    <p className="footer-p">No 12,Domlur Layout</p>
                    <p className="footer-p" >Banglore, Karnataka-</p>
                    <p className="footer-p">560071</p>
                </div>
                <div>
                    <p className="footer-p">T&C</p>
                    <p className="footer-p">FAQ</p>
                    <p className="footer-p">Privacy Policy</p>
                    <br />
                    <h3 className="footer-h1">HAVE SECURITY</h3>
                    <h3 className="footer-h1">CONCERN</h3>
                    <p className="footer-p">Mail us to:</p>
                    <p className="footer-p">security@licious.com</p>
                </div>
            </div>
                </div>
         
            </div>
            <div className="f-touch">
                <h3 className="f-keep footer-h1">KEEP IN TOUCH</h3>
                <FaInstagram className="footer-icon icon1"></FaInstagram>
                <AiFillFacebook className="footer-icon icon2"></AiFillFacebook>
                <BsTwitter className="footer-icon icon3"></BsTwitter>
            </div>
            <div>
                <div className="footer-hr">
                     <h3>CITIES WE SERVE</h3>
                     <div className="foot-hr"><hr /></div>
                </div>
               
                <p className="footer-cities">Bengaluru{"   "}|{"   "}NCR{"   "}|   Hyderabad{"   "}|   Chandigarh{"   "}|   Panchkula{"   "}|   Mohali{"   "}|   Mumbai{"   "}|   Pune{"   "}|   Chennai{"   "}|   Coimbatore{"   "}|   Jaipur{"   "}|   Cochin{"   "}|   Vijayawada{"   "}|   Visakhapatnam{"   "}|   Pondicherry{"   "}|   Kolkata{"   "}|   Trichy{"   "}|   Lucknow{"   "}|   Kanpur{"   "}|   Agra{"   "}|   Thrissur{"   "}|   Nagpur{"   "}|   Bhilai{"   "}|   Nashik{"   "}|   Palakkad</p>
                <hr />
            </div>
            <div className="footer-para" >
                <h4 className="footer-h1 mar">We will sell only the meat that we would eat ourselves.</h4>
                <br />
                <p>At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience.</p>
                <br />
                <h4 className="footer-h1">If it’s not fresh, we won’t sell it</h4>
                <br />
                <p>For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 5°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep.Did we mention that we’re obsessed?</p>
                <br />
                <h4 className="footer-h1">We will charge only for what you buy</h4>
                <br />
                <p>Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less</p>
                <br />
            </div>
            <hr />
            <div>
                <div className="f-last">
                    <div className="f-flex">
                    <img className="f-img" src="https://www.licious.in/img/rebranding/copyright2.png" alt="" />
                    <p className="f-2020">2022</p>
                    <h4> Delightful Gourmet Pvt Ltd. All Rights Reserved.</h4>
                    </div>
                    
                    <p>Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are completely natural and healthy. Once you've experienced Licious, you'll never go back to the old way of buying meat and seafood.</p>
                </div>
            </div>

        </div>
        )
}