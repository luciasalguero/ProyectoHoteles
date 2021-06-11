export function Country(props) {
    return (
      <select
        value={props.country}
        onChange={props.onChangeCountry}
        className="select-country"
        name="country"
      >
        <option value="">Todos los paises</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
    );
  }