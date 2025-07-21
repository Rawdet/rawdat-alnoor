function changeLanguage(lang) {
  const page = window.location.pathname.split("/").pop().split(".")[0];
  if (lang === "ar") {
    // يرجع للمجلد الأساسي
    window.location.href = "/rawdat-alnoor/" + page + ".html";
  } else {
    // يدخل على النسخة الإنجليزية
    window.location.href = "/rawdet-alnoor/en/index.html";
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
