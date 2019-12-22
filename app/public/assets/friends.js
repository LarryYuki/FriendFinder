let $btn = $('button');
let input = $('.input')

$btn.on('click', e => {
    e.preventDefault()
    let scores = []
    for (let i = 0; i < input.length; i++) {
        scores.push(Number(input[i].value))
    }
    console.log(scores);
    $.ajax({
            type: "POST",
            url: "/api/friends",
            data: {
                name: "",
                photo: "",
                scores: scores
            }

        }).then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

})

// $btn.on('click', e => {
//     e.preventDefault()
//     let scores = []
//     for (let i = 1; i <= 3; i++) {
//         scores.push(Number($(`#inp-${i}`).val()))
//     }
//     console.log(scores);

//     $.ajax({
//             type: "POST",
//             url: "/api",
//             data: {
//                 name: "",
//                 photo: "",
//                 scores:
//             }
//         }).then(res => {
//             console.log(res);
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     console.log(scores);

// })