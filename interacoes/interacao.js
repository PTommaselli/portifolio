function esconde(){
    let navBar = document.querySelector('#navBar').style.display;

    if(navBar == "flex"){
        document.querySelector('#navBar').style.display = "none";
    }else{
        document.querySelector('#navBar').style.display = "flex";
    }
}

    