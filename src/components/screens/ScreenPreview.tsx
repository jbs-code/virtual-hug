import { useNavigate, useParams } from "react-router-dom";

import Footer from "../Footer";
import Card, { cardData } from "../Card";

function ScreenCard() {
  const params = useParams<cardData>();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };
  return (
    <div className="container screen-card">
      <button onClick={onClick} style={{ width: "250px" }}>
        Regresar
      </button>
      <Card
        from={atob(params.from as string)}
        name={atob(params.name as string)}
        text={atob(params.text as string)}
      />
      <Footer />
    </div>
  );
}

export default ScreenCard;
