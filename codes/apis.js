$(function(){
    $("#loadQuotes").on('click', getData)
})

function getData(){
    $.ajax({
        type: 'GET',
        url: 'http://52.201.152.108/news?id=bcsf17a534',
        success: function (response){
            addData(response.length)
        },
        error: function (){
            console.log("error")
        } 
    })
}

function addData(len){
    $("#data").text("there are "+ len + " records");
}