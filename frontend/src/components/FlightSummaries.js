import React from "react";
import PropTypes from "prop-types";
import FlightSummary from "./FlightSummary";
import "../styles/flightsummaries.css";
import FlightInspDatesDep from "./FlightInspDatesDep";

const FlightSummaries = ({ data, onFlightSelect, photos, inspOriginData }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const dataAndPhotos = data.map((flight) => {
    const randomPhotoIndex = getRandomInt(photos.length);
    return {
      ...flight,
      photo: photos[randomPhotoIndex].src.medium,
    };
  });

  return (
    <>
      <div className="flight-details-card">
        <FlightInspDatesDep inspOriginData={inspOriginData} />
      </div>
      <div className="flight-summaries">
        {dataAndPhotos.map((flight) => (
          <FlightSummary
            key={flight.price}
            destination={flight.destination}
            price={flight.price}
            onSelect={onFlightSelect}
            photo={flight.photo}
          />
        ))}
      </div>
    </>
  );
};

FlightSummaries.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      destination: PropTypes.string,
      price: PropTypes.shape({
        total: PropTypes.number,
      }),
    })
  ).isRequired,
  inspOriginData: PropTypes.string.isRequired,
  onFlightSelect: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.shape({
        medium: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default FlightSummaries;
