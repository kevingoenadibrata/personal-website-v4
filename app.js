var size = 10

function start(){

}


$( ".super-large" ).click(function() {
  size -= 1;
  $(".super-large").css("font-size", "" + size + "vw");
});
