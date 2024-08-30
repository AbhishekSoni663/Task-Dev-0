let newParent= document.getElementById('parent')
let colors = ['red','green','blue','orange','white','aliceblue','lightgray','skyblue','magenta','gold','whiteSmoke']
let newItem = 437;

for(let i=0; i<newItem; i++){
    const seconditem = document.createElement("div");
    seconditem.classList.add("seconditem");
    const color = getNewColor();
    seconditem.style.setProperty("--color", color);
    seconditem.addEventListener("mouseover", () =>
      seconditem.classList.add("hovered")
    );
    seconditem.addEventListener("mouseout", () =>
      seconditem.classList.remove("hovered")
    );
    newParent.appendChild(seconditem);
}

function getNewColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}