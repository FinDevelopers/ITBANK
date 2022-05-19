//https://stackoverflow.com/a/23230280/10942774

//https://getbootstrap.com/docs/5.2/components/offcanvas/#methods
const offcanvas = new bootstrap.Offcanvas("#test-offcanvas");

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart({ touches }) {
    const { clientX, clientY } = touches[0];
    xDown = clientX;
    yDown = clientY;
}

function handleTouchMove({ touches }) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = touches[0].clientX;
    var yUp = touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff <= 0) {
        offcanvas.show();
    }

    xDown = null;
    yDown = null;
}
