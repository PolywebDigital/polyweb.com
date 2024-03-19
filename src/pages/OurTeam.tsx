import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import EmployeeRecordCard from "../components/EmployeeRecordCard";

const OurTeam: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 lg:px-[20%] px-[5%] md:px-[15%] items-center">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl sm:text-7xl font-bold">
          Notre <span className="font-bold text-blue-700"> équipe </span>
        </h1>
        <p className="text-sm sm:text-base text-center">
          Une équipe dynamique d'amis étudiants unis par une vision commune :
          offrir des solutions numériques rapides et durables aux petites et
          moyennes entreprises. Avec notre passion partagée pour l'innovation et
          notre engagement envers l'efficacité, nous mettons nos compétences en
          développement au service de l'entrepreneuriat, prêts à relever les
          défis technologiques de demain.
        </p>
      </div>

      {/* RYAN */}
      <EmployeeRecordCard
        pictureUrl="ryan.png"
        lastname="LEBERT"
        firstname="Ryan"
        email="lebert.ryan.2022@gmail.com"
        description="Etudiant en management et commerce, mes responsabilités incluent la
          gestion proactive de la clientèle, ainsi que la recherche active de
          nouveaux prospects pour développer notre entreprise."
        skills={[
          { icon: <PersonSearchIcon />, title: "Prospection" },
          {
            icon: <ConnectWithoutContactIcon />,
            title: "Gestion de la clientèle",
          },
        ]}
        socials={[
          {
            accountTag: "ryan-lebert",
            link: "https://www.linkedin.com/in/ryan-lebert-351750222/",
            icon: <LinkedInIcon />,
          },
          {
            accountTag: "@lebert.ryan",
            link: "https://www.instagram.com/lebert.ryan/",
            icon: <InstagramIcon />,
          },
        ]}
      />

      {/* ANDY */}
      <EmployeeRecordCard
        pictureUrl="andy.jpg"
        lastname="LEBERT"
        firstname="Andy"
        email="lebert.andy007@gmail.com"
        description="Étudiant en gestion d'entreprise, je suis là pour guider votre
        entreprise vers la réussite. Avec ma capacité à prendre des
        décisions stratégiques, je suis prêt à travailler avec vous pour
        trouver des solutions pragmatiques et adaptées à vos besoins
        spécifiques. Contactez-moi dès maintenant pour discuter de la
        manière dont je peux contribuer à la croissance de votre entreprise."
        skills={[
          { icon: <BusinessCenterIcon />, title: "Direction financière" },
        ]}
        socials={[
          {
            accountTag: "andy-lebert",
            link: "https://www.linkedin.com/in/andy-lebert/",
            icon: <LinkedInIcon />,
          },
        ]}
      />

      {/* JOLAN */}
      <EmployeeRecordCard
        pictureUrl="jolan.png"
        lastname="COCHET"
        firstname="Jolan"
        email="jolan.cochet.pro@gmail.com"
        description="Étudiant en développement logiciel avec une passion pour
        l'innovation technologique et une solide expérience dans la création
        de solutions informatiques robustes et évolutives au service de
        l'entreprise."
        skills={[
          { icon: <AssignmentIcon />, title: "Analyse du besoin client" },
          { icon: <BuildIcon />, title: "Développement des sites web" },
        ]}
        socials={[
          {
            accountTag: "jolan-cochet",
            link: "https://www.linkedin.com/in/jolan-cochet-39949a2b6",
            icon: <LinkedInIcon />,
          },
          {
            accountTag: "@jojo.coch",
            link: "https://www.instagram.com/jojo.coch/",
            icon: <InstagramIcon />,
          },
          {
            accountTag: "COOPER2703",
            link: "https://github.com/COOPER2703",
            icon: <GitHubIcon />,
          },
        ]}
      />
    </div>
  );
};

export default OurTeam;
