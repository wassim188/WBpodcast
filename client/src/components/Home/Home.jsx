import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import './Home.css'

function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="min-h-[100px] flex justify-evenly items-center bg-orange-100 home-media ">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-[30%]  shadow-2xl  mt-6  "
      >
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2xl"
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2xl"
            src="https://images.unsplash.com/photo-1581547848331-0aba76655842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2xl"
            src="https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2xl"
            src="https://images.unsplash.com/photo-1593697972496-8f31cba830f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2xl"
            src="https://images.unsplash.com/photo-1581092800573-6afa755dcdc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2xl"
            src="https://i.pinimg.com/564x/bb/67/ee/bb67ee0cd7061fbafb4d8fb6baf381f5.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <div className="font-Shantell ">
        <h1>
          <span className="text-orange-800  font-bold text-6xl">Welcome</span>

          <span className="font-bold text-6xl">to</span>

          <span className="text-orange-400  font-bold text-6xl">WbCasts</span>
        </h1>
        <br />
        <h3>If You Need To Listen Some Podcasts</h3>
        <br />
        <h3>Clique For Sign Up .</h3>
        <br />
        <button
          className="text-4xl border-2 text-white px-4 py-2 bg-orange-500 hover:bg-orange-400 rounded-3xl font-medium drop-shadow-xl "
          style={{ margin: "auto" }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Home;
