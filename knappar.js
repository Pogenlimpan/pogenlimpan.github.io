let kolvknapp = document.getElementsByClassName("kolv")
kolvknapp[0].addEventListener("click", function(){
    let motorinfogrund = document.querySelectorAll(".motorinfogrund ")
    for(let i = 0;i<motorinfogrund.length;i++){
        motorinfogrund[i].classList.add("hidden");

    }
    let kolvinfogrund = document.querySelectorAll(".kolvinfogrund ")
    for(let i = 0;i<kolvinfogrund.length;i++){
        kolvinfogrund[i].classList.remove("hidden");

    }
    kolvknapp[0].classList.add("hidden")
    let tillbakaknapp = document.getElementsByClassName("tillbakaknapp")
    tillbakaknapp[0].classList.remove("hidden");

    
    
})
let tillbakaknapp = document.getElementsByClassName("tillbakaknapp")
tillbakaknapp[0].addEventListener("click", function(){
    let motorinfogrund = document.querySelectorAll(".motorinfogrund ")
    for(let i = 0;i<motorinfogrund.length;i++){
        motorinfogrund[i].classList.remove("hidden");

    }
    let kolvinfogrund = document.querySelectorAll(".kolvinfogrund ")
    for(let i = 0;i<kolvinfogrund.length;i++){
        kolvinfogrund[i].classList.add("hidden");

    }
    kolvknapp[0].classList.remove("hidden")
    let tillbakaknapp = document.getElementsByClassName("tillbakaknapp")
    tillbakaknapp[0].classList.add("hidden");

})