const questions =
  document.querySelectorAll(".question");

questions.forEach(function (question) {
  question.addEventListener("click", toggleClass);

  function toggleClass() {
    const button = question.firstElementChild;
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      button.classList.remove("active");
      question.classList.remove("active");
      answer.classList.remove("active");
    } else {
      removeClass();
      button.classList.add("active");
      question.classList.add("active");
      answer.classList.add("active");
    }
  }
  function removeClass() {
    questions.forEach((question) => {
      const button = question.firstElementChild;
      const answer = question.nextElementSibling;
      button.classList.remove("active");
      question.classList.remove("active");
      answer.classList.remove("active");
    });
  }
});
