import { useEffect, useState } from "react";
import { LeftIcon, RightIcon } from "./icons";


const Slideshow = () => {

  const images = [
    { id: 0, path: '/assets/Slideshow/slideshow1.jpg', alt: 'Close up of a group of rowers rowing in Lake Lure, North Carolina.' },
    { id: 1, path: '/assets/Slideshow/slideshow2.JPG', alt: 'Two boats resting on the water of Port Jefferson during a practice.' },
    { id: 2, path: '/assets/Slideshow/slideshow3.JPG', alt: 'Women\'s Varsity 4 preparing to launch with their coaches on the dock.' },
    { id: 3, path: '/assets/Slideshow/slideshow4.JPG', alt: 'Men\'s Varsity 4 on the water after a race.' },
    { id: 4, path: '/assets/Slideshow/slideshow5.jpeg', alt: 'Co-ed Varsity 8 boat on the water at Spring Break.' },
    { id: 5, path: '/assets/Slideshow/slideshow6.jpeg', alt: 'Shot of 4 boats of rowers practicing racing on the water.' },

  ];

  // Describes which specific slide is visible.
  const [active, setActive] = useState(0);

  // Increments slideshow to the next slide.
  const nextSlide = () => {
    console.log(active);
    active + 1 === images.length ? setActive(0) : setActive(active + 1);
  }

  // Decrements slideshow to previous slide.
  const prevSlide = () => {
    active === 0 ? setActive(images.length - 1) : setActive(active - 1);
  }

  const setSlide = (index: number) => {
    setActive(index);
  }

  const SlideshowButtons = () => {
    return (
      <>
        <button onClick={() => { prevSlide(); clearTimeout(timeout); }} className="text-white p-3 my-auto rounded-full hover:text-[#74b5ff] hover:bg-[#0000002d] z-40"> <LeftIcon /> </button>
        <button onClick={() => { nextSlide(); clearTimeout(timeout); }} className="text-white p-3 my-auto rounded-full hover:text-[#74b5ff] hover:bg-[#0000002d] z-40"> <RightIcon /> </button>
      </>
    )

  }

  const SlideshowDots = () => {
    return (
      <div className="flex flex-row justify-between gap-3 z-50">
        {images.map(image => (
          <div key={image.id} onClick={() => setSlide(image.id)} className={image.id === active
            ? "rounded-full w-[10px] h-[10px] cursor-pointer bg-white z-50 transition-colors ease-in-out delay-0"
            : "rounded-full w-[10px] h-[10px] cursor-pointer bg-[#dc5252] z-50 transition-colors ease-in-out delay-150"
          } />
        ))}
      </div>
    );
  }

  const imageCSS = "absolute h-full aspect-[3/2] object-cover transition-opacity ease-in-out rounded-xl drop-shadow-element z-10 "


  /* Timer to automatically increment slides. */
  let timeout: NodeJS.Timeout;
  useEffect(() => {
    // Proceed to next slide every 3.5 seconds.
    timeout = setTimeout(() => nextSlide(), 3500);

    // Cleanup function so multiple timeouts do not appear when the state changes:
    return () => { clearTimeout(timeout); }
  }, [active])

  return (
    <div className="
        relative flex justify-center self-center  z-50 fade-in-element
        w-[140%] max-w-[90vw] min-h-[55vw] xl:flex-1 xl:h-[65vh] xl:max-h-[35vw] xl:min-h-[25vw] ">
      <div className="absolute flex flex-row justify-between aspect-[3/2] h-full max-w-full">
        <SlideshowButtons />
      </div>
      <div className="absolute bottom-3">
        <SlideshowDots />
      </div>

      {images.map(image => (
        <img
          key={image.id}
          src={image.path}
          alt={image.alt}
          className={image.id === active
            ? imageCSS + "opacity-100 delay-0 z-30"
            : imageCSS + "opacity-0 delay-150"
          }
        />
      ))}

    </div>
  );

}

export default Slideshow;
