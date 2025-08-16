import React from "react";
import { testimonials } from "../../constant/landing.text";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center"
    style={{ backgroundColor: 'var(--primary-sky1)' }}>
    <div className="w-[93%] text-center space-y-6 p-10 px-6">
     
      <h2 className="font-bold text-4xl">Testimonials from Our Cuctomers</h2>
      <p className="text-gray-600">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a
        massa elementum id
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 md:px-20 pt-5">
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className="w-full px-6 sm:px-8 py-8 rounded-xl shadow-md bg-white"
    >
      <div className="w-full text-start space-y-3">
        <img
          src={testimonial.stars}
          alt="stars"
          className="h-5 w-auto"
        />
        <h3 className="font-bold text-xl sm:text-2xl">{testimonial.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{testimonial.description}</p>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden border">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
            </div>
          </div>

          <img
            src={testimonial.quotes}
            alt="quote"
            className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
          />
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
  );
};

export default Testimonials;
