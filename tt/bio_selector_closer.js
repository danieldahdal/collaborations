$(document).ready(function(){

$( "#bio_selector_closer" ).click(
function showMenu(){
var menu = $( "#bio_selector" );
var spanTags = $( "span" );

if(menu.css("display") == "block"){

//Start of animation
menu.animate(
{
height: "toggle"
}, 300);

spanTags.eq( 0 ).css("transition", "0.3s");
spanTags.eq( 0 ).css("margin-top", "0px");
spanTags.eq( 0 ).css("-moz-transform", "rotate(0deg)");
spanTags.eq( 0 ).css("-ms-transform", "rotate(0deg)");
spanTags.eq( 0 ).css("-o-transform", "rotate(0deg)");
spanTags.eq( 0 ).css("-webkit-transform", "rotate(0deg)");
spanTags.eq( 0 ).css("transform", "rotate(0deg)");

spanTags.eq( 1 ).css("transition", "0.3s");
spanTags.eq( 1 ).css("display", "block");

spanTags.eq( 2 ).css("transition", "0.3s");
spanTags.eq( 2 ).css("margin-top", "0px");
spanTags.eq( 2 ).css("-moz-transform", "rotate(0deg)");
spanTags.eq( 2 ).css("-ms-transform", "rotate(0deg)");
spanTags.eq( 2 ).css("-o-transform", "rotate(0deg)");
spanTags.eq( 2 ).css("-webkit-transform", "rotate(0deg)");
spanTags.eq( 2 ).css("transform", "rotate(0deg)");
//End of animation

}
else
{

//Start of animation
menu.animate(
{
height: "toggle"
}, 300);

spanTags.eq( 0 ).css("transition", "0.3s");
spanTags.eq( 0 ).css("margin-top", "9px");
spanTags.eq( 0 ).css("-moz-transform", "rotate(45deg)");
spanTags.eq( 0 ).css("-ms-transform", "rotate(45deg)");
spanTags.eq( 0 ).css("-o-transform", "rotate(45deg)");
spanTags.eq( 0 ).css("-webkit-transform", "rotate(45deg)");
spanTags.eq( 0 ).css("transform", "rotate(45deg)");

spanTags.eq( 1 ).css("transition", "0.3s");
spanTags.eq( 1 ).css("display", "none");

spanTags.eq( 2 ).css("transition", "0.3s");
spanTags.eq( 2 ).css("margin-top", "-9px");
spanTags.eq( 2 ).css("-moz-transform", "rotate(-45deg)");
spanTags.eq( 2 ).css("-ms-transform", "rotate(-45deg)");
spanTags.eq( 2 ).css("-o-transform", "rotate(-45deg)");
spanTags.eq( 2 ).css("-webkit-transform", "rotate(-45deg)");
spanTags.eq( 2 ).css("transform", "rotate(-45deg)");
//End of animation

}

}

)
});
