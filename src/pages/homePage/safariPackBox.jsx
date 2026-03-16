import { Link } from "react-router-dom";
import "./safariPackBox.css";
// import { Link } from "react-router-dom";

const SafariPackBox = ({ image, title,price,link }) => {
  return (
    <div className="safari-card-box">
      <Link to={link}>
        <img
          src={image}
          alt={title}
          className=" w-full object-cover object-center h-[550px]"
        />
        <div className="packes_over_content">
          <h6>View</h6>
          <h4 className="">{title}</h4>
          <p className="oric-hmo-njnj">From: {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default SafariPackBox;
