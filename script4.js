var input = document.getElementById("cl");
input.focus();

function checkInputConents(/*HTMLElement*/ the_input_box)
{
    var contents = the_input_box.value;
    var message = "";

    function delay() {
        setTimeout(() => {
            newItem.innerHTML += ".";
            delay();
        }, 50)
    }

    if (contents === "quaser")
    {
        message = "Good luck "
        the_input_box.parentElement.hidden = true;
        setTimeout(() => {
            document.location.href = "quaser.html";
        }, 3500);
        setTimeout(() => delay(), 500)
    }
    else
    {
        message = "Word '" + contents + "' is wrong.";
    }

    var newItem = document.createElement("p");
    newItem.innerHTML = "ana@illuminati:-$ " + contents + "<br>" + message;

    the_input_box.parentElement.parentElement.insertBefore(newItem, the_input_box.parentElement);
    the_input_box.value = "";
}

input.addEventListener("keyup", function(event){
    if (event.key === "Enter")
    {
        checkInputConents(input);
    }
});