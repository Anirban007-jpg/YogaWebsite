import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div>
        <p style={{fontWeight: "bold"}}>
          I’m Susmita Banerjee! I am a proud mum of one boy and i live in West Bengal,
          India. I am a yoga instructor and also provide training with Shailee in City Center as a teacher. Doing yoga and
          meditation keeps me calm and helps me cope with daily family life.
        </p>
      </div>
      <div className="social">
        <a
          href="https://instagram.com/debbiedannyoga"
          className="social-icons instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/debbiedannyoga"
          className="social-icons facebook"
        >
          <FaFacebookSquare />
        </a>
        <div className="logo">
          <Image
            src="/images/logo-nameless-small.png"
            alt="logo"
            width={1420}
            height={1000}
          />
        </div>
      </div>
      <div className="footer-nav" >
        <Link href="/">
          <a style={{fontWeight: "bold"}}>Home</a>
        </Link>
        <Link href="/blog">
          <a style={{fontWeight: "bold"}}>Blog</a>
        </Link>
        <Link href="/contact">
          <a style={{fontWeight: "bold"}}>Contact</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
