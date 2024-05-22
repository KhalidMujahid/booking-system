import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        Powered by HiTech <br />
        <BiCopyright /> {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
