(function () {
  const params = new URLSearchParams(window.location.search);
  const kw = (params.get("keyword") || "").toLowerCase();

  const hero = document.getElementById("dynamic-hero");
  if (!hero) return;

  if (kw.includes("free")) {
    hero.textContent = "Business Website Built Free — You Only Pay for Hosting";
  } else if (kw.includes("upfront") || kw.includes("monthly")) {
    hero.textContent = "No Upfront Website Cost — Website Built Free";
  } else if (kw.includes("hosting")) {
    hero.textContent = "Website + Hosting, Done for You — Built Free";
  } else if (kw.includes("done")) {
    hero.textContent = "Done-For-You Business Website — Built Free";
  }
})();
