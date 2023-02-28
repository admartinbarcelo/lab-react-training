function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card">
      <div className="id-card__picture">
        <img src={picture} alt={picture} />
      </div>
      <div className="id-card__details">
        <p>Name: {firstName} {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}cm</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
