document.addEventListener("DOMContentLoaded", () => {
  // TESTIMONIALS SLIDER
  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;
  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle("active", i === index);
    });
  }
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 5000);

  // CONTACT FORM
  const form = document.querySelector("form");
  const status = document.createElement("p");
  status.style.marginTop = "10px";
  form.appendChild(status);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Message Sent ✅ Thank u ";
    status.style.color = "green";
    form.reset();
  });
});
