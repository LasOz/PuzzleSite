var correct_count = 0;
var selected_count = 0;

function checkCorrectness()
{
    if (correct_count === selected_count)
    {
        document.location.href = "codewords_rev.html";
    }
    else
    {
        alert("You are not our friend.")
        location.reload();
    }
}

function selectBox(event)
{
    if (event.target.style.borderColor !== "white")
    {
        event.target.style.borderColor = "white";
        if (event.target.classList.contains("correct"))
            correct_count++;
        
        selected_count++;
    }
    else
    {
        event.target.style.borderColor = "black";
        if (event.target.classList.contains("correct"))
            correct_count--;
        
        selected_count--;
    }

    document.getElementById("selected").innerText = "SELECTED: " + selected_count;

    if (selected_count === 6)
    {
        document.getElementById("next_page").disabled = false;
    }
    else
    {
        document.getElementById("next_page").disabled = true;
    }
}

var words = Array.from(document.getElementsByClassName("frCell"));

words.forEach(element => {
    element.addEventListener("click", selectBox);
});
