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
        if(shiftd_index  === 2){
            shiftd.style.setProperty("--slider_index", 0)
            updateProgressBar(0)
        }
        else{
            shiftd.style.setProperty("--slider_index", shiftd_index+1)
            updateProgressBar(shiftd_index+1)
        }
    }
    if (slider.classList.contains("left-arrow")){
        if(shiftd_index  === 0){
            shiftd.style.setProperty("--slider_index", 2)
            updateProgressBar(2)
        }
        else{
            shiftd.style.setProperty("--slider_index", shiftd_index-1)
            updateProgressBar(shiftd_index-1)
        }

    }
}

function updateProgressBar(index){
    const bars = document.getElementsByClassName("bar")
    for(let i=0;i<3;i++){
        bars[i].className = "bar"
        if (i === index){
            bars[i].className = "bar selected-bar"
        }
    }
}