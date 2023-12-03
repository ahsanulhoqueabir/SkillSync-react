import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
            <h1 className="text-2xl font-bold">Skill Sync</h1>
            <p className="text-gray-400">Find your dream job</p>
            
        </div>
        <nav>
          <header className="footer-title">Company</header>
          <Link className="link link-hover">About Us</Link>
          <Link className="link link-hover">Work</Link>
          <Link className="link link-hover">Latest News</Link>
          <Link className="link link-hover">Careers</Link>
        </nav>
        <nav>
          <header className="footer-title">Product</header>
          <Link className="link link-hover">Prototype</Link>
          <Link className="link link-hover">Plans & Pricing</Link>
          <Link className="link link-hover">Customers</Link>
          <Link className="link link-hover">Integrations</Link>
        </nav>
        <nav>
          <header className="footer-title">Support</header>
          <Link className="link link-hover">Help Desk</Link>
          <Link className="link link-hover">Sales</Link>
          <Link className="link link-hover">Become a Partner</Link>
          <Link className="link link-hover">Developers</Link>
        </nav>
        <nav>
          <header className="footer-title">Contact</header>
          <p>Uttara-11,Dhaka,Bangladesh</p>
          <p>+880 1875507852</p>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>
            Skill Sync Ltd. <br />
            Providing reliable service since 2017
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
