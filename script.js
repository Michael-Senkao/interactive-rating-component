var rating = 0;
var activeElement = null;
var isActive = false;

$(".rating").click((event) => {
  rating = event.target.innerText;
  if (!isActive) {
    isActive = true;
  } else if (activeElement.innerText === "5") {
    activeElement.classList.remove("max-rating-active");
  } else {
    activeElement.classList.remove("rating-active");
  }

  activeElement = event.target;
  if (rating == 5) {
    event.target.classList.add("max-rating-active");
  } else {
    event.target.classList.add("rating-active");
  }
});

$(".submit").click(() => {
  $("#actual-rating").text(rating);

  $(".first-card").fadeOut(250, () => {
    $(".second-card").fadeIn(500);
  });
});
