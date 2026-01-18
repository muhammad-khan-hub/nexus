
var header=document.querySelector(".header");
if(header){
header.innerHTML=`
 <a href="#" class="logo"><img src="logo.png.webp" alt=""></a> 
        <nav>
                <ul>
                   <li> <a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT </a></li>
                    <li><a href="services.html">SERVECES</a></li>
                    <li>PAGES
                    
                    <div class="dropdown">
                    <ul>
                    <li><a href="pricing.html">PRICING</a></li>
                    <li><a href="ELEMENT.HTML">ELEMENTS</a></li>
                    </ul>
                    </div>
                    
                    </li>
                    <li>BLOG 
                    <div class="dropdown-2">
                    <ul>
                     <li><a href="bloges.html">BLOGES</a></li>
                    <li><a href="blogdetailes.html">BLOG DETAILES</a></li>
                    </ul>
                    </div>
                    
                    </li> 
                    <li><a href="contact.html">CONTACT</a></li>
                    
                </ul>
        </nav>
        <a href="#"><button>Free Trial</button></a>
        
        <i class="ri-menu-fill"></i>
`};
  
var mobile=document.querySelector(".mobile-menu");
if(mobile){
mobile.innerHTML=`
 <div class="container">
                <div class="close"><i class="ri-close-line"></i></div>
                <ul >
                    <li><a href="index.html">HOME </a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="services.html">SERVECES</a></li>
                    <li class="pages">
                    <div class="pagpag"><a>PAGES</a></div>
                    <div class="mobile-dropdown">
                    <ul>
                    <li><a href="pricing.html">PRICING</a></li>                
                    <li><a href="ELEMENT.html">ELEMENT</a></li>                
                    </ul>
                    </div>
                    </li>
                    <li class="bloges">
                      <div class="blogblog"><a href="#">BLOG</a></div>                    
                     <div class="mobile-dropdown-2">
                    <ul>
                    <li><a href="bloges.html">BLOGES</a></li>                
                    <li><a href="blogdetailes.html">BLOG DETAILES</a></li>                
                    </ul>
                    </div>         
                    </li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>        
            </div>   
`};
    var opn=document.querySelector(".ri-menu-fill");
    var clos=document.querySelector(".ri-close-line");
      function exer(){
         mobile.style.display="block";
      }
      opn.addEventListener("click",exer);
      function exer2(){
         mobile.style.display="none";
      }
      clos.addEventListener("click",exer2);

var footer=document.querySelector(".footer");
if(footer){
footer.innerHTML=`
 <div class="container">
        <div class="box-1 box">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quia fugit, obcaecati culpa ullam doloremque autem!.<br><br> excepturi magni alias, consectetur repudiandae libero  laudantium  <span><i class="ri-heart-fill"></i> </span> by <span>Colorlib</span></p>
        </div>
        <div class="box-2 box">
            <h2>Newsletter</h2>
            <p>Stay updated with our latest trends</p>
            <div class="inp"><input type="Email" placeholder="Enter Email"> <a href="#"><i class="ri-arrow-right-line"></i></a></div>
        </div>
        <div class="box-3 box">
            <h2>Follow Us</h2>
            <p>Let us be social</p>
            <div class="icons">
            <a href="#"> <i class="ri-facebook-fill"></i></a>
            <a href="#"><i class="ri-twitter-fill"></i></a>
            <a href="#">   <i class="ri-dribbble-line"></i></a>
            <a href="#">   <i class="ri-behance-fill"></i></a>             
                </div>
        </div>
    </div>
`};
