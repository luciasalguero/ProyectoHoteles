export function HotelSize(props) {
    return (
      <select
        value={props.rooms}
        onChange={props.onChangeHotelSize}
        className="select-room"
      >
        <option value="">Cualquier Tamaño</option>
        <option value="pequeños">Pequeños</option>
        <option value="medianos">Medianos</option>
        <option value="grandes">Grandes</option>
      </select>
    );
  }