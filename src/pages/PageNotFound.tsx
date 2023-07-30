import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Oops! The page you've requested doesn't exists.</h3>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default PageNotFound;
