
const servingRate={
  lollipop:1,
  icecandy:2

}

const offerRate={
    yearsub:0.5,
    monthsub:1,

}
const servings={
  serving25:25,
  serving50:50,
  serving100:100,
  serving200:200,
}

const rate={
  lollipop:100,
  icecandy:200,
  savings:100,

}
// number of servings
let choice="serving100"
$("#serving25,#serving50,#serving100,#serving200").on("click",function()
    {
      $("#serving100,#serving200,#serving50,#serving25").removeClass("servingBorder");
      $(this).toggleClass("servingBorder");
      choice=$(this).attr('id');
      calcRate();
      changePrice();

    })
// subscription plan
let subs="monthsub"
$("#toggler").on("click",function(){
  {
    $("#oval").toggleClass("monthsub yearsub");
    subs=$("#oval").attr("class");
    calcRate();
    changePrice();
  }
});


// calc price
function calcRate(){

  rate.lollipop=(servingRate.lollipop)*(offerRate[subs])*(servings[choice]);
  rate.icecandy=(servingRate.icecandy)*(offerRate[subs])*(servings[choice]);
  rate.savings=(rate.icecandy-rate.lollipop)
  // alert(rate.lollipop)
  // alert(rate.icecandy)
  // alert(rate.savings)

}
// updateprice
function changePrice(){
$("#loli .price").text("$"+rate.lollipop);
$("#ice .price").text("$"+rate.icecandy);
$("#your .price").text("$"+rate.savings);
}
