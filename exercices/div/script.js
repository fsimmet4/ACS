let cases = document.querySelector('.case');
let click = 0;



cases.addEventListener("click", function () {
    let res = "<h1 class='text-center'> Hello World! </h1>"

    switch (click) {
        case 0:
            cases.innerHTML = res;
            break;
        case 1:
            cases.style.backgroundColor = "#1d4358";
            break;
        case 2:
            cases.style.border = "3px solid black";
            break;
        default:
            cases.style.border = "none";
            cases.style.backgroundColor = "#698697";
            cases.innerHTML = "";
    }
    click += 1;
})