function changeLanguage(lang) {
  const page = window.location.pathname.split("/").pop().split(".")[0];
  if (lang === "ar") {
    window.location.href = "/" + page + ".html";
  } else {
    window.location.href = "/rawdat-alnoor/en/" + page + ".html";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select');
  if (window.location.pathname.includes('/en/')) {
    select.value = 'en';
  } else {
    select.value = 'ar';
  }
});
