$(function () {
    $("#conditions").click(function (e) {
        $("#publish").attr("disabled", !this.checked);
    });
    
    $("#publish").on("click", function (event) {
        event.preventDefault();

        let make1 = $("#make option:selected").text();
        let model1 = $("#model option:selected").text();
        let image1= $("output");
        let price1 = $("#price").val();
        let kilometres1 = $("#kilometres").val();
        let city1 = $("#city").val();
        let manufacturedYear1 = $("#productionDate").val();
        let engine1 = $("#engine option:selected").text();
        let gearbox1 = $("#gearbox option:selected").text();
        let color1 = $("#color").val();
        let moreInformation1 = $("#moreInformation").val();
        let modification1 = $("#model option:selected").text();
        let state1 = $(".state input:checked").attr("text");
        let power1 = $("#power").val();
        let eurostandart1 = $("#eurostandart option:selected").text();
        let numberSeats1 = $("#numberSeats").val();
        let currency1 = $("#currency option:selected").text();
        let country1 = $("#country").val();
        let validFor1 = $("#validFor option:selected").text();
        let category1 = $("#category option:selected").val();
        let properties1 = [];
        $('.car-flag input:checked').each(function () {
            properties1.push($(this).attr('value'));
        });


        vehicleStorage.addVehicle(make1, model1 ,image1, price1, kilometres1, city1, manufacturedYear1, engine1, gearbox1, color1, moreInformation1, modification1, state1, power1, eurostandart1, numberSeats1, currency1, country1, validFor1, category1,properties1);

    });
})
