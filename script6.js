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

    if (contents === "firewall list")
    {
        message = "<table> <tr> <th>IP</th><th>Name</th><th>Blocked Packets</th> </tr> <tr> <td>209.12.233.9</td><td>th3_m4gpi3</td><td>298038</td> </tr> <tr> <td>81.124.233.243</td><td>J0$H</td><td>28</td> </tr> <tr> <td>81.150.43.88</td><td>E<a href='/secret.png' target='_blank'>#</a>CILA</td><td>48821</td> </tr> <tr> <td>20.30.593.2</td><td>Hermit_Purple</td><td>42069</td> </tr> <tr> <td>73.76.310.66</td><td>F.E.E.T</td><td>11</td> </tr> </table>";
    }
    else if (contents === "ls")
    {
        message = "<table><tr><th>NAME</th><th>SIZE</th></tr><tr><td>sosterrete</td><td>2984 B</td></tr><tr><td>quaser</td><td>1654 B</td></tr><tr><td>w0rM</td><td>9999 B</td></tr></table>";
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