$(document).ready(function () {
    $('#pdfModal').hide();
    $('#pdfModal1').hide();
    $('#pdfModal2').hide();
    $('#pdfModal3').hide();
    $('#pdfModal4').hide();
    $('#pdfModal5').hide();
    // Letter popup animation on hover
    $('.container').mouseenter(function () {
      $('.card').stop().animate({
        top: '-90px'
      }, 'slow');
    }).mouseleave(function () {
      $('.card').stop().animate({
        top: '5px'
      }, 'slow');
    });
  
    // When the letter (card) is clicked, show the PDF modal
    $('.card').click(function(){
      $('#pdfModal').fadeIn();
    });

    $('#img1').click(function(){
      $('#pdfModal1').fadeIn();
    });

    $('#img2').click(function(){
      $('#pdfModal2').fadeIn();
    });

    $('#img3').click(function(){
      $('#pdfModal3').fadeIn();
    });

    $('#img4').click(function(){
      $('#pdfModal4').fadeIn();
    });

    $('#img5').click(function(){
      $('#pdfModal5').fadeIn();
    });

    // Close the modal when the close button is clicked
    $('.close').click(function(){
      $('#pdfModal').fadeOut();
    });
  
    // Optionally, hide the modal if the user clicks outside the modal content
    $(window).click(function(event) {
      if ($(event.target).is('#pdfModal')) {
        $('#pdfModal').fadeOut();
      } else if ($(event.target).is('#pdfModal1')) {
        $('#pdfModal1').fadeOut();
      } else if ($(event.target).is('#pdfModal2')) {
        $('#pdfModal2').fadeOut();
      } else if ($(event.target).is('#pdfModal3')) {
        $('#pdfModal3').fadeOut();
      } else if ($(event.target).is('#pdfModal4')) {
        $('#pdfModal4').fadeOut();
      } else if ($(event.target).is('#pdfModal5')) {
        $('#pdfModal5').fadeOut();
      }      
    });
  });
  