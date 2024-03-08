import Button from "../components/Buttons";

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between w-full px-[15%] py-6">
      <img className="w-60" src="/image.png" alt="Logo" />
      <ul className="flex items-center gap-2">
        <li>
          <Button>Accueil </Button>
        </li>
        <li>
          <Button>Comment travaillons-nous </Button>
        </li>
        <li>
          <Button>Notre équipe </Button>
        </li>
        <li>
          <Button> Tarification </Button>
        </li>
        <li>
          <Button color="dark"> Prendre rendez-vous </Button>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
