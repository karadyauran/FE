function sendText() {
    let text = document.getElementById("input-text").value

    $.ajax({
        type: "POST",
        url: "http://192.168.178.35:8000/translate",
        data: JSON.stringify(text),
        contentType: "application/json",
        success: function(response) {
            console.log(response.result);  // Output the result to the console
        }
    });

}