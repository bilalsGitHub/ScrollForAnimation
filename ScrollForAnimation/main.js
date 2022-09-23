const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
    /*const innerheight = (window.innerHeight / 5) * 4;==>boxTop'a ulaşmak için sayiyi kucultuyor bir nevi */
    const innerheight = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        console.log("innerheight" + innerheight + "boxTop" + boxTop);
        if (boxTop < innerheight) {
            box.classList.add("show");
            console.log("Eklendi");
        } else {
            box.classList.remove("show");
        }
    });
}