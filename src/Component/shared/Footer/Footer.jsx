import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
         <footer className="footer p-10  bg-slate-600 mt-14 text-white ">
                <nav>
                  <h6 className="footer-title text-xl">Services</h6> 
                  <Link className="link link-hover text-sm">Branding</Link>
                  <Link className="link link-hover text-sm">Design</Link>
                  <Link className="link link-hover text-sm">Marketing</Link>
                  <Link className="link link-hover text-sm">Advertisement</Link>
                </nav> 
                <nav>
                  <h6 className="footer-title text-xl">Company</h6> 
                  <Link className="link link-hover text-sm">About us</Link>
                  <Link className="link link-hover text-sm">Contact</Link>
                  <Link className="link link-hover text-sm">Press kit</Link>
                </nav> 
                <nav>
                  <h6 className="footer-title text-xl">Legal</h6> 
                  <Link className="link link-hover text-sm">Terms of use</Link>
                  <Link className="link link-hover text-sm">Privacy policy</Link>
                  <Link className="link link-hover text-sm">Cookie policy</Link>
                </nav> 
            <form>
               <h6 className="footer-title text-xl">Newsletter</h6> 
               <fieldset className="form-control w-80">
                 <label className="label">
                   <span className="label-text">Enter your email address</span>
                 </label> 
                 <div className="join">
                   <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
                   <button className="btn btn-primary join-item">Subscribe</button>
                 </div>
               </fieldset>
             </form>
           </footer>
        </>
    );
};

export default Footer;