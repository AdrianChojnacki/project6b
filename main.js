// POSSIBLE CHARACTERS
const chars = "ABCDEFGHIJKLMNOPRSTQUWXYZ0123456789";

// SELECTORS
const btn = document.querySelector(`button`);
const section = document.querySelector(`section`);

// FUNCTION VARIABLES
const codesNumber = 10;
const charsNumber = 10;

// FUNCTION
const codesGenerator = () => {
  section.innerHTML = null;

  for (let i = 0; i < codesNumber; i++) {
    let code = "";

    for (let i = 0; i < charsNumber; i++) {
      const index = Math.floor(Math.random() * chars.length);
      code += chars[index];
    }

    const div = document.createElement(`div`);
    div.textContent = code;
    section.appendChild(div);
  }
};

// LISTENER
btn.addEventListener(`click`, codesGenerator);
