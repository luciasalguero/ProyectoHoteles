import "./styles.css";
import { Country } from "./Country.js";
import { Price } from "./Price.js";
import { HotelSize } from "./HotelSize.js";

export function Filters(props) {
  return (
    <div className="filtros">
      <input
        value={props.dateIn}
        onChange={props.onChangeDateIn}
        className="input"
        type="date"
      ></input>

      <input
        value={props.dateOut}
        onChange={props.onChangeDateOut}
        className="input"
        type="date"
      ></input>

      <Country
        country={props.country}
        onChangeCountry={props.onChangeCountry}
      />
      <Price price={props.price} onChangePrice={props.onChangePrice} />
      <HotelSize
        hotelSize={props.hotelSize}
        onChangeHotelSize={props.onChangeHotelSize}
      />
      <button className="reset-btn" onClick={props.resetHandler}>
        Eliminar filtros
      </button>
    </div>
  );
}