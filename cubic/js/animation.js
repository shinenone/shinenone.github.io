
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

    if (scrollTop >= ($('#services')[0].offsetTop + 100)) {
        $('#services')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#skill')[0].offsetTop + 100)) {
        $('#skill')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#portfolio')[0].offsetTop + 100)) {
        $('#portfolio')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#says')[0].offsetTop + 100)) {
        $('#says')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#news')[0].offsetTop + 100)) {
        $('#news')[0].setAttribute("data-animation", "true")
    }

    if (scrollTop >= ($('#us')[0].offsetTop + 100)) {
        $('#us')[0].setAttribute("data-animation", "true")
    }
})