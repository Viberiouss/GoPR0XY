let search = document.getElementById('search');
let searchStyle = document.getElementById('search');
let iframe = document.getElementById('google');
var elem = document.getElementById("google");

document.addEventListener('keypress', (r) => {
  if (r.key === 'Enter') {
      alert("Request sent, Opening iframe! You may close this window.");
      iframe.src = "https://science.worldfall.ga/?url=www.google.com/search?q="+searchStyle.value;
      iframe.style.display = "block";
    document.addEventListener('keypress', (ev) => {
  if (ev.ctrlKey && ev.key === 'o') {
    iframe.style.display = 'none';
  }
    })
  }
});

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }/* else if (elem.webkitRequestFullscreen) {  (Safari)
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {  (IE11)
    elem.msRequestFullscreen();
 */ }