import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import ServicesCard from "../components/ServicesCard";
import { GoArrowRight } from "react-icons/go";
import { paths } from "../constants/Paths";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-[5%] md:px-[15%] gap-32 md:gap-60">
      {/* Hero section */}
      <div className="flex items-center">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <h1 className="text-7xl text-center md:text-left font-bold">
            How to <span className="font-bold text-blue-700"> level up </span>
            your business
          </h1>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
            faucibus tellus leo non pellentesque lorem vel. Arcu magna eros,
            potenti duis.
          </p>
          <div className="flex gap-4">
            <Button color="dark"> Notre méthodologie </Button>
            <Button
              color="bordered"
              onClick={() => navigate(paths.appointment)}
            >
              Parlons-en <GoArrowRight />
            </Button>
          </div>
        </div>
        <img className="hidden lg:block w-[50%]" src="hero.svg" alt="Hero" />
      </div>
      {/* Principals services section */}
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold"> Nos principaux services </h2>
        <p className="text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam nibh
          elit pellentesque velit netus suspendisse. Sed enim, pretium, montes,
          in ut dolor urna.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <ServicesCard
            title="Développement web"
            imageUrl="/website.svg"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent."
          />
          <ServicesCard
            title="Automatisation de processus"
            imageUrl="/automation.svg"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent."
          />
        </div>
      </div>
      {/* Start business now */}
      <div className="flex flex-col gap-12 items-center">
        <h2 className="text-4xl text-center font-bold">
          Améliorer votre image de marque dès maintenant !
        </h2>
        <img
          className="w-[60%] md:w-[50%] lg:w-[40%]"
          src="/winner.svg"
          alt="image"
        />
        <Button color="bordered" onClick={() => navigate(paths.appointment)}>
          Parlons-en <GoArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Home;
