// an example of a Mandelbrot Set Fractals in JavaScript

(function () {
    // init Canvas
    let canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 800;
    document.body.appendChild(canvas);
    let cont = canvas.getContext("2d");
    console.log('ran')

    //  drawing... 
    function checkSet(x, y) {

        let componentX = x;
        let componentY = y;
        let iterations = 100;
        for (let i = 0; i < iterations; i++) {
            let templateX = componentX * componentX
                - componentY * componentY
                + x;

            let templateY = 2 * componentX * componentY
                + y;

            componentX = templateX;
            componentY = templateY;
        }

        if (componentX * componentY < 5) {
            return true;
        }
        return false;
    }

    let magnificationFactor = 300;
    let panX = 2;
    let panY = 1.3;
    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            let belongsToSet =
                checkSet(x / magnificationFactor - panX,
                    y / magnificationFactor - panY);
            if (belongsToSet) {
                cont.fillRect(x, y, 1, 1); // Draw a black pixel
            }
        }
    }

})();