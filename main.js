// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
//   }  

$(document).ready(function(){
  // var $i=0
  // $(".next").click(function(){
  //   $i=$i+1
  //   // alert($i)
  //   $(".mySlides").eq($i-1).css("display","none")
  //   $(".mySlides").eq($i).fadeOut("fast",function(){
  //     $(".mySlides").eq($i+1).fadeIn("fast")
  //   })

  
  // }); 
  //  $(".prev").click(function(){
  //   $i=$i-1
  //   // alert($i)
  //   $(".mySlides").eq($i+1).css("display","none")
  //   $(".mySlides").eq($i).fadeOut("fast",function(){
  //     $(".mySlides").eq($i-1).fadeIn("fast")
  //   })
  // });
  $(".next").click(function(){
    let foo=$(".active");
    if(foo.next().length){
      foo.next().addClass("active");
      foo.removeClass("active");
    }
    else{
      foo.parent().children().first().addClass("active");
    }
  })
  

  
  $(".prev").click(function(){
    let foo=$(".active");
    if(foo.prev().length){
      foo.prev().addClass("active");
      foo.removeClass("active");
    }
    else{
      foo.parent().children().last().addClass("active");
    }
  })
});