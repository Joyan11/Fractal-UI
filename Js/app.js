const clickHandler = () => {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
};

document.querySelector(".ham-menu").addEventListener("click", clickHandler);
