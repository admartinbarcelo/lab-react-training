import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="DriverCard">
      <div className="DriverCard-img">
        <img src={img} alt={name} />
      </div>
      <div className="DriverCard-info">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
export default DriverCard;
