const stars = document.querySelectorAll(".star");
const ratingDisplay = document.getElementById("rating-display");
const reviewComment = document.getElementById("review-comment");
const submitButton = document.querySelector(".submit-btn");
let ratingValue = 0;

stars.forEach((star) => {
  star.addEventListener("mouseover", function () {
    highlightStars(this.getAttribute("data-value"));
  });

  star.addEventListener("mouseout", function () {
    highlightStars(ratingValue);
  });

  star.addEventListener("click", function () {
    ratingValue = this.getAttribute("data-value");
    ratingDisplay.textContent = `Your rating: ${ratingValue} stars`; // Fixed this line
    highlightStars(ratingValue);
  });
});

function highlightStars(value) {
  stars.forEach((star) => {
    if (star.getAttribute("data-value") <= value) {
      star.classList.add("highlight");
    } else {
      star.classList.remove("highlight");
    }
  });
}

function submitReview() {
  const reviewText = reviewComment.value.trim();

  if (ratingValue === 0) {
    alert("Please provide a rating!");
    return;
  }

  if (reviewText === "") {
    alert("Please write your review!");
    return;
  }

  alert(
    "Done! Your rating has been submitted. You can click the stars again to change your rating."
  );
}
