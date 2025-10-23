import "./safariPackBox.css";
// import { Link } from "react-router-dom";

const SafariPackBox = ({ image, title, link }) => {
  return (
    <div className="safari-card-box">
      <a href="#">
        <img src={image} alt={title} className="w-100" />
        <div className="packes_over_content">
          <h6>View</h6>
          <h4>{title}</h4>
        </div>
      </a>
    </div>
  );
};

export default SafariPackBox;