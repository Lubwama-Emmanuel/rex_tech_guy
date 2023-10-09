import { useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function ProductReview({ setAddReview }) {
  const [review, setReview] = useState("");
  function handleSubmitReview() {
    // Add review to db under the laptops
    // For now log the review here and close the review window
    console.log("Got review", review);
    setAddReview(false);
  }
  return (
    <div className="space-y-2">
      <div>
        <input
          placeholder="Write review"
          data={review}
          type="text"
          onChange={(e) => setReview(e.target.value)}
          className="w-[100%] border border-emerald-300 py-10 focus:outline-none focus:ring "
        />
      </div>
      <Button handleClick={handleSubmitReview}>Submit</Button>
    </div>
  );
}
