import React from "react";

const Plane = () => {
  return (
    <div className="w-screen h-screen -z-10 fixed top-0 left-0 flex justify-center items-center bg-gray-300 ">
      {/* X AXIS */}

      <div className="w-full h-[2px] flex justify-between items-center gap-[calc(50%/6)] bg-black absolute inset-0 m-auto ">
        <span>-30</span>
        <span>-25</span>
        <span>-20</span>
        <span>-15</span>
        <span>-10</span>
        <span>-5</span>

        <span>5</span>
        <span>10</span>
        <span>15</span>
        <span>20</span>
        <span>25</span>
        <span>30</span>
      </div>

      {/* Y AXIS */}
      <div className="w-[2px] h-full flex flex-col justify-between items-center bg-black absolute inset-0 m-auto  ">
        <span>30</span>
        <span>25</span>
        <span>20</span>
        <span>15</span>
        <span>10</span>
        <span>5</span>

        <span>-5</span>
        <span>-10</span>
        <span>-15</span>
        <span>-20</span>
        <span>-25</span>
        <span>-30</span>
      </div>
    </div>
  );
};

export default Plane;
