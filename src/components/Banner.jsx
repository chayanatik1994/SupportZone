import React from "react";
import Container from "./Container";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-[#FFFFFF]">
      <Container>
        <div className="flex-1 ml-4 md:ml-6 rounded-md text-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center py-4">
          <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md p-8 flex flex-col items-center justify-center w-full max-w-[680px] h-[250px] mx-auto">
            <h2 className="text-2xl font-semibold mb-2">In-Progress</h2>
            <p className="text-5xl font-bold">{inProgressCount}</p>
          </div>

          <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-md p-8 flex flex-col items-center justify-center w-full max-w-[680px] h-[250px] mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Resolved</h2>
            <p className="text-5xl font-bold">{resolvedCount}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
