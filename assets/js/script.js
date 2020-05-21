function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        var timeElaspsed = currentTime - startTime;
        var run = ease(timeElaspsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if (timeElaspsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d){
        t /= d/2;
        if (t < 1) return c/2*t*t+b;
        t--;
        return -c/2*(t*(t-2)-1)+b;
    }

    requestAnimationFrame(animation);
}

var buttonLanguages = document.getElementById("buttonLanguages");
var buttonExperience = document.getElementById("buttonExperience");
var buttonProfile = document.getElementById("buttonProfile");
var buttonOthers = document.getElementById("buttonOthers");
var buttonComputation = document.getElementById("buttonComputation");

buttonComputation.addEventListener('click', function(){
    smoothScroll('.programacao', 1000)
});

buttonExperience.addEventListener('click', function(){
    smoothScroll('.experience', 1000)
})

buttonLanguages.addEventListener('click', function(){
    smoothScroll('.linguas', 1000)
})

buttonOthers.addEventListener('click', function(){
    smoothScroll('.others', 1000)
})

buttonProfile.addEventListener('click', function(){
    smoothScroll('.profile', 1000)
})