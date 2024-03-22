import Home from "./pages/Home";
// import OurMethodology from "./pages/OurMethodology";
import OurTeam from "./pages/OurTeam";
// import Pricing from "./pages/Pricing";
import Appointment from "./pages/Appointment";
import * as emailjs from "@emailjs/browser";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import BottomBar from "./layouts/BottomBar";
import TopBar from "./layouts/TopBar";
import { createContext, useEffect, useState } from "react";

export const CustomNavigationContext = createContext<CarouselApi>(undefined);

const App: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();

  emailjs.init({
    publicKey: "mF12nL6swH1qcE-LA",
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  const [pages, setPages] = useState(() => [
    { element: <Home />, className: "" },
    { element: <OurTeam />, className: "" },
    { element: <Appointment />, className: "" },
  ]);

  useEffect(() => {
    if (api) {
      api.on("select", (emblaApi) => {
        const scrollSnap = emblaApi.selectedScrollSnap();
        setPages((prev) =>
          prev.map((page, index) => {
            if (index === scrollSnap) {
              page.className = "block";
            }
            return page;
          })
        );
        setTimeout(() => {
          setPages((prev) =>
            prev.map((page, index) => {
              if (index !== scrollSnap) {
                page.className = "hidden";
              }
              return page;
            })
          );
        }, 250);
      });

      // This is just to be sure that the page show
      // when the user click to quickly
      api.on("slidesInView", (emblaApi) => {
        const scrollSnap = emblaApi.selectedScrollSnap();
        setPages((prev) =>
          prev.map((page, index) => {
            if (index === scrollSnap) {
              page.className = "block";
            }
            return page;
          })
        );
      });
    }
  }, [api]);

  useEffect(() => {
    console.log(pages);
  }, [pages]);

  return (
    <CustomNavigationContext.Provider value={api}>
      <div className="flex flex-col overflow-clip gap-16 md:gap-40 justify-between">
        <TopBar />
        <Carousel setApi={setApi}>
          <CarouselContent>
            {pages.map((page, index) => (
              <CarouselItem key={index}>
                <div className={page.className}>{page.element}</div>
              </CarouselItem>
            ))}

            {/* <CarouselItem>
            <OurMethodology />
          </CarouselItem> */}
            <CarouselItem>
              <OurTeam />
            </CarouselItem>
            {/* <CarouselItem>
            <Pricing />
          </CarouselItem> */}
            <CarouselItem>
              <Appointment />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <BottomBar />
      </div>
    </CustomNavigationContext.Provider>
  );
};

export default App;
