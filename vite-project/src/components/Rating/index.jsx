import { useState } from "react";
import { Container } from "./styles";
import { FaStar } from "react-icons/fa";



export function Rating() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1
        return (
          <label key={currentRating}>
            <input type="radio" name="rating" value={currentRating} onClick={() => { setRating(currentRating) }} />
            <FaStar
              className="star"
              size={12}
              color={
                currentRating <= (hover || rating) ? '#FF859B' : '#e4e5e9'
              } onMouseEnter={() => {
                setHover(currentRating)
              }} onMouseLeave={
                () => {
                  setHover(null)
                }} />
          </label>
        )
      })}


    </Container>
  );
}


