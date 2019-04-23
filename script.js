function openNav() {
  document.getElementById('sideNav').style.width = "250px";
}
function closeNav() {
  document.getElementById('sideNav').style.width = "0";
}
$(document).ready(function(){
  $('.portfolioImage').click(function(){
    var image = $(this).attr('src');
    $('.modall img').attr('src', image).addClass('center-block');
    $('body').css('overflow', 'hidden');
    $('.modall').css('display','block');
  });
  $('.closey').click(function(){
    $('body').css('overflow', 'auto');
    $('.modall').css('display','none');
  });
});


function closePortModal(modalName) {
  modalName.style.display = "none";
}
