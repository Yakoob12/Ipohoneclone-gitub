// $(".list li").on("click", function() {

//     $("li").removeClass("active")
//      $(this).addClass("active")
//      console.log(this)
// })

$("button").on("click", function(){
    $(".id").css("border","5px solid red");

    $(".id").parent().dosomething();
});


// $("button").on("click", function(){
//     $("h3").css("border", "5px solid red"); // Corrected CSS border property

//     $("h3").parent().doSomething(); // Placeholder for what you want to do with the parent element
// });