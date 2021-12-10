export default class Signup {
    constructor() {
        this.template();
        this.attachEvents();
    }

    template() {
        document.querySelector("#webapp").innerHTML +=
            /*html*/
            `
        <section id="signup" class="page">
            <section class="pages_body" id="signup_body">
                <div class="parts">
                    <img id="part1" src="/Images/app/BSSFood.png" alt="">
                
                <!-- signup form -->  
                <div class="parts" id="part2">
                    <header class="topbar">
                        <h1>Sign Up</h1>
                     </header>
                    <p> please enter your personal details to continue with the app.</p>

                        <form class="form_container">

                            <input id="signupFirstname" type="text" name="firstname" placeholder="Firstname">
                            <input id="signupLastname" type="text" name="lastname" placeholder="Lastname">
                            <input id="signupCity" type="text" name="city" placeholder="City name">
                            <input id="signupMail" type="text" name="email" placeholder="Email">
                            <input id="signupPhone" type="number" name="phone" placeholder="Phone number">
                            <input id="signupPassword" type="password" placeholder="Password" autocomplete="new-password">
                            <input id="signupPasswordConfirm" type="password" placeholder="Confirm password" autocomplete="new-password">

                            <button type="button" id="btnSignup">Sign up</button>
                        </form>
                    
                </div>  
                </div> 
                  
                <div class="parts" id="part3">
                    <h1>Hello, Friend!</h1>
                    <p>Please enter your personal details and start your journey.</p>
                    <div class="inner_child">
                        <p>Already have an account?</p>
                        <a href="#login"><button>LOG IN</button></a>
                    </div>
                </div>  

            </section>
        </section>

    `;
    }

    async signup() {
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

    attachEvents() {
        document.querySelector("#btnSignup").onclick = () => this.signup();
    }
}
