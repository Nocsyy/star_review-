import './rating.css';

const Rating = (props) => {
  const { handleRating, value, min, max, className } = props;

  const handleClick = (ratingValue) => {
    handleRating(ratingValue);
  };

  const handleMouseEnter = (hoveredValue) => {
    const stars = document.querySelectorAll(`.${className} .star`);
    stars.forEach((star, index) => {
      if (index < hoveredValue) {
        star.classList.add('hovered');
      } else {
        star.classList.remove('hovered');
      }
    });
  };

  const handleMouseLeave = () => {
    const stars = document.querySelectorAll(`.${className} .star`);
    stars.forEach((star) => {
      star.classList.remove('hovered');
    });
  };

  return (
    <div className={`ctn-star ${className}`}>
      {[...Array(parseInt(max))].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={ratingValue}
            className={`star ${ratingValue <= value ? 'selected' : ''}`}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
          >
            {ratingValue <= value ? '★' : '★'}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
