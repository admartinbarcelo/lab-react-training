function BoxColor({ r, g, b }) {
  const color = `rgb(${r} ${g} ${b})`;
  const style = {
    backgroundColor: color,
  };
  return (
    <div className="box-color" style={style}>
      {color}
    </div>
  );
}

export default BoxColor;
