function copyText(elementId) {
    var element = document.getElementById(elementId);
    var text = element.innerText;

    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", text);
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert(elementId + " copied to clipboard");
}

const boxes = document.querySelectorAll('.box');
        boxes.forEach((box) => {
            box.addEventListener('mouseenter', () => {
                boxes.forEach((otherBox) => {
                    if (otherBox !== box) {
                        otherBox.style.transform = 'translateY(100%)';
                    }
                });
            });

            box.addEventListener('mouseleave', () => {
                boxes.forEach((otherBox) => {
                    if (otherBox !== box) {
                        otherBox.style.transform = 'translateY(0)';
                    }
                });
            });
        });