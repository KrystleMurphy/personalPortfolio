import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const cardData = [
  {
    id: 1,
    title: "Weather App",
    content: "An app that allows you to check the weather in any city",
    imageUrl: "/images/WeatherApp.png",
    icon: "icon1",
    buttonText: "Deployed App",
    buttonUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Planner App",
    content: "Planner app, using local storage",
    imageUrl: "/images/Planner.png",
    icon: "icon2",
    buttonText: "Deployed App",
    buttonUrl: "https://krystlemurphy.github.io/Planner/",
  },
  {
    id: 3,
    title: "Palindrome?",
    content: "Palindrome Checker",
    imageUrl: "/images/palindrome.png",
    icon: "icon3",
    buttonText: "Deployed App",
    buttonUrl: "https://krystlemurphy.github.io/palindrome/",
  },
  {
    id: 4,
    title: "Quiz App",
    content: "JS Quiz App",
    imageUrl: "/images/Quiz.png",
    icon: "icon3",
    buttonText: "Deployed App",
    buttonUrl: "https://krystlemurphy.github.io/multiquiz/",
  },
  {
    id: 5,
    title: "Password Generator",
    content: "Password generator based off user input",
    imageUrl: "/images/PasswordGen.png",
    icon: "icon3",
    buttonText: "Deployed App",
    buttonUrl: "https://krystlemurphy.github.io/PasswordGen/",
  },
];

const Cards = () => {
  return (
    <div className="row">
      {cardData.map((card) => (
        <div key={card.id} className="col-md-4 p-3">
          <div className="card h-100">
          <img
  src={card.imageUrl}
  className="card-img-top"
  alt={card.title}
  style={{
    height: "200px",
    objectFit: "cover",
    borderRadius: "2%",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
  }}
/>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title text-center">{card.title}</h5>
              <p className="card-text text-center">
                {card.content.substring(0, 100)}
              </p>
              <div className="row align-items-center">
                {/* <div className="col-6 text-center">
                  <img src={card.icon} alt="Icon" />
                </div> */}
                <div className="col-12 text-center">
                <a href={card.buttonUrl} className="btn w-100" style={{ backgroundColor: "var(--custom-blue)", color: "black", border: "none", borderRadius: 0 }}>
  {card.buttonText}
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;