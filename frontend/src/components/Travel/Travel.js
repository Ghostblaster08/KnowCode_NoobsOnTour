import React, { useState, useEffect } from "react";

const Travel = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to render forms dynamically based on the selected travel type
  const renderForm = () => {
    switch (selectedOption) {
      case "vehicles":
        return <VehicleForm />;
      case "flights":
        return <FlightForm />;
      case "shipping":
        return <ShippingForm />;
      case "electricity":
        return <ElectricityForm />;
      default:
        return <p>Please select a category to calculate your carbon footprint.</p>;
    }
  };

  return (
    <div>
      <h1>Travel - Carbon Footprint Calculator</h1>
      <p>Choose a category to calculate the carbon emissions of your travel:</p>
      <div>
        <button onClick={() => setSelectedOption("vehicles")}>Vehicles</button>
        <button onClick={() => setSelectedOption("flights")}>Flights</button>
        <button onClick={() => setSelectedOption("shipping")}>Shipping</button>
        <button onClick={() => setSelectedOption("electricity")}>Electricity</button>
      </div>
      <div style={{ marginTop: "20px" }}>{renderForm()}</div>
    </div>
  );
};

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    fuelType: "",
    distance: "",
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/dashboard/travel/vehicle-footprint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch emissions data");
      }

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setError(error.message);
      alert("Failed to calculate emissions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Calculate Vehicle Emissions</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Vehicle Type:
            <input
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Fuel Type:
            <input
              type="text"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Distance (in km):
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {response && (
        <div>
          <h3>Emission Results</h3>
          <p>{JSON.stringify(response)}</p>
        </div>
      )}
    </div>
  );
};

const FlightForm = () => (
  <div>
    <h2>Calculate Flight Emissions</h2>
    <p>Provide details about your flight journey.</p>
    {/* Add form fields here */}
  </div>
);

const ShippingForm = () => (
  <div>
    <h2>Calculate Shipping Emissions</h2>
    <p>Enter details about your shipping items and distance.</p>
    {/* Add form fields here */}
  </div>
);

const ElectricityForm = () => (
  <div>
    <h2>Calculate Electricity Emissions</h2>
    <p>Provide details about your electricity usage.</p>
    {/* Add form fields here */}
  </div>
);

export default Travel;
