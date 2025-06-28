import logo from "../assets/logo/logo.png"
import payment from "../assets/images/payment.png"
const Footer = () => {
  return (
    <>
      <footer className="footer bg-gray-50/20 sm:footer-horizontal lg:px-14 mt-10 py-10">
        <aside>
          <img src={logo} alt="" />
          <p>
            Blue Berry Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <img className="cursor-pointer" src={payment} alt="" />
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
