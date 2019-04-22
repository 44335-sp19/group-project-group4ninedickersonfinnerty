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
    $('.modall').css('display','block');
  });
  $('.closey').click(function(){
    $('.modall').css('display','none');
  });
});


function closePortModal(modalName) {
  modalName.style.display = "none";
}
