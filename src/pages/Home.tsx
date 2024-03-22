import { Button } from "../components/ui/button";
import ServicesCard from "../components/ServicesCard";
import { GoArrowRight } from "react-icons/go";
import { useCustomNavigation } from "../lib/useCustomNavigation";

const Home: React.FC = () => {
  const { navigateTo } = useCustomNavigation();

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
            Nous sommes une équipe jeune et dynamique spécialisée dans le
            développement web pour les PME. Avec passion et créativité, nous
            transformons vos idées en réalité digitale. Prêts à propulser votre
            entreprise vers de nouveaux horizons ? Contactez-nous dès
            aujourd'hui !
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4">
            {/* <Button color="dark"> Notre méthodologie </Button> */}
            <Button buttonType="bordered" onClick={() => navigateTo(3)}>
              Parlons-en <GoArrowRight />
            </Button>
          </div>
        </div>
        <img className="hidden lg:block w-[50%]" src="hero.svg" alt="Hero" />
      </div>
      {/* Principals services section */}
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold"> Nos principaux services </h2>
        <p className="text-center">
          Nous comprenons que la réussite dans le monde moderne exige une
          présence en ligne solide et des processus efficaces. C'est pourquoi
          nous offrons une gamme de services numériques conçus pour propulser
          votre vers de nouveaux sommets.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <ServicesCard
            title="Développement web"
            imageUrl="/website.svg"
            content="
              De la conception initiale à la mise en ligne, 
              notre développeur crée des sites web hautement fonctionnels 
              et esthétiquement agréables, parfaitement adaptés aux
              besoins de votre entreprise et de vos clients."
          />
          <ServicesCard
            title="Automatisation de processus"
            imageUrl="/automation.svg"
            content="
              Simplifiez vos opérations et libérez 
              votre équipe des tâches répétitives grâce à 
              notre expertise en automatisation des processus. 
              De la gestion des stocks à la facturation automatisée, 
              nous vous aidons à gagner du temps et à optimiser vos ressources."
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
        <Button buttonType="bordered" onClick={() => navigateTo(3)}>
          Parlons-en <GoArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Home;
