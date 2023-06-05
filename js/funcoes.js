var programmer_art = 0

function programmers_art(auto) {

    if (typeof auto == "undefined")
        if (programmer_art == 0)
            programmer_art = 1
        else
            programmer_art = 0

    if (programmer_art)
        document.getElementById("programmers_art").style.border = "solid 1px yellow"
    else
        document.getElementById("programmers_art").style.border = "solid 1px black"

    localStorage.setItem("programmer_art", programmer_art)
}