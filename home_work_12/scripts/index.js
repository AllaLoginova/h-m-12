const slider = document.getElementById('myRange');
const element = document.getElementsByClassName("slidecontainer");
const el_red = document.getElementById("red");
const el_green = document.getElementById("green");
slider.addEventListener('input', function () {
    const percentage = slider.value;
    // element.style.background = `linear-gradient(to right, black ${percentage}%, white ${percentage}%)`;

    el_red.style.background = `linear-gradient(to right, red ${percentage}%, white ${percentage}%)`;
    el_green.style.background = `linear-gradient(to left, green ${percentage}%, white ${percentage}%)`;
    
    el_red.style.marginLeft = 10 + percentage*3 + 'px';
    el_green.style.marginLeft = 310 - percentage*3 + 'px';
    
});



// function sizePic() {
//     size = document.getElementById("myRange").value;
//     img = document.getElementById("red");
//     img.innerHTML = size
    
//     img.width = 60 + 20*size;
// }

// let rangeslider = document.getElementById("myRange");
// let output = document.getElementById("red");
// output.innerHTML = rangeslider.value;

// rangeslider.oninput = function () {
//     output.style.width += this.value;
// }

const slider = document.getElementById('myRange');
const element = document.getElementsByClassName('slidecontainer');
const el_red = document.getElementById('red');
const el_green = document.getElementById('green');
slider.addEventListener('input', function () {
    const percentage = slider.value;
    const colorValue = 255 - Math.floor((256 / 100 * percentage));
    // element.style.backgroundColor = `linear-gradient(to right, black ${percentage}%, white ${percentage}%)`;

    // el_red.style.background = `linear-gradient(to right, red ${percentage}%, white ${percentage}%)`;
    // el_green.style.background = `linear-gradient(to left, green ${percentage}%, white ${percentage}%)`;

    document.body.style.background = `rgb(${colorValue}, ${colorValue}, ${255 - Math.floor((256 / 100 * percentage))})`
    el_green.style.background = `linear-gradient(to left, green ${percentage}%, white ${percentage}%)`;
    
    
    // el_red.style.marginLeft = 10 + percentage * 3 + 'px';
    // el_green.style.marginLeft = 310 - percentage * 3 + 'px';

    
    el_red.style.marginLeft = percentage + 'vw';
});
