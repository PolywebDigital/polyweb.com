import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { paths } from "../constants/Paths";

const TopBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-full px-[15%] py-6">
      <img className="w-60" src="/logo.png" alt="Logo" />
      <ul className="flex items-center gap-2">
        <li>
          <Button onClick={() => navigate(paths.home)}>Accueil </Button>
        </li>
        {/*
        <li>
          <Button onClick={() => navigate(paths.ourMethodology)}>
            Notre méthodologie
          </Button>
        </li>
        */}
        <li>
          <Button onClick={() => navigate(paths.ourTeam)}>Notre équipe</Button>
        </li>
        {/*
        <li>
          <Button onClick={() => navigate(paths.pricing)}>Tarification</Button>
        </li>
        */}
        <li>
          <Button color="dark" onClick={() => navigate(paths.appointment)}>
            Prendre rendez-vous
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
