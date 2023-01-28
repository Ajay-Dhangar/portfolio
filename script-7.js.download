// get theme name
var path = location.pathname.split("/");
if (path[path.length - 1].indexOf(".html") > -1) {
  path.length = path.length - 1;
}
var theme = path.join("");

// variables
document.getElementById("demoLink").src = "site/index.html";
document.getElementById("title").innerHTML = theme;
let ghtButton = document.querySelector(".ght-download");
let tfButton = document.querySelector(".tf-download");
if (ghtButton) {
  ghtButton.href = `https://gethugothemes.com/products/${theme}/?utm_source=demo_banner&utm_medium=referral&utm_campaign=demo_banner_download_btn`;
}
if (tfButton) {
  tfButton.href = `https://themefisher.com/products/${theme}-hugo/?utm_source=demo_banner&utm_medium=referral&utm_campaign=demo_banner_download_btn`;
}
// preloader
// setTimeout(function () {
//   document.querySelector(".demo-loader").classList.add("fadeOut");
// }, 4000);

// logo wrapper
var logoWrapper = document.querySelector(".logo-wrapper");
logoWrapper.innerHTML = `
<div class="site-logo gethugothemes">
  <a href="https://gethugothemes.com/"><img src="../icons/ght-logo.png" width="150" alt="gethugothemes logo"></a>
</div>
<div class="site-logo themefisher">
  <a href="https://themefisher.com/"><img src="../icons/tf-logo.png" width="170" style="padding: 5px 0;" alt="themefisher logo"></a>
</div>
`;

// demo switcher
var demoSwitcher = document.querySelector(".demo-switch");
demoSwitcher.innerHTML = `
<button type="button" class="demo-switch-desktop active" aria-label="Toggle Desktop" title="Desktop Mode">
  <svg viewBox="0 0 344.000000 344.000000">
    <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)" fill="currentColor">
      <path
        d="M392 2855 c-62 -19 -106 -57 -136 -117 l-26 -52 0 -902 c0 -764 2 -908 15 -943 l14 -41 -129 0 -130 0 0 -71 c0 -40 6 -90 12 -113 16 -54 93 -131 144 -145 55 -15 3073 -15 3128 0 51 14 128 91 144 145 6 23 12 73 12 113 l0 71 -130 0 -129 0 14 41 c13 35 15 179 15 943 l0 902 -26 52 c-30 61 -74 98 -140 118 -68 20 -2586 20 -2652 -1z m2588 -1075 l0 -860 -456 -2 -456 -3 -12 -34 c-6 -19 -24 -44 -39 -55 -27 -20 -41 -21 -242 -21 l-214 0 -30 29 c-16 16 -33 42 -36 57 l-7 29 -514 0 -514 0 0 860 0 860 1260 0 1260 0 0 -860z" />
    </g>
  </svg>
</button>
<button type="button" class="demo-switch-tablet" aria-label="Toggle tablet" title="Tablet Mode">
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
      d="M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z"
      clip-rule="evenodd"></path>
    <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
  </svg>
</button>
<button type="button" class="demo-switch-mobile" aria-label="Toggle Mobile" title="Mobile Mode">
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
      d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
      clip-rule="evenodd"></path>
    <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
  </svg>
</button>
`;

// browser preview device toggle
var demoBlock = document.querySelector(".demo-content");
if (demoBlock) {
  var toogleDesktop = document.querySelector(".demo-switch-desktop");
  var toogleTablet = document.querySelector(".demo-switch-tablet");
  var toogleMobile = document.querySelector(".demo-switch-mobile");

  toogleDesktop.addEventListener("click", function () {
    demoBlock.classList.remove("demo-mobile");
    demoBlock.classList.remove("demo-tablet");
  });
  toogleTablet.addEventListener("click", function () {
    demoBlock.classList.add("demo-tablet");
    demoBlock.classList.remove("demo-mobile");
  });
  toogleMobile.addEventListener("click", function () {
    demoBlock.classList.add("demo-mobile");
    demoBlock.classList.remove("demo-tablet");
  });
}
document.addEventListener("DOMContentLoaded", function (event) {
  var demoSwitch = document.querySelectorAll(".demo-switch button");
  if (demoSwitch) {
    demoSwitch.forEach(function (el, key) {
      el.addEventListener("click", function () {
        el.classList.add("active");
        demoSwitch.forEach(function (ell, els) {
          if (key !== els) {
            ell.classList.remove("active");
          }
        });
      });
    });
  }
});

// site reference
var url = new URL(window.location.href);
var ref = url.searchParams.get("ref");
var ghtOnly = document.querySelectorAll(".gethugothemes");
var tfOnly = document.querySelectorAll(".themefisher");
if (ref === "themefisher") {
  [].forEach.call(ghtOnly, function (e) {
    e.style.display = "none";
  });

  [].forEach.call(tfOnly, function (e) {
    e.style.display = "block";
  });
} else {
  [].forEach.call(ghtOnly, function (e) {
    e.style.display = "block";
  });

  [].forEach.call(tfOnly, function (e) {
    e.style.display = "none";
  });
}

// frame hide/show
var demoHeader = document.querySelector(".demo-header");
var headerToggle = document.querySelector(".demo-header-toggler");
var demoWrapper = document.querySelector(".demo-wrapper");
headerToggle.addEventListener("click", function () {
  headerToggle.classList.toggle("active");
  demoHeader.classList.toggle("close");
  demoWrapper.classList.toggle("full-view");
});
