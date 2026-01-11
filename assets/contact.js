(function () {
  const select = document.getElementById("website_type");

  if (select) {
    select.addEventListener("change", () => {
      if (select.value === "ecommerce") {
        alert(
          "NimbusSites does not support ecommerce websites. Please select a different website type."
        );
        select.value = "";
      }
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();