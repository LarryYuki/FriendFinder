let $btn = $('button');
$btn.on('click', e => {
    e.preventDefault()
    letscores = []
    for (let i = 1; i <= 3; i++) {
        scores.push(Number($(`#inp-${i}`).val()))
    }
    $.ajax({
            type: "POST",
            url: "/api",
        }).then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    console.log(scores);

})