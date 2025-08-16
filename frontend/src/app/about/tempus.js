import React from "react";

const tempus = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center  px-4 sm:px-6 md:px-8 lg:px-15 py-6 md:py-10 lg:py-15 space-y-4 md:space-y-6">
      <div className="w-[85%] flex flex-col md:flex-row md:justify-evenly gap-4 md:gap-8">
        <h4 className="font-medium text-2xl sm:text-3xl lg:text-4xl max-w-xl text-center md:text-left">Et nunc ut tempus duis nisl sed massa</h4>
          <p className="max-w-2xl text-sm sm:text-base text-center md:text-left">
          Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit
          congue non vitae odio sit erat in. Felis eu ultrices a sed massa.
          Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse
          morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem
          quis viverra viverra odio mauris nunc.
        </p>
      </div>
      <div className="flex justify-center w-full px-4 sm:px-6">
      <img
      src="/Img.svg"
      alt="image"
      className="w-full md:w-[90%] h-auto object-contain"
      />
      </div>
    </div>
  );
};

export default tempus;
