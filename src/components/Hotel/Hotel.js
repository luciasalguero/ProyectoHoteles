import "./styles.css";

export function Hotel(props) {
  const { city, country, description, name, photo, price, rooms } = props;

  const priceSymbols = (price) => {
    return (
      <div className="Hotel-Price-Icon">
        <span className={price > 0 ? "black" : "grey"}>
          <i className="fa fa-1x fa-usd solid"></i>
        </span>
        <span className={price > 1 ? "black" : "grey"}>
          <i className="fa fa-1x fa-usd solid"></i>
        </span>
        <span className={price > 2 ? "black" : "grey"}>
          <i className="fa fa-1x fa-usd solid"></i>
        </span>
        <span className={price > 3 ? "black" : "grey"}>
          <i className="fa fa-1x fa-usd solid"></i>
        </span>
      </div>
    );
  };
  return (
    <div className="principal">
      <div className="card-container">
        <div className="image">
          <img src={photo} alt="Imagen Hotel" />
        </div>
        <h2 className="title">{name}</h2>
        <p className="description">{description}</p>
        <div className="iconos">
          <div className="box-icon">
            <img
              className="svg-icon"
              src="./svg/location.svg"
              height="20"
              alt="location"
            />
          </div>
          <div className="location-text">
            {city},{country}
          </div>
        </div>
        <div className="iconos">
          <div className="box-icon">
            <img
              className="svg-icon"
              src="./svg/bed.svg"
              height="15"
              alt="bed"
            />
          </div>
          <div className="habitaciones">{rooms}</div>
        </div>
        <div className="precio">{priceSymbols(price)}</div>
        <button className="button">Reservar</button>
      </div>
    </div>
  );
}