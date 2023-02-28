import Visa from '../assets/images/visa.png'
import Master from '../assets/images/master-card.svg'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor,color,})  {
    const style = {
        backgroundColor: bgColor,
        color: color
    }
    const cardType = type === "Visa" ? Visa : Master;
    const cardNumber = number.slice(-4);
  return (
    <div className="credit-card" style = {style}>
      <div className="card-logo">
        <img src={cardType} alt={type} />
      </div>
      <div className="card-number">
        **** **** ****{cardNumber}
      </div>
      <div className="card-info">
        <div className="card-expires">
          <span>
            Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
          </span>
        </div>
        <div className="card-bank">
          <span>{bank}</span>
        </div>
        <div className="card-owner">
          <span>{owner}</span>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
