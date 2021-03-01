let shareBtnFlag = 0;
const shareButton =() =>{
    // const share_screen = document.querySelector('.share_screen');
    // if(shareBtnFlag){
    //     console.log(shareBtnFlag);
    //     share_screen.style.height = "0"
    //     shareBtnFlag=0;
    // }
    // else{
    //     console.log(shareBtnFlag);
    //     share_screen.style.height = "300px"
    //     shareBtnFlag = 1;

    // }

    

}

document.querySelector(".whatsppBtn").addEventListener("click",function(e){
    
    const mobNumner = document.querySelector('#whatsppNumber').value;
    console.log(mobNumner);
    if(mobNumner.length<9){
        e.preventDefault();
      
        alert("Mobile Number not valid");
        
    }
    else{
       const whatsAppAnchor = document.querySelector(".whatsppBtn");
       console.log(whatsAppAnchor);
       whatsAppAnchor.href = "https://wa.me/"+mobNumner+"?text=hi there";
    }
    

})

// const shareWhatsApp =() =>{

//     const mobNumner = document.querySelector('#whatsppNumber').value;
//     if(mobNumner>8)
//     {
        
//     }
//     console.log(mobNumner);
// }

