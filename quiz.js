const ganga = document.getElementById("op1");
const nile = document.getElementById("op2");
const amazon = document.getElementById("op3");
const congo = document.getElementById("op4");
const listcontainer = document.getElementById("one");

listcontainer.addEventListener("click", function(e){

// console.log(e);
if(e.target.id === "op1id"){

ganga.style.backgroundColor = "#fb0000a3";
nile.style.backgroundColor = "#53f50170";
// amazon.style.background = "white";
// congo.style.background = "white";
}
else if(e.target.id === "op2id"){

nile.style.backgroundColor = "#53f50170";
// ganga.style.background = "white";
// amazon.style.background = "white";
// congo.style.background = "white";
}

else if(e.target.id === "op3id"){
    amazon.style.backgroundColor = "#fb0000a3";
    nile.style.backgroundColor = "#53f50170";
    // ganga.style.background = "white";
    // congo.style.background = "white";
    }


else {
    congo.style.backgroundColor = "#fb0000a3";
    // ganga.style.background = "white";
    // amazon.style.background = "white";
    // nile.style.background = "white";
}

});


// try cap no cap words sometimes
// script tag always at the end of body
// always try to use getelementbyid
// check with even object always , like above by printing it 
// always try to use getelementbyid cause getelementbyclassname returns an array

