import "./styles.css";

export function Header(props) {
  const price = (price) => {
    switch (price) {
      case "1":
        return "de precio muy económico ";
      case "2":
        return "de precio estándar ";
      case "3":
        return "de precio elevado ";
      case "4":
        return "de precio muy elevado ";
      default:
        return "";
    }
  };

  const hotelLocation = props.country;
  const hotelPrice = props.price;
  const fromDate = props.dateIn;
  const toDate = props.dateOut;

  return (
    <div className="header">
      <h1 className="principal-title">Hoteles</h1>
      <h3 className="subtitle">
        Busqueda de hoteles {props.hotelSize}{" "}
        {hotelLocation && <span>en {props.country} </span>}
        {hotelPrice && <span>{price(props.price)}</span>}
        {fromDate && <span>desde el {props.dateIn}</span>}
        {toDate && <span> hasta el {props.dateOut}</span>}
      </h3>
    </div>
  );
}