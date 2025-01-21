const burgerImages= document.querySelectorAll('.burger img');
const toggleImages= document.querySelectorAll('.toggle img');
let currentIndex=0;

toggleImages[currentIndex].classList.add('active');
burgerImages.forEach((img,index) => {

    img.addEventListener('click',() =>{
        toggleImages.forEach(toggleImg => toggleImg.classList.remove('active'));
        toggleImages[currentIndex].classList.add('active');
        toggleImages[currentIndex].src = burgerImages[index].src;
        currentIndex=(currentIndex + 1)%toggleImages.length;
    });
});
  


function createStars(){
    const starscontainer = document.getElementsById('stars');
    const windowWidth = window.innerWidth;
    const windowHeight= windowHeight;

    for (let i=0; 1<100; i++){
        const star = document.createElement('div');
        star.className ='star';
        star.style.left =`${math.random() * windowWidth}px`;
        star.style.top =`${math.random() * windowHeight}px`;
        starscontainer.appendChild(star);
    }
}
window.addEventListener('load',createStars);