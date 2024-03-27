import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon="fa-fan" className="loading__icon" />
    </div>
  );
};

export default Loading;
