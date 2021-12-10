import spaRoutes from "./Services/spaRoutes.js";


async function login() {
	const mail = document.querySelector("#loginMail").value;
	const password = document.querySelector("#loginPassword").value;
	const user = { mail: mail, password: password };
	console.log(user);

	const response = await fetch("../backend/phpservice/login.php", {
		method: "POST",
		body: JSON.stringify(user)
	});

	const data = await response.json();
	console.log(data);
	localStorage.setItem("loggedUser", data.user);
	console.log(data.user);
    spaRoutes.showPage('#buy');
	
}

async function signup() {
	const firstname = document.querySelector("#signupFirstname").value;
	const lastname = document.querySelector("#signupLastname").value;
	const mail = document.querySelector("#signupMail").value;
	const password = document.querySelector("#signupPassword").value;
	const city = document.querySelector("#signupCity").value;
	const phone = document.querySelector("#signupPhone").value;
	const passwordCheck = document.querySelector("#signupPasswordConfirm").value;

	const user = { firstname, lastname, mail, password, city, phone, passwordCheck };
	console.log(user);

	const response = await fetch("../backend/phpservice/signup.php", {
		method: "POST",
		body: JSON.stringify(user)
	});

	const data = await response.json();
	console.log(data);
	
}
async function sendMessage(){
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

async function showChain(){
	
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

async function CreatePost(){
	
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

async function ShowPost(){
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
document.querySelector("#btnLogin").onclick = () => login();
//document.querySelector("#btnSignup").onclick = () => signup();
//document.querySelector("#btnSend").onclick = () => sendMessage();
//document.querySelector("#btnShow").onclick = () => showChain();
//document.querySelector("#btnCreate").onclick = () => CreatePost();
//document.querySelector("#btnShowPost").onclick = () => ShowPost();
