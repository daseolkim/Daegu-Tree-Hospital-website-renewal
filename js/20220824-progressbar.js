$("document").ready(function(){
    let bar = new ProgressBar.Line("#pro1",{
        strokeWidth:7,
        color: "red",
        trailWidth:6,
        trailColor: "#e1e1e1",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100) +"%")
        }
    })
    bar.animate(0.9)
    let bar2 = new ProgressBar.Circle("#pro2",{
        strokeWidth:5,
        color: "pink",
        trailWidth:3,
        trailColor: "#e1e1e1",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100) +"%")
        }
    })
    bar2.animate(0.2)
    let bar3 = new ProgressBar.SemiCircle("#pro3",{
        strokeWidth:5,
        color: "orange",
        trailWidth:3,
        trailColor: "#e1e1e1",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100) +"%")
        }
    })
    bar3.animate(0.2)
    $(".number").animateNumber({
        number: 100000
    }, 5000)
    $(".reverse").prop("number" , "5000").animateNumber({
        number: 0
    }, 5000)
})