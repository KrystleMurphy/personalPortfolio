import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const cardData = [
  {
    id: 1,
    title: "CurrenCity",
    content: "A travel app, displaying a range of information from a searched city name",
    imageUrl: "/images/CurrenCity.png",
    icon: "icon1",
    buttonText: "Deployed App",
    buttonUrl: "https://caseygirlyn.github.io/CurrenCity/",
  },
  {
    id: 2,
    title: "Hello Curio",
    content: "Quirky translation app with quiz",
    imageUrl: "/images/HelloCurio.png",
    icon: "icon2",
    buttonText: "Deployed App",
    buttonUrl: "https://hellocurio.netlify.app/",
  },
];

const MainCards = () => {
  return (
<div className="row">
      {cardData.map((card) => (
        <div key={card.id} className="col-md-6">
          <div className="card border-0 h-100">
            <img
              src={card.imageUrl}
              className="card-img-top"
              alt={card.title}
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "1%",
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
                <div className="col-12 text-center">
                <a href={card.buttonUrl} className="w-100 text-decoration-none text-black p-3 rounded">
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

export default MainCards;