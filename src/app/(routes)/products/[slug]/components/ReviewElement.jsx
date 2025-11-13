import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const ReviewElement = ({ reviews }) => {
  // Generer stjerner baseret på rating (ikke ud af 5)
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Antal hele stjerner
    const hasHalfStar = rating % 1 >= 0.5; // Om der skal være en halv stjerne

    // Tilføj hele stjerner
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    // Tilføj halv stjerne hvis nødvendigt
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="my-6 flex flex-wrap gap-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="rounded border border-gray-300 py-4 pr-24 pl-4"
        >
          {/* Stjerner */}
          <div className="mb-2 flex gap-1">
            {renderStars(review.rating)}
            <span className="ml-2 text-sm text-gray-600">
              ({review.rating})
            </span>
          </div>

          {/* Kommentar */}
          <p className="text-gray-800">{review.comment}</p>

          {/* Reviewer info */}
          {review.reviewerName && (
            <p className="mt-2 text-sm text-gray-500">
              - {review.reviewerName}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewElement;
