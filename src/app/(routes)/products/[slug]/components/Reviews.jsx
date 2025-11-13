import ReviewStars from "./ReviewStars";
import ReviewElement from "./ReviewElement";

const Reviews = ({ reviews, rating }) => {
  return (
    <section className="flex flex-col gap-6">
      <ReviewStars rating={rating} />
      <ReviewElement reviews={reviews} />
    </section>
  );
};

export default Reviews;
