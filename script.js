const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

$(document).ready(function () {
  var ir_a = $(".desplazar");
  ir_a.click(function (evento) {
    evento.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      50
    );
  });
});
