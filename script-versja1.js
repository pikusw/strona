// funkcja zwracająca dzisiejszą datę
function dzisiejsza_data() {
  let dzisiaj = new Date();
  let dd = String(dzisiaj.getDate()).padStart(2, '0');
  let mm = String(dzisiaj.getMonth() + 1).padStart(2, '0');
  let yyyy = dzisiaj.getFullYear();
  return dd + '.' + mm + '.' + yyyy;
}

// funkcja zwracająca dzisiejszą pogodę
function witaj() {
  return "Cześć, jestem VerukyyChat i lubie pomagać.";
}

// funkcja zwracająca prosty kod html
function strona_html() {
  return "wygenerowana strona jest na google docs oto link: https://docs.google.com/document/d/1LSqS85MoZLNlMrC9hrSptNdmiSp3YGTbxU1EAYCvWZw/edit?usp=sharing";
}

// funkcja obsługująca zapytania użytkownika
function zapytaj() {
  let pytanie = document.getElementById("pytanie").value;
  let wynik = document.getElementById("wynik");
  if (pytanie.includes("data")) {
    wynik.innerText = dzisiejsza_data();
  } else if (pytanie.includes("witaj")) {
    wynik.innerText = witaj();
  } else if (pytanie.includes("strona")) {
    wynik.innerText = strona_html();
  } else if (pytanie.trim() === "") {
    wynik.innerText = "Proszę wpisać pytanie";
  } else {
    wynik.innerText = "Przepraszam, ale nie rozumiem";
  }
}