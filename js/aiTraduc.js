const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");
const btnBg = document.getElementById("btn-bg");

const test = document.getElementById("test");

const text = {
  es: {
    test: "Hola, mundo!"
  },
  en: {
    test: "Hello, World!"
  },
  bg: {
    test: "Здравей свят!"
  }
};

const selectedLanguage = localStorage.getItem("selectedLanguage") || "es";
test.textContent = text[selectedLanguage].test;

btnEs.addEventListener("click", function () {
  localStorage.setItem("selectedLanguage", "es");
  test.textContent = text.es.test;
});

btnEn.addEventListener("click", function () {
  localStorage.setItem("selectedLanguage", "en");
  test.textContent = text.en.test;
});

btnBg.addEventListener("click", function () {
  localStorage.setItem("selectedLanguage", "bg");
  test.textContent = text.bg.test;
});