const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    window.location.href = "/index.html";

});


function downloadImage() {
    const div = document.getElementById("lineup");
    html2canvas(div, {
        useCORS: true,
        allowTaint: false,
    }).then(canvas => {
        const enlace = document.createElement("a");
        enlace.download = "formation.png";
        enlace.href = canvas.toDataURL("image/png");
        enlace.click();
    });
}