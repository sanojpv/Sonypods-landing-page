
let mainContent=document.getElementById('main-containers');
let secondImage=document.getElementById('second-img');


let firstimage=document.getElementById('first-img');
firstimage.addEventListener('mouseover',()=>{
  mainContent.style.backgroundImage='url("https://sony.scene7.com/is/image/sonyglobalsolutions/Headphones-primary%20tout-mobile-1534x1083?$toutMobile$&fmt=png-alpha")';
    mainContent.style.backgroundSize = 'cover';
    mainContent.style.backgroundPosition = 'center';
    mainContent.style.backgroundRepeat = 'no-repeat';
  
}
)
secondImage.addEventListener("mouseover",()=>{
    mainContent.style.backgroundImage='url("https://helios-i.mashable.com/imagery/articles/06poFZ04VznTN9BlqUwMjjB/hero-image.fill.size_1200x900.v1744724863.png")'

    mainContent.style.height="90vh"
  mainContent.style.backgroundSize = 'cover';
    mainContent.style.backgroundPosition = 'center';
    mainContent.style.backgroundRepeat = 'no-repeat';
})