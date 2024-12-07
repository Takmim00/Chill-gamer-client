import { useState } from "react";
import { MdDateRange } from "react-icons/md";
const Banner = () => {
  const images = [
    {
      src: "https://i.ibb.co/mXwLvy3/blog-slider-img-1.jpg",
      title: "Mage Staff",
      date: "1 of October 2013",
      description:
        "A Mage’s Staff is a captivating RPG where players embark on an epic quest to master ancient magic. You wield a mystical staff, the source of your power, battling dark forces threatening the realm. The game blends spellcasting, exploration, and strategic combat, allowing you to unlock new abilities and customize your playstyle.",
    },
    {
      src: "https://i.ibb.co/VjXG3fC/blog-slider-img-2.jpg",
      title: "The Purification",
      date: "13th of January 2012",
      description:
        "The Purification is a thrilling action-adventure game set in a dystopian future where humanity battles to reclaim the Earth from a spreading corruption. Players take on the role of a Guardian, armed with advanced weapons and abilities, tasked with purging the land of dark forces and restoring balance.",
    },
    {
      src: "https://i.ibb.co/C9ZJs8Q/blog-slider-img-3.jpg",
      title: "PUBG MADNESS",
      date: "19th of March 2018",
      description:
        "PUBG  is a popular online multiplayer battle royale game where players fight to survive in an ever-shrinking play zone. The game features realistic graphics, intense combat, and strategic gameplay. Players can choose from various weapons, gear, and vehicles to enhance their chances of survival.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="carousel w-full h-[70vh] mt-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full  group overflow-hidden ${
            currentIndex === index ? "block" : "hidden"
          }`}
        >
          <img
            src={image.src}
            className="w-full h-full object-cover"
            alt={image.title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-white flex flex-col justify-center items-center">
              <span className="text-red-500 font-bold uppercase text-sm">
                Legendary
              </span>
              <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
              <span className="text-center flex items-center">
                <MdDateRange className="text-white" /> {image.date}
              </span>
              <p className="text-sm mb-4 w-[50%] mx-auto text-center">
                {image.description}
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              onClick={handlePrevClick}
              className="btn btn-circle"
              role="button"
              aria-label="Previous"
            >
              ❮
            </a>
            <a
              onClick={handleNextClick}
              className="btn btn-circle"
              role="button"
              aria-label="Next"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
