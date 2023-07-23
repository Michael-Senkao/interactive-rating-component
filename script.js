var rating = 0;
var activeElement = null;
var isActive = false;

$(".rating").click((event) => {
  rating = event.target.innerText;
  if (!isActive) {
    isActive = true;
  } else {
    activeElement.classList.remove("rating-active");
  }

  activeElement = event.target;
  event.target.classList.add("rating-active");
});

$(".submit").click(() => {
  $("#actual-rating").text(rating);

  $(".first-card").fadeOut(250, () => {
    $(".second-card").fadeIn(500);
  });
});
