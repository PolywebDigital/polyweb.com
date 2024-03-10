import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIcon from "@mui/icons-material/Assignment";

const OurTeam: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 lg:px-[20%] md:px-[10%] sm:px-[5%] lg:py-12 md:py-6 sm:py-2  items-center">
      <h1 className="text-7xl font-bold">
        Notre <span className="font-bold text-blue-700"> équipe </span>
      </h1>
      <p className="text-center">
        Une équipe dynamique d'amis étudiants unis par une vision commune :
        offrir des solutions numériques rapides et durables aux petites et
        moyennes entreprises. Avec notre passion partagée pour l'innovation et
        notre engagement envers l'efficacité, nous mettons nos compétences en
        développement au service de l'entrepreneuriat, prêts à relever les défis
        technologiques de demain.
      </p>

      {/* RYAN */}
      <div className="flex items-center bg-blue-50 w-full p-16 rounded-3xl gap-12">
        <img className="w-[40%] rounded-full" src="jolan.png" alt="Jolan" />
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-bold"> LEBERT Ryan </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in
            malesuada eget fames purus ligula luctus tellus. Habitant
            condimentum sit gravida praesent.
          </p>
          <ul>
            <li className="flex gap-4">
              <BusinessCenterIcon />
              Développement des sites web
            </li>
          </ul>
        </div>
      </div>

      {/* ANDY */}
      <div className="flex items-center bg-blue-50 w-full p-16 rounded-3xl gap-12">
        <ul className="flex flex-col gap-4 grow">
          <li>
            <a href="https://www.linkedin.com/in/andy-lebert/">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
        <div className="flex  flex-col gap-6 ">
          <h3 className="text-4xl font-bold"> LEBERT Andy </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in
            malesuada eget fames purus ligula luctus tellus. Habitant
            condimentum sit gravida praesent.
          </p>
          <ul>
            <li className="flex gap-4">
              <BusinessCenterIcon />
              Direction financière
            </li>
          </ul>
        </div>
        <img className="w-[40%] rounded-full" src="andy.jpg" alt="Andy" />
      </div>

      {/* JOLAN */}
      <div className="flex items-center bg-blue-50 w-full p-16 rounded-3xl gap-12">
        <img className="w-[40%] rounded-full" src="jolan.png" alt="Jolan" />
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-bold"> COCHET Jolan </h3>
          <p>
            Étudiant en développement logiciel avec une passion pour
            l'innovation technologique et une solide expérience dans la création
            de solutions informatiques robustes et évolutives au service de
            l'entreprise.
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4">
              <AssignmentIcon />
              Analyse du besoin client
            </li>
            <li className="flex gap-4">
              <BuildIcon />
              Développement des sites web
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-4 grow">
          <li>
            <a href="https://www.instagram.com/jojo.coch/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jolan-cochet-39949a2b6">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/COOPER2703">
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
