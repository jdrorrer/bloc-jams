$(document).ready(function() {
  $('.hero-content h3').click(function() {
    var subText = $(this).text();
    $(this).text(subText + "!");
  });

  $('.hero-content h3').hover(function() {
    $(this).css('color', 'red');
  }, function() {
    $(this).css('color', 'white');
  });

  $('.hero-content h1').click(function() {
    console.log('Bloc Jams header clicked.');
    $(this).fadeOut("slow");
  });

  var onHoverAction = function(event) {
    console.log('Hover action triggered.');
    $(this).animate({'margin-top': '10px'});
  };

  var offHoverAction = function(event) {
    console.log('Off-hover action triggered.');
    $(this).animate({'margin-top': '0px'});
  };

  $('.selling-points .point').hover(onHoverAction, offHoverAction);

  $('.selling-points .point h5').click(function() {
    console.log("Selling point clicked.");
    $(this).css('font-size', '16px');
  });
});