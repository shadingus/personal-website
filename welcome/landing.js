function goToDash() {
  const page = document.getElementById("page");
  page.classList.add("load-dash");
  setTimeout(function () {
    window.location.href = "../dashboard/dashboard.html";
  }, 2000);
}