var triangle = function(sideA, sideB, sideC) {
  if (sideA + sideB <= sideC) {
    return "NOT A TRIANGLE!";
  } else if (sideA + sideC <= sideB) {
    return "NOT A TRIANGLE!";
  } else if (sideB + sideC <= sideA) {
    return "NOT A TRIANGLE!";
  } else if ((sideA === sideB) && (sideB === sideC)) {
    return "Equilateral";
  } else if ((sideA !== sideB) && (sideB !== sideC) && (sideA !== sideC)) {
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

    if (sideA + sideB <= sideC) {
      $('#tType').switchClass('Atriangle Aequilateral Aisosceles Ascalene','Aicono-cross', "easeInOutQuad");
    } else if (sideA + sideC <= sideB) {
      $('#tType').switchClass('Atriangle Aequilateral Aisosceles Ascalene','Aicono-cross', "easeInOutQuad");
    } else if (sideB + sideC <= sideA) {
      $('#tType').switchClass('Atriangle Aequilateral Aisosceles Ascalene','Aicono-cross', "easeInOutQuad");
    } else if ((sideA === sideB) && (sideB === sideC)) {
      $("ul.equilateral").append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
      $('#tType').switchClass('Atriangle Aicono-cross Aisosceles Ascalene','Aequilateral', "easeInOutQuad");
    } else if ((sideA !== sideB) && (sideB !== sideC) && (sideA !== sideC)) {
      $("ul.scalene").append("<li>" + sideA + "," + sideB + ", " + sideC + "</li>");
      $('#tType').switchClass('Atriangle Aisosceles Aequilateral Aicono-cross','Ascalene', "easeInOutQuad");
    } else {
      $("ul.isosceles").append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
      $('#tType').switchClass('Atriangle Aequilateral Ascalene Aicono-cross','Aisosceles', "easeInOutQuad");
    }


    $(".triangle-type").text(answer);
    $("#result").show();

    event.preventDefault();
  });
});
