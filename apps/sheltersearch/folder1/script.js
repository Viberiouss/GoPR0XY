let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
const popup = open("about:blank", "_blank")
if (!popup || popup.closed) {
  alert("Popups are disabled!")
} else {
  const doc = popup.document
  const iframe = doc.createElement("iframe")
  const style = iframe.style
  const img = doc.createElement("link")

  img.rel = "icon"
  img.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"
  doc.title = "Google Drive"

  iframe.src = location.href
  style.position = "fixed"
  style.top = style.bottom = style.left = style.right = 0
  style.border = style.outline = "none"
  style.width = style.height = "100%"

  doc.body.appendChild(iframe)
  location.replace("https://google.com")
    }
}

let search = document.getElementById('search').value;
let searchStyle = document.getElementById('search');
let iframe = document.getElementById('google');
var elem = document.getElementById("google");

document.addEventListener('keypress', (r) => {
  if (r.key === 'Enter') {
      alert("Request sent, Opening iframe! You may close this window.");
      iframe.src = "https://bing.com?q="+searchStyle.value;
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
