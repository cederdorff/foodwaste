//webapp pages

import SliderPage from "./Pages/slider.js";
import BuyPage from "./Pages/buy.js";
import SellPage from "./Pages/sell.js";
import MessagePage from "./Pages/messages.js";
import ProfilePage from "./Pages/profile.js";


//components pages
import SignUp from "./Components/signUp.js";
import LogIn from "./Components/logIn.js";
import Header from "./Components/header.js";
import FooterNav from "./Components/footerNav.js";

//service page
import spaRoutes from "./Services/sparoutes.js";

import PageFunctions from "./Services/pagesfunctions.js";



//declare and init pages
let sliderpage = new SliderPage();
let signup = new SignUp();
let login = new LogIn();
let header = new Header();
let footer = new FooterNav();
let sell = new SellPage();
let buy = new BuyPage();
let message = new MessagePage();
let profile = new ProfilePage();
let pageFunction = new PageFunctions();
//import "./app.js";

//services
spaRoutes.init();
// _autoSlide.showSlides();