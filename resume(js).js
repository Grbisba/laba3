function pushMe()
{
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if(dots.style.display === "none")
    {
        dots.style.display = "inline";
        more.style.display = "none";
        btn.innerHTML = "Push Me!"
    }
    else
    {
        dots.style.display = "none";
        more.style.display = "inline";
        btn.innerHTML = "Close Me!";
    }
}