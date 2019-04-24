let i = 0;

window.addEventListener('scroll', () => {
    let scrollTop = $(document).scrollTop() + window.innerHeight;

    if (scrollTop >= ($('#who-we-are')[0].offsetTop + 200)) {
        if (i === 0) {
            $('#who-we-are').addClass('animation');
            timeID('#who-we-are')
        } else {
            return
        }
        i++;
    }
})

function timeID(element) {
    setTimeout(() => {
        $(element).removeClass('animation');
    }, 800);
}