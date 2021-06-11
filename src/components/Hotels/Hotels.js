import "./styles.css";
import { Hotel } from "../Hotel/Hotel.js";

export function Hotels(props) {
  return props.filteredHotels.length > 0 ? (
    <div className="container-cards">
      {props.filteredHotels.map((hotel) => (
        <Hotel
          key={hotel.slug}
          name={hotel.name}
          photo={hotel.photo}
          description={hotel.description}
          city={hotel.city}
          country={hotel.country}
          rooms={`${hotel.rooms} Habitaciones`}
          price={hotel.price}
        />
      ))}
    </div>
  ) : (
    <div className="hotel-alert">
      <div className="notification">
        Lo siento...No hay hoteles disponibles con estas características. ¡Seguí
        buscando!
      </div>
    </div>
  );
}