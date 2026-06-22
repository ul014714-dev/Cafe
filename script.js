const moviesData = {
    'ogro': {
        title: 'El Ogro Verde',
        synopsis: 'Un ogro gruñón pero de buen corazón ve su tranquilo pantano invadido por personajes de cuentos de hadas exiliados. Para recuperar su hogar, emprende una divertida aventura junto a un compañero parlante para rescatar a una princesa con un gran secreto.',
        themeClass: 'poster-ogro'
    },
    'bestia': {
        title: 'La Rosa y la Bestia',
        synopsis: 'Una joven brillante y valiente toma el lugar de su padre como prisionera en el castillo de una bestia aterradora. Con el tiempo, descubrirá que detrás del aspecto monstruoso se esconde un corazón amable y una maldición que solo el amor verdadero puede romper.',
        themeClass: 'poster-bestia'
    },
    'metal': {
        title: 'Héroe de Aleación',
        synopsis: 'Un brillante pero arrogante industrial es secuestrado. Usando su ingenio, construye una armadura de alta tecnología para escapar. De regreso a casa, decide usar su creación para proteger al mundo de las fuerzas del mal.',
        themeClass: 'poster-metal'
    },
    'caballo': {
        title: 'Caballo Libre',
        synopsis: 'Sigue la épica historia de un corcel salvaje y rebelde que viaja por la majestuosa frontera. A pesar de los intentos por domarlo, su espíritu permanece inquebrantable.',
        themeClass: 'poster-caballo'
    }
};

function goToMovie(movieId) {
    window.location.href = `movie.html?id=${movieId}`;
}

function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');

    if (movieId && moviesData[movieId]) {
        const movie = moviesData[movieId];
        
        document.getElementById('movieTitle').innerText = movie.title;
        document.getElementById('movieTitleImg').innerText = movie.title;
        document.getElementById('movieSynopsis').innerText = movie.synopsis;
        
        const posterEl = document.getElementById('moviePoster');
        posterEl.className = `movie-poster-large ${movie.themeClass}`;
    } else {
        document.getElementById('movieTitle').innerText = 'Película no encontrada';
        document.getElementById('movieSynopsis').innerText = 'Por favor, regresa al inicio para seleccionar una película.';
        document.getElementById('movieTitleImg').innerText = '?';
    }
}
