let QRimage = document.getElementById("QRimage");
let QRtext = document.getElementById("QRtext");

function generateQR() 
{ 
    if(QRtext.value.length > 0)
    {
        QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(QRtext.value); // Added encodeURIComponent to handle special characters
        QR.classList.add("show-img");
    } 
}
