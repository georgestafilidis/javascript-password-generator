const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordOutput = document.getElementById("passwordOutput");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const uppercaseCheck = document.getElementById("uppercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword() {
    const length = parseInt(lengthSlider.value);

    let charPool = LOWERCASE;
    if (uppercaseCheck.checked) charPool += UPPERCASE;
    if (numbersCheck.checked) charPool += NUMBERS;
    if (symbolsCheck.checked) charPool += SYMBOLS;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    passwordOutput.value = password;
}

function copyPassword() {
    if (!passwordOutput.value) return;

    passwordOutput.select();
    navigator.clipboard.writeText(passwordOutput.value);

    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);
}

generatePassword();