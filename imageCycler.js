const $ = selector => document.querySelector(selector);

window.onload = cycle;

let bnrCntr = 0;
function cycle () {
    bnrCntr = bnrCntr + 1;
    if (bnrCntr == slides.length)
        bnrCntr = 0;
    let slide_image = $('#slide_image');
    let slide_text = $('#slide_text');
    let slide_link = $('#slide_link');
    slide_image.src = slides[bnrCntr].src;
    slide_text.innerHTML = slides[bnrCntr].caption;
    slide_link.href = slides[bnrCntr].url;

    if (slides[bnrCntr].url.length > 0) {
        slide_image.style.cursor = 'pointer';
        slide_image.onclick = function() {
            window.location.href = slides[bnrCntr].url;
        }
    }
    setTimeout(cycle, 3000);
}
