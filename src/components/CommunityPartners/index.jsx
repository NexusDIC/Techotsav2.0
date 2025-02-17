/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import COE_ARVR from "../../assets/images/com_partners/coe-arvr.png";
import COE_DIGITECH from "../../assets/images/com_partners/coe-digitech.png";
import COE_MLR from "../../assets/images/com_partners/coe-mlr.png";
import COE_CLOUDTECH from "../../assets/images/com_partners/coe-cloudtech.png";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export default function CommunityPartners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()], {
    pauseOnHover: false,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [yes] = useState(true);
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    });
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const communityPartners = [
    {
      image: COE_ARVR,
      alt: "COE_ARVR",
      bg: "b",
    },
    {
      image: COE_DIGITECH,
      alt: "COE_DIGITECH",
      bg: "b",
    },
    {
      image: COE_MLR,
      alt: "COE_MLR",
      bg: "b",
    },
    {
      image: COE_CLOUDTECH,
      alt: "COE_CLOUDTECH",
      bg: "b",
    },
  ];

  return (
    <div className="hero w-full h-full flex flex-col items-center text-center gap-4 pt-2 px-1 md:px-8">
      <div className="flex justify-between items-center gap-4 w-full">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
          Community Partners
        </h1>
        {yes && (
          <div className="flex text-2xl">
            <button onClick={scrollPrev}>
              <IoIosArrowDropleft />
            </button>
            <button onClick={scrollNext}>
              <IoIosArrowDropright />
            </button>
          </div>
        )}
      </div>

      {yes ? (
        <div className="embla" ref={emblaRef}>
          <div className="embla__container h-full w-full">
            {communityPartners.map((partner, index) => (
              <div
                key={index}
                className={`embla__slide p-4 w-full h-full border-2 border-[var(--google-yellow)] rounded-xl overflow-clip ${
                  partner.bg === "w" ? "bg-white" : "bg-black"
                }`}
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="h-full object-contain m-auto"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text ">
            Revealing Soon...
          </h1>
        </div>
      )}
    </div>
  );
}
