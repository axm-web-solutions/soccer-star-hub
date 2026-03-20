import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

const StarRating = ({ rating, maxStars = 5, size = 18, interactive = false, onChange }: StarRatingProps) => {
  const handleClick = (value: number) => {
    if (interactive && onChange) onChange(value);
  };

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxStars }, (_, i) => {
        const starValue = i + 1;
        const isFull = rating >= starValue;
        const isHalf = !isFull && rating >= starValue - 0.5;

        return (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onClick={() => handleClick(starValue)}
            className={`transition-transform ${interactive ? "cursor-pointer hover:scale-125" : "cursor-default"}`}
          >
            {isFull ? (
              <Star size={size} className="fill-star-filled text-star-filled" />
            ) : isHalf ? (
              <StarHalf size={size} className="fill-star-filled text-star-filled" />
            ) : (
              <Star size={size} className="text-star-empty" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
