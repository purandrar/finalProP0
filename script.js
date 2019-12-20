function changeBackground(color){
    document.body.style.backgroundColor= color;
}
function changeOp(num){
    var warna = document.body.backgroundColor;
    document.body.style.backgroundColor=  (warna,num/100);
}