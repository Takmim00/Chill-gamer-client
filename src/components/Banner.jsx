import { MdDateRange } from "react-icons/md";
const Banner = () => {
  return (
    <div className="carousel w-full h-[70vh]">
      <div id="slide1" className="carousel-item relative w-full group overflow-hidden">
        <img
          src="https://i.ibb.co.com/mXwLvy3/blog-slider-img-1.jpg"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 text-white flex flex-col justify-center items-center  ">
              <span className="text-red-500 font-bold uppercase text-sm">
                Legendary
              </span>
              <h2 className="text-2xl font-bold mb-2">A Mage’s Staff</h2>
              <span className="text-center flex items-center"><MdDateRange className="text-white"/> 19th of March 2018</span>
              <p className="text-sm mb-4 w-[50%] mx-auto text-center">
              PUBG  is a popular online multiplayer battle royale game where players fight to survive in an ever-shrinking play zone. The game features realistic graphics, intense combat, and strategic gameplay. Players can choose from various weapons, gear, and vehicles to enhance their chances of survival. 
              </p>
            </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full group">
        <img
          src="https://i.ibb.co.com/VjXG3fC/blog-slider-img-2.jpg"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 text-white flex flex-col justify-center items-center  ">
              <span className="text-red-500 font-bold uppercase text-sm">
                Legendary
              </span>
              <h2 className="text-2xl font-bold mb-2">The Purification</h2>
              <span className="text-center flex items-center"><MdDateRange className="text-white"/> 19th of March 2018</span>
              <p className="text-sm mb-4 w-[50%] mx-auto text-center">
              PUBG  is a popular online multiplayer battle royale game where players fight to survive in an ever-shrinking play zone. The game features realistic graphics, intense combat, and strategic gameplay. Players can choose from various weapons, gear, and vehicles to enhance their chances of survival. 
              </p>
            </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full group ">
        <img
          src="https://i.ibb.co.com/C9ZJs8Q/blog-slider-img-3.jpg"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 text-white flex flex-col justify-center items-center  ">
              <span className="text-red-500 font-bold uppercase text-sm">
                Legendary
              </span>
              <h2 className="text-2xl font-bold mb-2">PUBG MADNESS</h2>
              <span className="text-center flex items-center"><MdDateRange className="text-white"/> 19th of March 2018</span>
              <p className="text-sm mb-4 w-[50%] mx-auto text-center">
              PUBG  is a popular online multiplayer battle royale game where players fight to survive in an ever-shrinking play zone. The game features realistic graphics, intense combat, and strategic gameplay. Players can choose from various weapons, gear, and vehicles to enhance their chances of survival. 
              </p>
            </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
