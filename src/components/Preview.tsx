import Card, { cardData } from "./Card"

function Preview(props: cardData) {
  return (
    <div className='preview'>
        <Card {...props}/>
    </div>
  )
}

export default Preview