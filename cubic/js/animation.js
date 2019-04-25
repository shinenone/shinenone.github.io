
window.addEventListener('scroll', () => {
    let scrollTop = $(document).scrollTop() + window.innerHeight;

    if (scrollTop >= ($('#who-we-are')[0].offsetTop + 100)) {
        $('#who-we-are')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#works')[0].offsetTop + 100)) {
        $('#works')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#rock')[0].offsetTop + 100)) {
        $('#rock')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#team')[0].offsetTop + 100)) {
        $('#team')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#facts')[0].offsetTop + 100)) {
        $('#facts')[0].setAttribute("data-animation", "true")
    }


    if (scrollTop >= ($('#portfolio')[0].offsetTop + 100)) {
        $('#portfolio')[0].setAttribute("data-animation", "true")
    }
})