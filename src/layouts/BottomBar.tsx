import { paths } from "../constants/Paths";

const BottomBar: React.FC = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 py-16 md:pt-16 md:pb-32 px-[25%] gap-5 justify-center bg-blue-50 ">
      {/* TODO RAJOUTER L'ONGLET POSTULER */}
      <div className="flex flex-col h-fit gap-4 text-center">
        <h4 className="text-xl font-bold"> PolyWeb </h4>
        <p>
          Votre allié pour la transformation numérique. Développement web sur
          mesure, automatisation, conseils stratégiques. Découvrez nos solutions
          dès aujourd'hui !
        </p>
      </div>
      <div className="flex flex-col h-fit gap-4 text-center">
        <h4 className="text-xl font-bold"> A propos </h4>
        <ul>
          <li>
            <a href={paths.home}> Accueil </a>
          </li>
          {/* <li>
            <a href={paths.ourMethodology}> Notre méthodologie </a>
          </li> */}
          <li>
            <a href={paths.ourTeam}> Notre équipe </a>
          </li>
          {/* <li>
            <a href={paths.pricing}> Tarification</a>
          </li> */}
          <li>
            <a href={paths.appointment}> Prendre rendez-vous </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col h-fit gap-4 text-center">
        <h4 className="text-xl font-bold"> Nous contacter </h4>
        <ul>
          <li> polyweb.digital@gmail.com </li>
          <li> (+33) 06 95 24 34 65 </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;
