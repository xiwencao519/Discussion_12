let pokemonList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];
// Answers

// Answers

// Question 1
document.getElementById("host-name").textContent = "Xiwen Cao";
document.getElementById("collaborator-name").textContent = "Zhile Wu";
document.getElementById("collaborator-2-name").textContent = "Xilong Yin";



// Question 2
// You can also create their own CSS classes in style.css file and use that. 
const instructionButton = document.getElementById("instruction_button");
const instructions = document.querySelectorAll(".question");
let instructionsVisible = true;

instructionButton.addEventListener("click", toggleInstructions);
document.addEventListener("keydown", (event) => {
    if (event.key === "i") toggleInstructions();
});

function toggleInstructions() {
    instructionsVisible = !instructionsVisible;
    instructions.forEach(instruction => {
        instruction.style.display = instructionsVisible ? "block" : "none";
    });
    instructionButton.textContent = instructionsVisible ? "Hide Instructions" : "Show Instructions";
}



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
let firstNameInput = document.getElementById("first_name");
let lastNameInput = document.getElementById("last_name");

firstNameInput.addEventListener("input", function(){
    if (firstNameInput.value.toLowerCase() === "john") {
        lastNameInput.value = "Doe";
    }else{
        lastNameInput.value = "";
    }
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.
const usernameInput = document.getElementById("user_name");
const usernameAlert = document.getElementById("username-alert");

usernameInput.addEventListener("input", function(){ 
    const enteredUsername = usernameInput.value.trim();
    let usernameExsits = false;
    for (let username of pokemonList) {
        if (username.toLowerCase() === enteredUsername.toLowerCase()) {
            usernameExsits = true;
            break;
    }
    }
    if (usernameExists){
        usernameAlert.textContent = "Username already exists"
    }
    else {
        usernameAlert.textContent = "Unique username created";
    }});


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const passwordAlert = document.getElementById("password-alert");
const hidePasswordButton = document.getElementById("hide-password");
let passwordVisible = true;

passwordInput.addEventListener("input", checkPasswords);
confirmPasswordInput.addEventListener("input", checkPasswords);

hidePasswordButton.addEventListener("click", togglePasswordVisibility);
document.addEventListener("keydown", (event) => {
    if (event.key === "h") togglePasswordVisibility();
});

function checkPasswords() {
    passwordAlert.textContent = passwordInput.value === confirmPasswordInput.value ? "Password Matches" : "Password does not match";
}

function togglePasswordVisibility() {
    passwordVisible = !passwordVisible;
    passwordInput.type = passwordVisible ? "text" : "password";
    confirmPasswordInput.type = passwordVisible ? "text" : "password";
    hidePasswordButton.textContent = passwordVisible ? "Hide Password" : "Show Password";
}


//Question 6
const radioResetButton = document.getElementById("radio-reset-button");
radioResetButton.addEventListener("click", () => {
    document.querySelectorAll("input[name='favorite_day']").forEach(radio => radio.checked = false);
});




//Question 7
const profilePicInput = document.getElementById("profile_pic");
profilePicInput.addEventListener("change", () => {
    const file = profilePicInput.files[0];
    if (file && file.size > 100 * 1024) { 
        alert("File size exceeds 100KB");
        profilePicInput.value = "";
    }
});



//Question 8
let colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("input", function(event) {
    let selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
});



//Question 9 
const resetFormButton = document.querySelector(".reset-form-button");

resetFormButton.addEventListener("click", resetForm);
document.addEventListener("keydown", (event) => {
    if (event.key === "r") resetForm();
});

function resetForm() {
    document.querySelector("form").reset();
    document.getElementById("username-alert").textContent = "Username alert text";
    document.getElementById("password-alert").textContent = "Password alert text";
}

