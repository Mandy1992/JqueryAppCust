$(document).ready(function () {
    $(document).on("click", "#openCustomerModal", function () {
        $("#customerModal").show();
    });

    $(document).on("click", ".close", function () {
        $(".modal").hide();
    })

    $(document).on("submit", "#customerForm", function (e) {
        e.preventDefault();
        let name = $("#customerName").val();
        let email = $("#customerEmail").val();

        let newRow = `<tr><td>${Date.now()}</td><td>${name}</td><td>${email}</td></tr>`
    
        $("#customerTable").append(newRow);
        $("#customerModal").hide();
        $('#customerForm')[0].reset();   

    })

})