var userStorage = (function() {
    class User {
        constructor(email, password) {
            this.emil = email;
            this.password = password;
        }
    }

    var userList = [];

    return {
        login: function (email, password) {
            return userList.find(u => u.email === email && u.password === password);
        },

        register: function (email, password) {
            userList.push(new User(email, password));
            localStorage.setItem('userList', JSON.stringify(userList));         
        }
    }
})();