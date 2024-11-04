let check = document.getElementById("trocar")
let main1 = document.getElementById("centralizar")
let imgGit = document.getElementById("imgGit")
let imgWhats=document.getElementById("whats")
let imgInsta=document.getElementById("insta")
let joao=document.getElementById("main")
let nav=document.getElementById("nav")

function teste(){
    
    
   
    if(check.checked){
        joao.style.backgroundColor="#393939" 
        joao.style.color="white"
        joao.style.textDecorationColor="white"

        nav.style.backgroundColor="#474747"
        nav.style.color="white  "
        main1.style.backgroundColor="rgb(57, 57, 57)"
        joao.style.borderColor="white"
        imgGit.src = "githubBranco.png"
        imgWhats.src="whatsapp.png"
        imgInsta.src="instagramBranco.png"

    }
    else {
        main.style.color="black"
        main.style.backgroundColor = "white"
        main1.style.backgroundColor="white"
        joao.style.borderColor="black"
        imgGit.src = "Github.png"
        imgWhats.src="whatsapp 1.png"
        imgInsta.src="instagram.png"

        nav.style.backgroundColor="#D9D9D9"
        nav.style.color="black"

        joao.style.backgroundColor="white"
        joao.style.color="black"


    }
}
let imgE=document.getElementById("ft");
let bloco=document.getElementById("bntBloco")

function displayblock(){
    imgE.classList.toggle("block")
    joao.classList.toggle("none")
    bloco.classList.toggle("blocoBlock")
}





