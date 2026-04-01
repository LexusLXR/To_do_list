const float = document.getElementById("float")
const addBtn = document.getElementById("addBtn")
const closefloat = document.getElementById("closefloat")

//open floating window
addBtn.addEventListener("click", function(){
    float.style.display = "flex";
});

//close model
closefloat.addEventListener("click", function(){
    float.style.display = "none";
});

