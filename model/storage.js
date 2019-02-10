var userStorage = (function() {
    class User {
        constructor(email, password) {
            this.email = email;
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

