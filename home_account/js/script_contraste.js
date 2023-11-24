var bodyElement = document.body;

 function toggleContrast(){
    bodyElement.classList.toggle("high-contrast")
};

function toggleReading(){
    bodyElement.classList.toggle("reading-mode")
};

function toggleFont(){
    bodyElement.classList.toggle("font-size")
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}