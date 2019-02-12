// const PASS_VALIDATION = new RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}', 'g');

$(function () {
    function handleLoggedUser(loggedUser) {
        $('#logged-username').text(loggedUser.email);
        $('.entry-reg-container').hide();
        $('.logged-user-data').show();
        $('#log-out').show();
    }

    const loggedUser = userStorage.retrieveLoggedUserData();

    if (loggedUser) {
        handleLoggedUser(loggedUser);
    }

    $('#register-btn').on('click', function (event) {
        event.preventDefault();
        $('#login-form')[0].reset();
        $('#login-form p.error').text('');
        const email = $('#email').val();
        const password = $('#pass').val();
        const confirmPass = $('#repeat-pass').val();
        var hasError = false;

        if (!isValid(email)) {
            hasError = true;
            $('#email-container > .error').text('Incorrect email!');
        } else {
            $('#email-container > .error').text('');
        }

        // if (!PASS_VALIDATION.test($('#pass').val())) {
        //     console.log(PASS_VALIDATION, password)
        //     hasError = true;
        //     $('#password-container > .error').text('Incorrect password!');
        // } else {
        //     $('#password-container > .error').text('');
        // }

        if (password !== confirmPass) {
            hasError = true;
            $('repeat-pass-container > .error').text('Different passwords!');
        } else {
            $('repeat-pass-container > .error').text('');
        }

        if (!hasError) {
            userStorage.register(email, password);
            const loggedUser = userStorage.retrieveLoggedUserData();

            if (loggedUser) {
                handleLoggedUser(loggedUser);
                $('#overlay').hide();
            }
        }
    });

    $('#login-btn').on('click', function (event) {
        event.preventDefault();
        $('#register-form')[0].reset();
        $('#register-form p.error').text('');
        const username = $('#username').val();
        const password = $('#password').val();
        const user = userStorage.login(username, password);

        if (user) {
            $('#overlay').hide();
            handleLoggedUser(user);
            $('#login-form .error').text('');
        } else {
            $('#login-form .error').text('Invalid data!');
        }

        $('#login-form')[0].reset();
    });

    $('#log-out').on('click', function() {
        $('.entry-reg-container').show();
        $('#log-out').hide();
        $('.logged-user-data').hide();
        sessionStorage.removeItem('loggedUserId');
    });
});

function isValid(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}