import "./styles.css";
import "./data.js";
import moment from "moment";

import { hotelsData } from "./data.js";
import { Header } from "./components/Header/Header.js";
import { Filters } from "./components/Filters/Filter.js";
import { useState, useEffect } from "react";
import { Hotels } from "./components/Hotels/Hotels.js";

export default function App() {
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);
  const [dateOut, setDateOut] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [hotelSize, setHotelSize] = useState("");

  const changeDateInHandler = (e) => {
    setDateIn(e.target.value);
  };

  const changeDateOutHandler = (e) => {
    setDateOut(e.target.value);
  };

  const changeCountryHandler = (e) => {
    setCountry(e.target.value);
  };

  const changePriceHandler = (e) => {
    setPrice(e.target.value);
  };

  const changeHotelSizeHandler = (e) => {
    setHotelSize(e.target.value);
  };

  function applyAllFilters() {
    let copyHotelsData = [...hotelsData];

    if (country !== "") {
      copyHotelsData = copyHotelsData.filter(
        (hotel) => hotel.country === country
      );
    }

    if (price !== "") {
      copyHotelsData = copyHotelsData.filter(
        (hotel) => hotel.price === parseInt(price, 0)
      );
    }

    if (hotelSize !== "") {
      copyHotelsData = copyHotelsData.filter((hotel) => {
        let currentHotelSize =
          hotel.rooms > 0 && hotel.rooms <= 10
            ? "pequeños"
            : hotel.rooms > 10 && hotel.rooms <= 20
            ? "medianos"
            : "grandes";
        return currentHotelSize === hotelSize;
      });
    }

    if (dateIn !== "") {
      if (
        moment(dateIn).format("YYYY-MM-DD") <
        moment(new Date()).format("YYYY-MM-DD")
      ) {
        alert("Por favor, elija una fecha actual o posterior al día de hoy");
      } else if (dateOut !== 0) {
        if (
          moment(dateIn).format("YYYY-MM-DD") >
          moment(dateOut).format("YYYY-MM-DD")
        ) {
          alert(
            "Por favor, elija una fecha de salida posterior a la de entrada"
          );

          setFilteredHotels(copyHotelsData);
        }
      }
    }

    if (dateIn !== "" && dateOut !== "") {
      const selectedFrom = moment(dateIn).format("YYYY-MM-DD");
      const selectedTo = moment(dateOut).format("YYYY-MM-DD");
      copyHotelsData = copyHotelsData.filter((hotel) => {
        const availableFrom = moment(hotel.availabilityFrom).format(
          "YYYY-MM-DD"
        );
        const availableTo = moment(hotel.availabilityTo).format("YYYY-MM-DD");
        const canFrom = selectedFrom >= availableFrom;
        const canTo = selectedTo <= availableTo;
        return canFrom && canTo;
      });
    }

    setFilteredHotels(copyHotelsData);
  }

  useEffect(applyAllFilters, [dateIn, dateOut, country, price, hotelSize]);

  const handleReset = () => {
    setDateIn("");
    setDateOut("");
    setCountry("");
    setPrice("");
    setHotelSize("");
  };

  return (
    <div className="App">
      <Header
        dateIn={dateIn}
        dateOut={dateOut}
        country={country}
        price={price}
        hotelSize={hotelSize}
      />
      <Filters
        dateIn={dateIn}
        onChangeDateIn={changeDateInHandler}
        dateOut={dateOut}
        onChangeDateOut={changeDateOutHandler}
        country={country}
        onChangeCountry={changeCountryHandler}
        price={price}
        onChangePrice={changePriceHandler}
        hotelSize={hotelSize}
        onChangeHotelSize={changeHotelSizeHandler}
        resetHandler={handleReset}
      />
      <Hotels filteredHotels={filteredHotels} />
    </div>
  );
}

