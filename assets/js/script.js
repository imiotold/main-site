const hoverLinks = document.querySelectorAll(".our_way_hover");
const hoverTexts = document.querySelectorAll(".our_way_para");
const hoverPara = document.querySelectorAll(".product_inlist")
const hoverProductDetails = document.querySelectorAll(".product_details")

for (let i = 0; i < hoverLinks.length; i++) {
    hoverLinks[i].addEventListener("mouseenter", function() {
      
        hoverLinks.forEach(function(hoverLink) {
            hoverLink.classList.remove("our_way_inlist_hover");
           
            
          });
          
          hoverLinks[i].classList.add("our_way_inlist_hover");
    

  
      hoverTexts.forEach(function(hoverText) {
        hoverText.style.display = "none";
       
      });

      hoverTexts[i].style.display = "block";
      
    });

   

  }


  



  for (let i = 0; i < hoverPara.length; i++) {
    hoverPara[i].addEventListener("mouseenter", function() {
        
        hoverPara[i].classList.toggle("product_hover")
    
        hoverProductDetails[i].classList.toggle("product_details_display")

        
        
      });

      hoverPara[i].addEventListener("mouseleave", function() {
        
        hoverPara[i].classList.remove("product_hover")
    
        hoverProductDetails[i].classList.remove("product_details_display")

        
        
      });

      
  }

//   scroll

  const slider = document.querySelector('.team_list');
  const sliders = document.querySelector('.product_list');

  let isDown = false;
  let startX;
  let scrollLeft;
  
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });


  sliders.addEventListener('mousedown', (e) => {
    isDown = true;
    sliders.classList.add('active');
    startX = e.pageX - sliders.offsetLeft;
    scrollLeft = sliders.scrollLeft;
  });
  sliders.addEventListener('mouseleave', () => {
    isDown = false;
    sliders.classList.remove('active');
  });
  sliders.addEventListener('mouseup', () => {
    isDown = false;
    sliders.classList.remove('active');
  });
  sliders.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliders.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    sliders.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });





  

// drawer = document.querySelector(".drawer")
// drawer.onclick = function () {
//     navBar = document.querySelector(".right_head")
//     navBar.classList.toggle("active")
// }




