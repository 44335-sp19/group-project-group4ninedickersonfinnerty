function openNav() {
  document.getElementById('sideNav').style.width = "250px";
}
function closeNav() {
  document.getElementById('sideNav').style.width = "0";
}
$(document).ready(function(){
  $('.portfolioImage').click(function(){
    var image = $(this).attr('src');
    $('.modal img').attr('src', image);
    $('.modal').css('display','block');
  });
  $('.close').click(function(){
    $('.modal').css('display','none');
  });
});


function closePortModal(modalName) {
  modalName.style.display = "none";
}
