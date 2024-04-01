
    var pageLoaded = false;

    window.addEventListener('load', function() {
        var logo = document.getElementById('logo');
        logo.classList.add('loaded');
        pageLoaded = true;
    });

    window.addEventListener('scroll', function() {
        if (!pageLoaded) return; // Si la página no ha cargado completamente, no hagas nada

        var header = document.querySelector('header');
        var logo = document.getElementById('logo');

        if (window.scrollY > 100) {
            header.classList.add('scroll');
            logo.querySelector('.dark').style.display = 'none';
            logo.querySelector('.light').style.display = 'inline';
        } else {
            header.classList.remove('scroll');
            logo.querySelector('.dark').style.display = 'inline';
            logo.querySelector('.light').style.display = 'none';
        }
    });