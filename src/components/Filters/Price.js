export function Price(props) {
    return (
      <select
        value={props.price}
        onChange={props.onChangePrice}
        className="select-price"
        name="price"
      >
        <option value="">Todos los precios</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>
    );
  }