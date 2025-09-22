const squares = document.querySelectorAll('.square');
const lavender = "#E6E6FA";
const coffee = "#6F4E37";

squares.forEach((box) => {
  box.addEventListener('mouseover', () => {
    squares.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.style.backgroundColor = coffee;
      }
    });
  });

  box.addEventListener('mouseout', () => {
    squares.forEach((s) => {
      s.style.backgroundColor = lavender;
    });
  });
});
