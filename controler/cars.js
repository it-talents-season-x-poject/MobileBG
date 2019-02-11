$(function () {
    const DEFAULT_OPTION = '<option value="all">всички</option>';
    var startYear = 1930;
    var endYear = new Date().getFullYear();
    const TOWNS = ['Благоевград', 'Бургас', 'Варна', 'Велико Търново', 'Видин', 'Враца', 'Габрово', 'Добрич', 'Кърджали', 'Кюстендил', 'Ловеч', 'Монтана', 'Перник', 'Плевен', 'Пловдив', 'Русе', 'Силистра', 'Сливен', 'София'];

    for (let num = 1; num <= 21; num++) {
        $('#gear').append(`<option value="${num}">${num}</option>`);
    }

    $('#gear').append(`<option value="${'nospeeds'}">${'без скорости'}</option>`);
    $('.secondary-navigation > ul > li > a > i.cars').css('color', 'rgb(0, 144, 198)');

    for (let i = 0; i < TOWNS.length; i++) {
        $('#city').append(`<option value="${i + 1}">${TOWNS[i]}</option>`);
    }

    for (let y = endYear; y >= startYear; y--) {
        $('#year').append(`<option value="${y}">след ${y}</option>`);
    }

    for (const make in makes['cars']) {
        $('#make').append($(`<option value="${make}">${makes['cars'][make]}</option>`));
    }

    $('#category').on('change', function () {
        $('.secondary-navigation > ul > li > a > i').css('color', 'rgb(128, 200, 227)');
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
        $(`.secondary-navigation > ul > li > a > i.${category}`).css('color', 'rgb(0, 144, 198)');
    });

    $('#make').on('change', function () {
        var make = $('#make').val();
        var modelSelect = $('#model');
        $(modelSelect).html(DEFAULT_OPTION);
        for (let model in models[make]) {
            modelSelect.append($(`<option value="${model}">${models[make][model]}</option>`));
        }
    });

    $('#overlay-close-btn').on('click', function () {
        $('#overlay').css('display', 'none');
    });


    $("#cars").on("click", function (event) {
        $(window).scrollTop(0);
        var category = "cars"
        $("select#category").val("cars");
        var makeSelect = $('#make');
        $(makeSelect).html(DEFAULT_OPTION);
        $('#search-title').text(categories[category]);
        for (let make in makes[category]) {
            makeSelect.append($(`<option value="${make}">${makes[category][make]}</option>`));
        }

        $('.icon-container > i').attr('class', `${vehicleIcons[category]} icon`);

        $('.engine-container').css('display', 'flex');
        $('.city-container').css('display', 'none');
        $('.gearbox-container').css('display', 'flex');
        $('.gear-container').css('display', 'none');

        $('.article-search select:not(#category)').val('all');
    });

    $("#trucks").on("click", function (event) {
        $(window).scrollTop(0);
        var category = 'trucks';
        $("select#category").val("trucks");
        var makeSelect = $('#make');
        $(makeSelect).html(DEFAULT_OPTION);
        $('#search-title').text(categories[category]);
        for (let make in makes[category]) {
            makeSelect.append($(`<option value="${make}">${makes[category][make]}</option>`));
        }

        $('.icon-container > i').attr('class', `${vehicleIcons[category]} icon`);

        $('.engine-container').css('display', 'flex');
        $('.city-container').css('display', 'none');
        $('.gearbox-container').css('display', 'flex');
        $('.gear-container').css('display', 'none');

        $('.article-search select:not(#category)').val('all');
    })

    $("#motorcycles").on("click", function (event) {
        $(window).scrollTop(0);
        var category = "motorcycles"
        $("select#category").val("motorcycles");
        var makeSelect = $('#make');
        $(makeSelect).html(DEFAULT_OPTION);
        $('#search-title').text(categories[category]);
        for (let make in makes[category]) {
            makeSelect.append($(`<option value="${make}">${makes[category][make]}</option>`));
        }

        $('.icon-container > i').attr('class', `${vehicleIcons[category]} icon`);

        $('.engine-container').css('display', 'flex');
        $('.city-container').css('display', 'none');
        $('.gearbox-container').css('display', 'flex');
        $('.gear-container').css('display', 'none');

        $('.article-search select:not(#category)').val('all');
    });

    $("#bicycles").on("click", function (event) {
        $(window).scrollTop(0);
        var category = "bicycles"
        $("select#category").val("bicycles");
        var makeSelect = $('#make');
        $(makeSelect).html(DEFAULT_OPTION);
        $('#search-title').text(categories[category]);
        for (let make in makes[category]) {
            makeSelect.append($(`<option value="${make}">${makes[category][make]}</option>`));
        }

        $('.icon-container > i').attr('class', `${vehicleIcons[category]} icon`);

        $('.engine-container').css('display', 'none');
        $('.city-container').css('display', 'flex');
        $('.gearbox-container').css('display', 'none');
        $('.gear-container').css('display', 'flex');

        $('.article-search select:not(#category)').val('all');


    });

    $('.secondary-navigation a').on('click', function (event) {
        event.preventDefault();
        $('#category').val($(this).data('category')).change();
    });

    $('#add-btn').on('click', function () {
        if (sessionStorage.getItem('loggedUserId')) {
            window.location.href = 'Publish.html';
        } else {
            openPage('entry', $('#login-tab'), 'black');
        }
    });

    const LAST_CARS_COUNT = 6;
    let lastSixCars = vehicleStorage.getLastCars(LAST_CARS_COUNT);
    let sectionOne = $('<section class="ads-part"></section>');
    let sectionTwo = $('<section class="ads-part"></section>');
    let sectionCars = '';
    for (let i = 0; i < lastSixCars.length; i++) {
        sectionCars = $(`<div>
        <div style="background-image: url('${lastSixCars[i].image}')" class="img ad-vechicle-img"></div>
        <div class="ad-vechicle-info">
            <p class="car-name">${lastSixCars[i].make} ${lastSixCars[i].model}</p>
            <p>${lastSixCars[i].price}лв.</p>
            <p>${lastSixCars[i].kilometres}км.</p>
        </div>
    </div>`);
        if (i <= 2) {
            sectionOne.append(sectionCars);
        } else {
            sectionTwo.append(sectionCars);
        }
    }

    $('#last-ad-container').append(sectionOne).append(sectionTwo);

    $('.btn-search').on('click', function (event) {
        event.preventDefault();
        let category = $('#category').val();
        let make = $('#make').val();
        let model = $('#model').val();
        let maxPrice = $('#max-price').val();
        let year = $('#year').val();
        let serched = JSON.parse(localStorage.getItem(category));

        serched = serched.filter(v => {
            if (make !== 'all' && v.make.toLowerCase() !== make.toLowerCase()) {
                return false;
            }

            if (model !== 'all' && v.model.toLowerCase() !== model.toLowerCase()) {
                return false;
            }

            if (maxPrice.trim() !== '' && v.price > maxPrice) {
                return false;
            }

            if (year !== 'all' && v.manufacturedYear < year) {
                return false;
            }

            if (category === 'bicycles') {
                let city = $('#city').val();
                let gear = $('#gear').val();

                if (city !== 'all' && v.city.toLowerCase() !== city.toLowerCase()) {
                    return false;
                }
    
                if (gear !== 'all' && v.gearbox !== gear) {
                    return false;
                }
            } else {
                let engine = $('#engine').val();
                let gearbox = $('#gearbox').val();

                if (engine !== 'all' && v.engine.toLowerCase() !== engine.toLowerCase()) {
                    return false;
                }
    
                if (gearbox !== 'all' && v.gearbox.toLowerCase() !== gearbox.toLowerCase()) {
                    return false;
                }
            }

            return true;
        });

        console.log(serched);
    });
});
