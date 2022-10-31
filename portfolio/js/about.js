$("document").ready(function(){

    function skill(id, per){
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 4,
            trailWidth:4,
            color: "#ffa31b",
            duration: 1400,
            step: function(state, circle){
                circle.setText(Math.round(circle.value() * 100)+ "%")
            }
        })
        bar.animate(per)
    }

    skill("#html" , 0.7)
    skill("#css" , 0.8)
    skill("#js" ,0.6)
    skill("#ps" , 0.9)
    skill("#ai" , 0.7)
    skill("#of" , 0.5)
})