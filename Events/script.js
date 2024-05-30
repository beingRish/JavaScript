let modeBtn = document.getElementById("mode")
let body = document.querySelector("body");

let currMode = "light";

modeBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark";
        console.log("currMode---->", currMode)
        body.classList.add("dark");
        body.classList.remove("light");

    } else{
        currMode = "light";
        console.log("currMode---->", currMode)

        body.classList.add("light");
        body.classList.remove("dark");

    }

    console.log(currMode);
})