import fulanos from '../assets/fulanos.svg';

export type cardData = {
  from: string;
  name: string;
  text: string;
}

function Card({from, name, text}: cardData) {
  return (
    <div className="card">
      <h1 style={{marginBottom: '2rem', fontSize: '2.5rem'}}>Recibiste un abrazo virtual</h1>
      <div className='card-image'>
        <img src={fulanos} alt="muñequitos" />
      </div>
      <h2 style={{marginBottom: '1rem'}}>De parte de {from}</h2>
      <h2>para {name}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;
