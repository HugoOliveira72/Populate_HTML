"user scrict";

var dados;

fetch('./data.json').then(function (result) {
    return result.json();
})
    .then(function (data) {
        const result = data;

        // for (let i = 0; i < result.length; i++) {
        //     const element = result[i];
        //     console.log(element);
        //     document.getElementById('info').innerHTML +=

        //     "<p>"+element.num+"</p>" +
        //     "<div>" +
        //         "<p id='code'>"+element.chapters[0].id +"</p>"+
        //         "<p id='date'>"+element.chapters[0].date  +"</p>"+
        //         "<p id='scan'>"+element.chapters[0].scan  +"</p>"+
        //         "<p id='scanuri'>"+element.chapters[0].scanuri  +"</p>"+
        //     "</div>"
        // }

        dados = result;
    });

function showInfo() {

    var inputNumber = document.getElementById('filtro');
    console.log(inputNumber.value);
    let numberToFind = inputNumber.value.toString();

    for (let i = 0; i < dados.length; i++) {
        const element = dados[i];
        console.log(element);

        if (numberToFind === element.num) {
            document.getElementById('info').innerHTML =
                "<p>" + element.num + "</p>" +
                "<div>" +
                "<p id='code'>"+element.chapters[0].id + "</p>" +
                "<p id='date'>" + element.chapters[0].date + "</p>" +
                "<p id='scan'>" + element.chapters[0].scan + "</p>" +
                "<p id='scanuri'>" + element.chapters[0].scanuri + "</p>" +
                "</div>"
        }
    }
}