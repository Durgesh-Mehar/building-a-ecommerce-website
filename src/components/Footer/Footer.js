import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
        
      <div className='flex shopping-cart'  >
      <h2 className="heading" >The Generics</h2>
        <div className="footer">
        <a href="https://www.facebook.com/" >
          𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤
        </a>
        <a href="https://www.youtube.com/">𝐲𝐨𝐮𝐭𝐮𝐛𝐞</a>
        <a href="https://twitter.com/">𝙩𝙬𝙞𝙩𝙩𝙚𝙧</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;