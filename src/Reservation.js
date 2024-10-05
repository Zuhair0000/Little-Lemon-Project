import React, { useState, useReducer } from "react";

// Reducer function for available times
function availableTimesReducer(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload;
    default:
      return state;
  }
}

function Reservation() {
  // Array of images
  const images = [
    "../images/tomatos.jpg",
    "../images/pasta.jpg",
    "../images/grilled-fish.jpg",
    "../images/salad.jpg",
    "../images/displayImg.jpg",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const initialTimes = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
  ];

  const dinerNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [seatingOption, setSeatingOption] = useState("");
  const [selectedDay, setSelectedDay] = useState("Select a Day");
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initialTimes
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  function handleSeatingOption(e) {
    setSeatingOption(e.target.value);
  }

  const handleDayChange = (e) => {
    const selectedIndex = e.target.value;
    const selectedDay = days[selectedIndex];
    setSelectedDay(selectedDay);

    // Based on the selected day, set different available times
    if (selectedDay === "Sunday") {
      dispatch({
        type: "SET_TIMES",
        payload: ["10:00 AM", "10:30 AM", "11:00 AM"],
      });
    } else if (selectedDay === "Monday") {
      dispatch({
        type: "SET_TIMES",
        payload: ["09:00 AM", "09:30 AM", "10:00 AM"],
      });
    } else {
      dispatch({ type: "SET_TIMES", payload: initialTimes });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  function handleClick(e) {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      setButtonText("Submitted");
      setShowNewComponent(true);
      // Clear form data after submission (optional)
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      setErrors({}); // Clear errors
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function Message() {
    return (
      <div id="message-div">
        <p>Thanks for reserving, Looking forward to seeing You!</p>
      </div>
    );
  }

  return (
    <>
      <section id="menuSection">
        <div id="left-side">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Discover the flavors of our hand-crafted dishes, made with the
            freshest ingredients!
            <br />
            Explore our diverse menu for an unforgettable dining experience.
          </p>
        </div>
        <div id="right-side">
          <img
            src={images[currentIndex]}
            alt="carousel"
            style={{ width: "500px", height: "300px" }}
          />
          <div>
            <button className="carousel-button" onClick={goToPrev}>
              Previous
            </button>
            <button className="carousel-button" onClick={goToNext}>
              Next
            </button>
          </div>
        </div>
      </section>

      <section id="menuSection2">
        <div id="day-selection">
          <label htmlFor="day-form" id="select-label">
            Choose Day
          </label>
          <select
            id="day-form"
            className="form-select"
            onChange={handleDayChange}
          >
            <option>Select a Day</option>
            {days.map((day, index) => (
              <option key={index} value={index}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div id="time-selection">
          <label htmlFor="time-form" id="select-label">
            Choose Time
          </label>
          <select id="time-form" className="form-select">
            <option>Select Time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div id="diners-selection">
          <label htmlFor="diners-form" id="select-label">
            Choose Number of Diners
          </label>
          <select id="diners-form" className="form-select">
            <option>Select Number</option>
            {dinerNums.map((diner, index) => (
              <option key={index} value={index}>
                {diner}
              </option>
            ))}
          </select>
        </div>
      </section>

      <form id="seating-option">
        <label>Select Seating Option:</label>
        <label>
          <input
            type="radio"
            value="Indoor"
            checked={seatingOption === "Indoor"}
            onChange={handleSeatingOption}
          />
          Indoor
        </label>
        <label>
          <input
            type="radio"
            value="Outdoor"
            checked={seatingOption === "Outdoor"}
            onChange={handleSeatingOption}
          />
          Outdoor
        </label>
      </form>

      <div>
        <div id="registeration-div">
          <div id="inputs">
            <label htmlFor="name-input">Name</label>
            <input
              type="text"
              id="name-input"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div id="inputs">
            <label htmlFor="email-input">Email</label>
            <input
              type="email"
              id="email-input"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div id="inputs">
            <label htmlFor="number-input">Phone Number</label>
            <input
              type="tel"
              id="number-input"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div id="inputs">
            <label htmlFor="password-input">Password</label>
            <input
              type="password"
              id="password-input"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
      </div>

      <div id="sub-btn">
        <button id="submit-btn" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
      {showNewComponent && <Message />}
    </>
  );
}
export default Reservation;
