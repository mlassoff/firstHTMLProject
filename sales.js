const opt1 = document.getElementById("payOption1");
const opt2 = document.getElementById("payOption2");
const out = document.getElementById("totalOut");
const bord1 = document.getElementById("999");
const bord2 = document.getElementById("9999");

bord1.setAttribute("Style", "border:2px solid green");

opt1.addEventListener('click', function(){
    out.innerHTML = "<strong>$9.99</strong>";
    bord1.setAttribute("Style", "border:2px solid green");
    bord2.setAttribute("Style", "border:1px solid #ccc");

});

opt2.addEventListener('click', function(){
    out.innerHTML = "<strong>$99.99</strong>";
    bord1.setAttribute("Style", "border:1px solid #ccc");
    bord2.setAttribute("Style", "border:2px solid green");

});