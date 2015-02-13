var triangle = function(sideA, sideB, sideC) {
  if (sideA + sideB <= sideC) {
    return "NOT A TRIANGLE!";
  } else if (sideA + sideC <= sideB) {
    return "NOT A TRIANGLE!";
  } else if (sideB + sideC <= sideA) {
    return "NOT A TRIANGLE!";
  } else if ((sideA === sideB) && (sideB === sideC)) {
    return "Equilateral";
  } else if ((sideA !== sideB) && (sideB !== sideC)) {
    return "Scalene";
  } else {
    return "Isosceles";
  }
};

$(document).ready(function() {
  $("form#triangle-finder").submit(function(event) {

    var sideA = parseInt($("input#side-a").val());
    var sideB = parseInt($("input#side-b").val());
    var sideC = parseInt($("input#side-c").val());
    var answer = triangle(sideA, sideB, sideC);

    $(".triangle-type").text(answer);
    $("#result").show();

    event.preventDefault();
  });
});
