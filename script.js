document.addEventListener("click", e=>{
    let slider
    if(e.target.closest(".shift")){
        slider=e.target
    }
    if (slider != null){
        onSliderClick(slider)
    }
}
);

function onSliderClick(slider){
    const shiftd = slider.closest(".container").querySelector(".slider")
    const shiftd_index = parseInt(getComputedStyle(shiftd).getPropertyValue("--slider_index"))
    if (slider.classList.contains("right-arrow")){
        shiftd.style.setProperty("--slider_index", shiftd_index+1)
        updateProgressBar(shiftd_index)
    }
    if (slider.classList.contains("left-arrow")){
        shiftd.style.setProperty("--slider_index", shiftd_index-1)
        updateProgressBar(shiftd_index)
    }
}

function updateProgressBar(index){
    let item1 = document.getElementsByClassName("item1")
    let item2 = document.getElementsByClassName("item2")
    let item3 = document.getElementsByClassName("item3")
    switch(index){
        case 0:
            item1.style.backgroundColor = "red"
            item2.style.backgroundColor = "black"
            item3.style.backgroundColor = "green"
            break
    }
}