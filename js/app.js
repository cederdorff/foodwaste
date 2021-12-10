import SliderPage from "./pages/slider.js";
import BuyPage from "./pages/buy.js";
import SellPage from "./pages/sell.js";
import MessagePage from "./pages/messages.js";
import ProfilePage from "./pages/profile.js";

//components pages
import Signup from "./components/signup.js";
import Login from "./components/login.js";
import Header from "./components/header.js";
import FooterNav from "./components/footerNav.js";

// services
import spaRoutes from "./services/sparoutes.js";
import PageFunctions from "./services/pagesfunctions.js";

//declare and init pages
let sliderpage = new SliderPage();
let signup = new Signup();
let login = new Login();
let header = new Header();
let footer = new FooterNav();
let sell = new SellPage();
let buy = new BuyPage();
let message = new MessagePage();
let profile = new ProfilePage();
let pageFunction = new PageFunctions();
//import "./app.js";

spaRoutes.init();
// _autoSlide.showSlides();

// ==================================================================================
// ==== Følgende funktioner skal placeres i js filer/moduler sammen med onclick event
// ==================================================================================

async function sendMessage() {
    const message = document.querySelector("#message").value;
    const to = document.querySelector("#to").value;
    const from = document.querySelector("#from").value;

    const messageFetch = { message: message, to: to, from: from };
    console.log(messageFetch);

    const response = await fetch("../backend/phpservice/messageHandler.php/?action=send", {
        method: "POST",
        body: JSON.stringify(messageFetch)
    });

    const data = await response.json();
    console.log(data);
}

async function showChain() {
    const to = document.querySelector("#toShow").value;
    const from = document.querySelector("#fromShow").value;

    const users = { to: to, from: from };
    console.log(users);

    const response = await fetch("../backend/phpservice/messageHandler.php/?action=show", {
        method: "POST",
        body: JSON.stringify(users)
    });

    const data = await response.json();
    console.log(data);
    localStorage.setItem("messageChain", data.message);
    console.log(data.message);
}

async function CreatePost() {
    const price = document.querySelector("#price").value;
    const seller = document.querySelector("#seller").value;
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;

    const post = { price: price, seller: seller, name: name, description: description };
    console.log(post);

    const response = await fetch("../backend/phpservice/postHandler.php/?action=create", {
        method: "POST",
        body: JSON.stringify(post)
    });

    const data = await response.json();
    console.log(data);
    //localStorage.setItem("messageChain", data.message);
    //console.log(data.message);
}

async function ShowPost() {
    const search = document.querySelector("#search").value;

    const searchFilter = { search: search };

    const response = await fetch("../backend/phpservice/postHandler.php/?action=showPost", {
        method: "POST",
        body: JSON.stringify(searchFilter)
    });

    const data = await response.json();
    console.log(data);
    //localStorage.setItem("messageChain", data.message);
    //console.log(data.message);
}

// event listeners
//document.querySelector("#btnSend").onclick = () => sendMessage();
//document.querySelector("#btnShow").onclick = () => showChain();
//document.querySelector("#btnCreate").onclick = () => CreatePost();
//document.querySelector("#btnShowPost").onclick = () => ShowPost();
