import { GoArrowRight } from "react-icons/go";
import Button from "./Buttons";

interface ServicesCardProps {
  title: string;
  imageUrl: string;
  content: string;
}

const ServicesCard: React.FC<ServicesCardProps> = (props) => {
  const { title, imageUrl, content } = props;

  return (
    <div className="flex flex-col gap-8 items-center rounded-3xl min-w-[400px] bg-blue-100 max-w-96 p-8 w-fit">
      <img className="w-64 h-64" src={imageUrl} alt="card img" />
      <div className="flex flex-col gap-6 grow text-center justify-between items-center">
        <h3 className="text-3xl font-semibold"> {title} </h3>
        <p className="hidden md:block"> {content} </p>
        <Button color="bordered">
          En savoir plus <GoArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
