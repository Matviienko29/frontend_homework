$(function() {
    $('.carousel').carousel();

    //шаблон
    var anketa = {
        name: 'Шоколад',
        photo: {
            src: 'img/photo.jpg',
            alt: 'шоколад'
        },
        job: 'Шоколад',
        why: 'Почему шоколад - это хорошо:',
        reasons: ['вернет тебе улыбку',
            'истинный шедевр',
            'потрящающе тающий'],
        tel: 'Где его искать:',
        number: '+111 222 33 44',
        fb: 'Профиль в соцсети:',
        fb_link: 'https://www.facebook.com/',
        feedback: 'Шоко фидбек:',
        feedback_text: 'Кто ищет настоящее, находит шоколад'
    }

    // JavaScript Micro-Templating
    var profile = $('#profile').html();
    var content = tmpl(profile, anketa);
    $('.shablon').append('<h2>JavaScript Micro-Templating</h2>');
    $('.shablon').append(content);

    // Шаблонизатор LoDash
    var profile = $('#profile').html();
    var content = _.template(profile)(anketa);
    $('.shablon').append('<h2>LoDash</h2>');
    $('.shablon').append(content);
});
