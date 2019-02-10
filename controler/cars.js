$(function() {
    const DEFAULT_OPTION = '<option value="all">всички</option>';
    var startYear = 1930;
    var endYear = new Date().getFullYear();
    const TOWNS = ['Благоевград', 'Бургас', 'Варна', 'Велико Търново', 'Видин', 'Враца', 'Габрово', 'Добрич', 'Кърджали', 'Кюстендил', 'Ловеч', 'Монтана', 'Перник', 'Плевен', 'Пловдив', 'Русе', 'Силистра', 'Сливен', 'София'];

    for (let num = 1; num <= 21; num++) {
        $('#gear').append(`<option value="${num}">${num}</option>`);
    }

    $('#gear').append(`<option value="${'nospeeds'}">${'без скорости'}</option>`)

    for (let i = 0; i < TOWNS.length; i++) {
        $('#city').append(`<option value="${i+1}">${TOWNS[i]}</option>`);
    }

    for (let y = endYear; y >= startYear; y--) {
        $('#year').append(`<option value="${y}">след ${y}</option>`);
    }

    for (const make in makes['cars']) {
        $('#make').append($(`<option value="${make}">${makes['cars'][make]}</option>`));
    }
   
    $('#category').on('change', function() {
        var category = $('#category').val();
        var makeSelect = $('#make');
        $(makeSelect).html(DEFAULT_OPTION);
        $('#search-title').text(categories[category]);
        for (let make in makes[category]) {           
            makeSelect.append($(`<option value="${make}">${makes[category][make]}</option>`));
        }

        $('.icon-container > i').attr('class', `${vehicleIcons[category]} icon`);

        if (category === 'bicycles') {
            $('.engine-container').css('display', 'none');
            $('.city-container').css('display', 'flex');
            $('.gearbox-container').css('display', 'none');
            $('.gear-container').css('display', 'flex');
        } else {
            $('.engine-container').css('display', 'flex');
            $('.city-container').css('display', 'none');
            $('.gearbox-container').css('display', 'flex');
            $('.gear-container').css('display', 'none');
        }

        $('.article-search select:not(#category)').val('all');
    });

    $('#make').on('change', function() {
        var make = $('#make').val();
        var modelSelect = $('#model');
        $(modelSelect).html(DEFAULT_OPTION);
        for (let model in models[make]) {           
            modelSelect.append($(`<option value="${model}">${models[make][model]}</option>`));
        }
    });

    $('#overlay-close-btn').on('click', function() {
        $('#overlay').css('display', 'none');
    });
});
