function BoxColor({ r, g, b }) {
  const color = `rgb(${r} ${g} ${b})`;
  const style = {
    backgroundColor: color,
    width: "400px",
    height: "100px",
    margin: "10px",
  };
  return (
    <div className="box-color" style={style}>
      {color}
    </div>
  );
}

export default BoxColor;
