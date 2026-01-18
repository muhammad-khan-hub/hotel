document.addEventListener("DOMContentLoaded", () => {
  // all your code here
  
  var header=document.querySelector(".header");
header.innerHTML=`
<h1><a href="#">suites</a></h1>
    <nav>
        <ul>
      <a href="index.html"> <li class="home">HOME </li></a>
                       <a href="#"> <li class="rooms" >  ROOMS <i class="ri-arrow-drop-down-line first-icon"></i>
                <div class="scroll-down-1">
                <ul>
                <a href="room.html"><li>standard room</li></a>
                <a href="room.html"><li>family room</li></a>
                <a href="room.html"><li>single room</li></a>
                <a href="room.html"><li class="rooms-2">rooms <i class="ri-arrow-drop-right-line second-icon"></i>
                    <div class="scroll-down-2">
                        <ul>
                       <a href="room.html "> <li>america</li></a>
                        <a href="room.html"><li>pakistan</li></a>
                        <a href="room.html"><li>india</li></a>
                        <a href="room.html"><li>london</li></a>
                        </ul></div>
                        </li></a>
                </ul></div></li></a>
            <a href="events.html"><li>EVENTS</li></a>
            <a href="about.html"><li>ABOUT </li></a>
            <a href="contact.html"><li>CONTACT</li></a>
            </ul>
            </nav>
            <a href="#" class="menu-icon"><i class="ri-menu-line"></i></a>
            `;
var mobilemenu=document.querySelector(".mobile-menu");
mobilemenu.innerHTML=`
                 <i class="ri-close-fill closs-icon"></i>
            
                <ul>
                    <li><a href="index.html">home</a></li>
                   <li class="mobile-scroll-down"> <a href="#" >rooms </a><i class="ri-arrow-drop-down-line first-icon"></i>
                    <ul class="ms-ul">
                       <li><a href="#">standard room</a></li>
                       <li><a href="#">family room</a></li>
                       <li><a href="#">single room</a></li>
                       <li class="mobile-scroll-down-2"><a href="#">rooms</a><i class="ri-arrow-drop-down-line second-icon"></i>
                       
                           <ul class="ms-ul-2">
                            <li><a href="#">one</a></li>
                            <li><a href="#">two</a></li>
                            <li><a href="#">three</a></li>
                            <li><a href="#">four</a></li>
                           </ul>   
                              </li>   
                    </ul>
                    </li>
                     <li><a href="events.html">event</a></li>
                    <li><a href="about.html">about</a></li>
                    <li><a href="contact.html">contact</a></li>
                </ul>
            `;
     
var menu_icon=document.querySelector(".menu-icon");
    menu_icon.addEventListener("click",()=>{
        mobilemenu.style.right="0%";
    });
var closs_icon=document.querySelector(".closs-icon");
closs_icon.addEventListener("click",()=>{
    mobilemenu.style.right="-100%";
});

// var mobilemenu=document.querySelector(".mobile-menu")

var footer =document.querySelector(".footer");
footer.innerHTML=`
<div class=" container">
<div class="upper">
    <div class="box box-1"><h2>about</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p> <div><a href="#">read more</a></div></div>
    <div class="box box-2">
        <h2>quick menu</h2> 
        <ul>
            <a href="#"><li>about</li></a>
            <a href="#"><li>secvices</li></a>
            <a href="#"><li>approach</li></a>
            <a href="#"><li>sastainability</li></a>
            <a href="#"><li>news</li></a>
            <a href="#"><li>careers</li></a>
        </ul>
    </div>
    <div class="box box-3">
        <h2>ministries</h2> 
        <ul>
            <a href="#"><li>children</li></a>
            <a href="#"><li>women</li></a>
            <a href="#"><li>book study</li></a>
            <a href="#"><li>mosque</li></a>
            <a href="#"><li>missionaries</li></a>
            </ul></div>
    <div class="box box-4">
        <h2>social icons</h2>
        <div class="icons">
          <a href="#"><i class="ri-facebook-fill"></i></a>
          <a href="#"><i class="ri-twitter-fill"></i></a>
          <a href="#"><i class="ri-instagram-line"></i></a>
          <a href="#"><i class="ri-vimeo-line"></i></a>      
        </div>
    </div>
</div>
<div class="lower"><p>Copyright © 2025 All Rights Reserved | This template is made with <i class="ri-heart-fill"></i> by <span><a href="#">Colorlib</a></span></p></div>
</div>
`});


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,








// document.addEventListener("DOMContentLoaded", () => {
//   // Inject header content
//   const header = document.querySelector(".header");
//   if (header) {
//     header.innerHTML = `
//       <h1><a href="#">suites</a></h1>
//       <nav>
//         <ul>
//           <li class="home"><a href="index.html">HOME</a></li>
//           <li class="rooms">
//             <a href="#">ROOMS <i class="ri-arrow-drop-down-line first-icon"></i></a>
//             <div class="scroll-down-1">
//               <ul>
//                 <li><a href="room.html">standard room</a></li>
//                 <li><a href="room.html">family room</a></li>
//                 <li><a href="room.html">single room</a></li>
//                 <li class="rooms-2">
//                   <a href="#">rooms <i class="ri-arrow-drop-right-line second-icon"></i></a>
//                   <div class="scroll-down-2">
//                     <ul>
//                       <li><a href="room.html">america</a></li>
//                       <li><a href="room.html">pakistan</a></li>
//                       <li><a href="room.html">india</a></li>
//                       <li><a href="room.html">london</a></li>
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li><a href="events.html">EVENTS</a></li>
//           <li><a href="about.html">ABOUT</a></li>
//           <li><a href="contact.html">CONTACT</a></li>
//         </ul>
//       </nav>
//       <a href="#" class="menu-icon"><i class="ri-menu-line"></i></a>
//     `;
//   }

//   // Inject mobile menu content
//   const mobilemenu = document.querySelector(".mobile-menu");
//   if (mobilemenu) {
//     mobilemenu.innerHTML = `
//       <i class="ri-close-fill closs-icon"></i>
//       <ul>
//         <li><a href="#">home</a></li>
//         <li class="mobile-scroll-down">
//           <a href="#">rooms</a> <i class="ri-arrow-drop-down-line first-icon"></i>
//           <ul class="ms-ul">
//             <li><a href="#">standard room</a></li>
//             <li><a href="#">family room</a></li>
//             <li><a href="#">single room</a></li>
//             <li class="mobile-scroll-down-2">
//               <a href="#">rooms</a> <i class="ri-arrow-drop-down-line second-icon"></i>
//               <ul class="ms-ul-2">
//                 <li><a href="#">one</a></li>
//                 <li><a href="#">two</a></li>
//                 <li><a href="#">three</a></li>
//                 <li><a href="#">four</a></li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li><a href="#">event</a></li>
//         <li><a href="#">about</a></li>
//         <li><a href="#">contact</a></li>
//       </ul>
//     `;

//     // Add toggle behavior after innerHTML is set
//     const closs_icon = mobilemenu.querySelector(".closs-icon");
//     const menu_icon = document.querySelector(".menu-icon");

//     if (menu_icon) {
//       menu_icon.addEventListener("click", () => {
//         mobilemenu.style.right = "0%";
//       });
//     }

//     if (closs_icon) {
//       closs_icon.addEventListener("click", () => {
//         mobilemenu.style.right = "-100%";
//       });
//     }
//   }

//   // Inject footer content
//   const footer = document.querySelector(".footer");
//   if (footer) {
//     footer.innerHTML = `
//       <div class="container">
//         <div class="upper">
//           <div class="box box-1">
//             <h2>about</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
//             <div><a href="#">read more</a></div>
//           </div>
//           <div class="box box-2">
//             <h2>quick menu</h2>
//             <ul>
//               <li><a href="#">about</a></li>
//               <li><a href="#">services</a></li>
//               <li><a href="#">approach</a></li>
//               <li><a href="#">sustainability</a></li>
//               <li><a href="#">news</a></li>
//               <li><a href="#">careers</a></li>
//             </ul>
//           </div>
//           <div class="box box-3">
//             <h2>ministries</h2>
//             <ul>
//               <li><a href="#">children</a></li>
//               <li><a href="#">women</a></li>
//               <li><a href="#">book study</a></li>
//               <li><a href="#">mosque</a></li>
//               <li><a href="#">missionaries</a></li>
//             </ul>
//           </div>
//           <div class="box box-4">
//             <h2>social icons</h2>
//             <div class="icons">
//               <a href="#"><i class="ri-facebook-fill"></i></a>
//               <a href="#"><i class="ri-twitter-fill"></i></a>
//               <a href="#"><i class="ri-instagram-line"></i></a>
//               <a href="#"><i class="ri-vimeo-line"></i></a>
//             </div>
//           </div>
//         </div>
//         <div class="lower">
//           <p>Copyright © 2025 All Rights Reserved | This template is made with
//             <i class="ri-heart-fill"></i> by
//             <span><a href="#">Colorlib</a></span>
//           </p>
//         </div>
//       </div>
//     `;
//   }
// });
