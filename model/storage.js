var userStorage = (function () {
    var num = 1;

    class User {
        constructor(email, password) {
            this.id = num++;
            this.email = email;
            this.password = password;
        }
    }

    var userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];

    return {
        login: function (email, password) {
            let currentUser = userList.find(u => u.email === email && u.password === password);
            if (currentUser) {
                this.addUserToLocalSesstion(currentUser.id);
            }

            return currentUser;
        },

        register: function (email, password) {
            let currentUser = new User(email, password);
            userList.push(currentUser);
            localStorage.setItem('userList', JSON.stringify(userList));
            this.addUserToLocalSesstion(currentUser.id);
        },

        addUserToLocalSesstion: id => sessionStorage.setItem('loggedUserId', id),

        retrieveLoggedUserData: () => userList.find(u => u.id === +sessionStorage.getItem('loggedUserId'))
    }
})();



var vehicleStorage = (function () {
    var num = 1;

    class Vehicle {
        constructor(make, model, image, price, kilometres, city, manufacturedYear, engine, gearbox, color, moreInformation,modification,state,power,eurostandart,numberSeats,currency,country,validFor,category,properties) {
            this.id = num++;
            this.make = make;
            this.model = model;
            this.image = image;
            this.price = price;
            this.kilometres = kilometres;
            this.city = city;
            this.manufacturedYear = manufacturedYear;
            this.engine = engine;
            this.gearbox = gearbox;
            this.color = color;
            this.moreInformation = moreInformation;
            this.modification=modification;
            this.state=state;
            this.power=power;
            this.eurostandart=eurostandart;
            this.numberSeats=numberSeats;
            this.currency=currency;
            this.country=country;
            this.validFor=validFor;
            this.category=category;
            this.properties=properties;
            this.date = new Date();
        }
    }

    function createDefaultVechicleAds() {
        const vechicleItems = [
            new Vehicle('Audi', 'A5', '../assets/images/audi-a5.jpg', 20000, 140000, 'София', 2010, 'Дизелов', 'Автоматична', 'сив', ''),
            new Vehicle('BMW', 'X3', '../assets/images/bmw-x3.jpg', 25000, 100000, 'Пловдив', 2016, 'Бензинов', 'Автоматична', 'син', ''),
            new Vehicle('Citroen', 'C3', '../assets/images/citroen-c3.jpg', 27000, 140000, 'София', 2019, 'Дизелов', 'Ръчна', 'бял', ''),
            new Vehicle('Ferrari', 'Testarossa', '../assets/images/ferrari-testarossa.jpg', 17000, 240000, 'София', 2010, 'Бензинов', 'Ръчна', 'червен', ''),
            new Vehicle('Hyundai', 'Accent', '../assets/images/hyundai-accent.jpg', 30000, 50000, 'София', 2018, 'Дизелов', 'Автоматична', 'червен', ''),
            new Vehicle('VW', 'Polo', '../assets/images/volkswagen-polo.jpg', 16000, 10000, 'София', 2017, 'Бензинов', 'Ръчна', 'оранжев', '')
        ]

        localStorage.setItem('cars', JSON.stringify(vechicleItems));
    }

    if (!localStorage.getItem('cars')) {
        createDefaultVechicleAds();
    }

    var carList = JSON.parse(localStorage.getItem('cars'));
    var motorcycleList = [];
    var truckList = [];
    var bicyckleList = [];

    return {
        addVehicle: function (make, model,image, price, kilometres, city, manufacturedYear, engine, gearbox, color, moreInformation,modification,state,power,eurostandart,numberSeats,currency,country,validFor,category,properties) {
            let newVehicle=new Vehicle(make, model,image, price, kilometres, city, manufacturedYear, engine, gearbox, color, moreInformation,modification,state,power,eurostandart,numberSeats,currency,country,validFor,category,properties);
            if(newVehicle.category==="cars"){
                carList.push(newVehicle);
                JSON.stringify(localStorage.setItem('cars',carList));
            }
            if(newVehicle.category==="motorcycles"){
                motorcycleList.push(newVehicle);
                JSON.stringify(localStorage.setItem('motorcycles', motorcycleList))  ;
            }
            if(newVehicle.category==="trucks"){
                truckList.push(newVehicle);
                JSON.stringify(localStorage.setItem('trucks',truckList));
            }
            if(newVehicle.category==="bicycles"){
                bicyckleList.push(newVehicle);
                JSON.stringify(localStorage.setItem('bicycles',bicyckleList));
            }
        },

        getLastCars: (n) => {
           let currentCarList = carList.slice();
           currentCarList.sort((c1, c2) => c2.id - c1.id);
           return currentCarList.slice(0, n);
        }
    }
})();

