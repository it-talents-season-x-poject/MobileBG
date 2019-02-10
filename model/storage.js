var userStorage = (function() {
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



var vehicleStorage = (function(){
    class Vehicle{
        constructor(title, image, price, kilometres, city){
            this.title=title;
            this.image=image;
            this.price=price;
            this.kilometres=kilometres;
            this.city=city;
            this.date=new Date();
        }
    }

        var carList=[];
        var busList=[];
        var truckList=[];
    
    return{
        addVehicle: function(title,img,price,kilometres,city){
            return 
        }
    }
    
    

})();

