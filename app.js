const questions =
  document.querySelectorAll(".question");
questions.forEach(function (question) {
  question.addEventListener("click", toggleClass);

  function toggleClass() {
    const button = question.firstElementChild;
    const answer = question.nextElementSibling;

    button.classList.toggle("active");
    question.classList.toggle("active");
    answer.classList.toggle("active");
  }
});
