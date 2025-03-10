$(document).ready(function () {
    $(document).on("click", "#openApplicationModal", function () {
        $("#applicationModal").show();
    })

    $(document).on("click", ".close", function () {
        $(".modal").hide();
    })

    $(document).on("submit", "#applicationModal", function (e) {
        e.preventDefault();
        let name = $("#appName").val();
        let status = $("#appStatus").val();
        let newRow = `<tr><td>${Date.now()}</td><td>${name}</td><td>${status}</td></tr>`
        console.log(newRow);
        $("#applicationTable").append(newRow);
        $("#applicationModal").hide();
        $('#applicationForm')[0].reset();
    })
})