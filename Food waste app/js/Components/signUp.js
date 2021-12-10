export default class SignUp {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/
            `
        <main id="signUp" class="page">
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

                            <button type="button" id="btnSignup" onclick=signup()>Sign up</button>
                        </form>
                    
                </div>  
                </div> 
                  
                <div class="parts" id="part3">
                    <h1>Hello, Friend!</h1>
                    <p>Please enter your personal details and start your journey.</p>
                    <div class="inner_child">
                        <p>Already have an account?</p>
                        <a href="#logIn"><button>LOG IN</button></a>
                    </div>
                </div>  

            </section>
        </main>

    `;
    }
}