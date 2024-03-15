import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import ServicesCard from "../components/ServicesCard";
import { GoArrowRight } from "react-icons/go";
import { paths } from "../constants/Paths";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero section */}
      <div className="flex px-[15%] py-36 items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold">
            How to <span className="font-bold text-blue-700"> level up </span>
            your business
          </h1>
          <p>
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
        <img className="w-[50%]" src="hero.svg" alt="Hero" />
      </div>
      {/* Principals services section */}
      <div className="flex flex-col px-[15%] py-24 items-center gap-6">
        <h2 className="text-4xl font-bold"> Nos principaux services </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam nibh
          elit pellentesque velit netus suspendisse. Sed enim, pretium, montes,
          in ut dolor urna.
        </p>
        <div className="flex gap-8">
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
      <div className="flex flex-col gap-12 px-[15%] py-12 items-center">
        <h2 className="text-4xl font-bold">
          Améliorer votre image de marque maintenant !
        </h2>
        <img className="w-[30%]" src="/winner.svg" alt="image" />
        <Button color="bordered" onClick={() => navigate(paths.appointment)}>
          Parlons-en <GoArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Home;
