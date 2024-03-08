import Button from "./components/Buttons";
import ServicesCard from "./components/ServicesCard";
import BottomBar from "./layouts/BottomBar";
import TopBar from "./layouts/TopBar";
import { GoArrowRight } from "react-icons/go";

const App: React.FC = () => {
  return (
    <div>
      <TopBar />
      {/* Hero section */}
      <div className="flex px-[15%] py-12 items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold">
            How to <span className="font-bold text-blue-700"> level up </span>{" "}
            your business
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            faucibus tellus leo non pellentesque lorem vel. Arcu magna eros,
            potenti duis.
          </p>
          <div className="flex gap-4">
            <Button color="dark"> Notre méthodologie </Button>
            <Button color="bordered">
              Parlons-en <GoArrowRight />
            </Button>
          </div>
        </div>
        <img className="w-[50%]" src="hero-image.png" alt="Hero" />
      </div>
      {/* Principals services section */}
      <div className="flex flex-col px-[15%] py-12 items-center gap-6">
        <h2 className="text-4xl font-bold"> Nos principaux services </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam nibh
          elit pellentesque velit netus suspendisse. Sed enim, pretium, montes,
          in ut dolor urna.
        </p>
        <div className="flex gap-8">
          <ServicesCard
            title="Développement web"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent."
          />
          <ServicesCard
            title="Automatisation de processus"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent."
          />
        </div>
      </div>
      {/* Start business now */}
      <div className="flex flex-col px-[15%] py-12 items-center">
        <h2 className="text-4xl font-bold">
          Améliorer votre image de marque maintenant !
        </h2>
        <img className="w-[50%]" src="web-development.png" alt="image" />
        <Button color="bordered">
          Parlons-en <GoArrowRight />
        </Button>
      </div>
      <BottomBar />
    </div>
  );
};

export default App;
