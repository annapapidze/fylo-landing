
const email = document.getElementById("email_id");
const error = document.getElementById("green_red_div");
const buttonSubmit = document.getElementById("get_started");
const email2 = document.getElementById("second_email");
const error2 = document.getElementById("green_red_div1");
const buttonSubmit2 = document.getElementById("get-started");


let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input, errorPara) {

    if (mailRegex.test(input.value)) {
        console.log("this is true");
        input.classList.add('success');
        input.classList.remove('error');
        errorPara.firstElementChild.style.display = "none";
        errorPara.lastElementChild.style.display = "block";
    } else if (!mailRegex.test(input.value)) {
        console.log('this is false');
        input.classList.add('error');
        input.classList.remove('success');
        errorPara.firstElementChild.style.display = "block";
        errorPara.lastElementChild.style.display = "none";
    }


}




buttonSubmit.addEventListener('click', (event)=> {
    event.preventDefault()
    testMail(email, error);
    console.log("clicked");
})


buttonSubmit2.addEventListener('click', (event)=> {
    event.preventDefault()
    testMail(email2, error2);
    console.log("clicked");
})

