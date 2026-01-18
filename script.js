

var section3=document.querySelector(".section-3");

if(section3){
section3.innerHTML = `
 <div class="container">
        <div class="upper">
        <button class="btn1">EASY TO USE</button>
            <button class="btn2">UNLIMITED COLORS</button>
            <button class="btn3">UNIQUE FEATURES</button>
            <button class="btn4">UNIQUE FEATURES</button>
        </div>
            
        <div class="lower">
                   <div    class="left"><h2 class="h2">We’ve made a life 
                that will change you</h2>
           <div class="para"> <span>We are here to listen from you deliver exellence</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p></div>
            <div class="btn"><a href="#"><button>Get Started Now</button></a></div></div>
            <div class="right"><img src="chart.jpg.webp" alt=""></div>           
         </div>
</div>
`};
var section4=document.querySelector(".section-4");
if(section4){
section4.innerHTML=`
<div class="container">
        <div class="upper"><h2>UNIQUE SCREENS THAT WORK PERFECTLY</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div>
        <div class="lower"><img src="home-left-1.png (1).webp" alt=""></div>
    </div>
`};
var section5=document.querySelector(".section-5");
if(section5){
section5.innerHTML=`
   <div class="container">
        
            <div class="left"><h2>We’ve made a life 
                that will change you</h2>
           <div class="para"> <span>We are here to listen from you deliver exellence</span>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p></div>
           <div class="btn"><a href="#"><button>Get Started Now</button></a></div></div>
           <div class="right"><img src="browser.png.webp" alt=""></div>
           
           </div>
    `};
           
var btn1=document.querySelector(".section-3 .container .upper .btn1");
var lower=document.querySelector(".section-3 .container .lower");
if(btn1){
btn1.addEventListener("click",()=>{
    btn1.style.backgroundColor=" rgb(49, 184, 184)";
    btn1.style.color="white";
     btn2.style.backgroundColor="white";
    btn2.style.color="black";
    btn3.style.backgroundColor="white";
    btn3.style.color="black";
    btn4.style.color="black";
    btn4.style.backgroundColor="white";
    
    
    lower.innerHTML=` <div class="left"><h2 class="h2">We’ve made a life 
    that will change you</h2>
    <div class="para"> <span>We are here to listen from you deliver exellence</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p></div>
            <div class="btn"><button>Get Started Now</button></div></div>
            <div class="right"><img src="chart.jpg.webp" alt=""></div>`;
})};

var btn2=document.querySelector(".section-3 .container .upper .btn2");
if(btn2){
btn2.addEventListener("click",()=>{

    btn1.style.backgroundColor="white";
    btn1.style.color="black";
    btn2.style.backgroundColor=" rgb(49, 184, 184)";
    btn2.style.color="white";
    btn3.style.backgroundColor="white";
    btn3.style.color=" black";
    btn4.style.backgroundColor=" white";
    btn4.style.color=" black";
  
    
        lower.innerHTML=` <div class="left"><h2 class="h2">2 We’ve made a life 
                that will change you</h2>
           <div class="para"> <span>We are here to listen from you deliver exellence</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p></div>
            <div class="btn"><button>Get Started Now</button></div></div>
            <div class="right"><img src="chart.jpg.webp" alt=""></div>`;
})};


var btn3=document.querySelector(".section-3 .container .upper .btn3");
if(btn3){
btn3.addEventListener("click",()=>{
    
     btn1.style.backgroundColor="white";
    btn1.style.color=" black";
    btn2.style.backgroundColor="white";
     btn2.style.color="black";
     btn3.style.color="white";
     btn3.style.backgroundColor=" rgb(49, 184, 184)";
     btn4.style.color="black";
     btn4.style.backgroundColor=" white";
                                        
     
     lower.innerHTML=` <div class="left"><h2 class="h2">3 We’ve made a life 
     that will change you</h2>
     <div class="para"> <span>We are here to listen from you deliver exellence</span>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p></div>
     <div class="btn"><button>Get Started Now</button></div></div>
     <div class="right"><img src="chart.jpg.webp" alt=""></div>`;                                                      
    })};
    
var btn4=document.querySelector(" .section-3 .container .upper .btn4");
if(btn4){
btn4.addEventListener("click",()=>{

    btn1.style.backgroundColor="white";
    btn1.style.color=" black";
    btn2.style.backgroundColor="white";
    btn2.style.color="black";
    btn3.style.color="black";
    btn3.style.backgroundColor="white";
    btn4.style.color="white";
    btn4.style.backgroundColor="rgb(49, 184, 184)";



    lower.innerHTML=` <div class="left"><h2 class="h2">4 We’ve made a life 
                  that will change you</h2>
             <div class="para"> <span>We are here to listen from you deliver exellence</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p></div>
              <div class="btn"><button>Get Started Now</button></div></div>
              <div class="right"><img src="chart.jpg.webp" alt=""></div>`;
  })};



  var section9=document.querySelector(".section-9");
 if(section9){
  section9.innerHTML=`
  <div class="container">
          <h2>Got Impressed to our features?</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
  <div class="btn"><a href="#">request free demo</a></div>
  </div>
  `};


