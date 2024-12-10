import React, { useEffect, useRef } from "react";

const RADIUS = 1400; // Radius of the carousel circle
const ITEM_SHIFT = 100; // Shift on hover to pop out items

const testimonials = [
  {
    quote: "This is an amazing service!",
    name: "Alice Johnson",
    profession: "UX Designer",
  },
  {
    quote: "I highly recommend this to everyone.",
    name: "John Doe",
    profession: "Software Engineer",
  },
  {
    quote: "A fantastic experience from start to finish.",
    name: "Mary Smith",
    profession: "Project Manager",
  },
  {
    quote: "Top-notch quality and support.",
    name: "David Lee",
    profession: "Marketing Specialist",
  },
  {
    quote: "Simply outstanding, exceeded my expectations.",
    name: "Emma Brown",
    profession: "Business Analyst",
  },
];

const VerticalCarousel = () => {
  const el = useRef<HTMLDivElement>(null);
  const animId = useRef<number>(0);
  const img = useRef<HTMLDivElement>(null);

  let angleUnit: number,
    rotateAngle: number,
    viewAngle: number,
    mouseX: number,
    mouseY: number;

  useEffect(() => {
    // Reset parameters
    angleUnit = 360 / testimonials.length; // Divide circle evenly
    mouseX = mouseY = 0;
    rotateAngle = 0; // Vertical rotation
    viewAngle = 0; // Horizontal rotation (mouse tilt)

    const items = el.current!.children;

    // Position each item around the circle
    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLDivElement;
      const itemAngle = angleUnit * i; // Position angle
      const itemAngleRad = (itemAngle * Math.PI) / 180; // Convert to radians
      const ypos = Math.sin(itemAngleRad) * RADIUS;
      const zpos = Math.cos(itemAngleRad) * RADIUS;
      const ypos1 = Math.sin(itemAngleRad) * (RADIUS + ITEM_SHIFT);
      const zpos1 = Math.cos(itemAngleRad) * (RADIUS + ITEM_SHIFT);

      // Default positioning
      item.style.transform = `translateY(${ypos}px) translateZ(${zpos}px) rotateX(${-itemAngle}deg)`;

      // Pop out effect on hover
      item.onmouseover = () => {
        item.style.transform = `translateY(${ypos1}px) translateZ(${zpos1}px) rotateX(${-itemAngle}deg)`;
      };
      item.onmouseout = () => {
        item.style.transform = `translateY(${ypos}px) translateZ(${zpos}px) rotateX(${-itemAngle}deg)`;
      };
    }

    const gallery = el.current!;

    // Animation frame for smooth rotation
    const updateFrame = () => {
      rotateAngle += mouseY; // Update vertical rotation
      viewAngle += (mouseX - viewAngle) * 0.05; // Smooth horizontal rotation
      gallery.style.transform = `translateZ(-1500px) rotateY(${-viewAngle}deg) rotateX(${rotateAngle}deg)`;
      animId.current = requestAnimationFrame(updateFrame);
    };

    // Start animation
    updateFrame();

    // Cleanup animation frame on unmount
    return () => {
      cancelAnimationFrame(animId.current);
    };
  }, [testimonials]);

  // Mouse movement handler
  const mouseMoveHandler = (e: MouseEvent) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 10; // Horizontal tilt
    mouseY = (e.clientY / window.innerHeight - 0.5) * 1.25; // Vertical movement
  };

  // Detect mouse movement globally
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  // Display selected testimonial
  const pickTestimonial = (testimonial: {
    quote: string;
    name: string;
    profession: string;
  }) => {
    img.current!.innerHTML = `
      <p class="text-white text-xl font-semibold">"${testimonial.quote}"</p>
      <p class="text-gray-300">- ${testimonial.name}, ${testimonial.profession}</p>
    `;
    img.current!.style.transform = "scale(1, 1)";
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-8">
      {/* Carousel Container */}
      <div
        className="relative w-[300px] h-[600px] flex items-center justify-center"
        ref={el}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            onClick={() => pickTestimonial(testimonial)}
            className="absolute w-[250px] h-[150px] bg-white rounded-lg shadow-xl p-4 cursor-pointer transition-transform duration-300"
            style={{
              transform: `rotateY(${(index * 360) / testimonials.length}deg)`,
            }}
          >
            <p className="text-gray-900 font-semibold">{testimonial.name}</p>
            <p className="text-gray-600 text-sm">{testimonial.profession}</p>
            <p className="text-gray-700 italic">{testimonial.quote}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Display */}
      <div
        ref={img}
        onClick={() => (img.current!.style.transform = "scale(0.0, 0.0)")}
        className="fixed top-1/2 left-1/2 w-[80vw] h-[50vh] bg-gray-800 text-center text-white rounded-lg shadow-xl transform scale-0 transition-transform duration-300 z-50 p-6"
      >
        {/* Dynamic testimonial content */}
      </div>
    </div>
  );
};

export default VerticalCarousel;
