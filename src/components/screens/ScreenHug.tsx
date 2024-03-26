import { useNavigate, useParams } from "react-router-dom";

import Footer from "../Footer";
import Card, { cardData } from "../Card";

function ScreenHug() {
  const params = useParams<cardData>();
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="container screen-card">
      <Card
        from={atob(params.from as string)}
        name={atob(params.name as string)}
        text={atob(params.text as string)}
      />
      <button onClick={onClick} style={{ width: "250px" }}>
        ¡Es tu turno, envía un abrazo virtual!
      </button>
      <Footer />
    </div>
  );
}

export default ScreenHug;
