import { GoArrowRight } from "react-icons/go";
import Button from "./Buttons";

interface ServicesCardProps {
  title: string;
  content: string;
}

const ServicesCard: React.FC<ServicesCardProps> = (props) => {
  const { title, content } = props;
  return (
    <div className="flex flex-col items-center rounded-3xl bg-blue-50 max-w-96 p-8 w-fit">
      <img className="w-96" src="/web-development.png" alt="card img" />
      <div className="flex flex-col gap-6 grow text-center justify-between items-center">
        <h3 className="text-3xl font-semibold"> {title} </h3>
        <p> {content} </p>
        <Button color="bordered">
          En savoir plus <GoArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
