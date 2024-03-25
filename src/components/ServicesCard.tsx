import { GoArrowRight } from "react-icons/go";
import { Button } from "../components/ui/button";

interface ServicesCardProps {
  title: string;
  imageUrl: string;
  content: string;
}

const ServicesCard: React.FC<ServicesCardProps> = (props) => {
  const { title, imageUrl, content } = props;

  return (
    <div className="flex flex-col sm:flex-row gap-8 items-center rounded-3xl bg-blue-100 max-w-80 sm:max-w-4xl p-8 sm:p-16 w-fit">
      <img className="w-[40%] min-w-48" src={imageUrl} alt="card img" />
      <div className="flex flex-col gap-6 grow text-center sm:text-left justify-between items-center lg:items-start">
        <h3 className="text-3xl font-semibold"> {title} </h3>
        <p> {content} </p>
        <Button buttonType="bordered">
          En savoir plus <GoArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
