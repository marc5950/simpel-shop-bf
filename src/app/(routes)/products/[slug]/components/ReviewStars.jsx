import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ReviewStars = ({ rating }) => {
  // Generer array med 5 stjerner baseret på rating
  const stars = [];

  // Loop gennem 1 til 5 for at skabe stjernerne
  // For hver iteration, tjek om rating er større end eller lig med 1(i) for fuld stjerne, eller større end eller lig med 1(i) - 0.5 for halv stjerne, ellers tom stjerne
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Fuld stjerne
      stars.push(<FaStar key={i} className="size-7 text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      // Halv stjerne
      stars.push(
        <FaRegStarHalfStroke key={i} className="size-7 text-yellow-400" />,
      );
    } else {
      // Tom stjerne
      stars.push(<FaRegStar key={i} className="size-7 text-yellow-400" />);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-semibold">Reviews</h2>
      <div className="flex gap-1">{stars}</div>
    </div>
  );
};

export default ReviewStars;
