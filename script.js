document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yesssss-btn");
    const noBtn = document.querySelector(".nOO");

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "I love youu!!!";
        gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODRjaDI3dGd6djNodXRsOXlxZWl1YnN1czJpajV4MmJzMXZ0MGo0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dg0jE6vFtpgk8mrUKX/giphy.gif";
    });

    let scale = 1;

    noBtn.addEventListener('click', () => {
        // Move the NO button to a random position
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width - 20;
        const maxY = window.innerHeight - noBtnRect.height - 20;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";

        // Grow the YES button only when the NO button is clicked
        scale += 0.5; // Increase the growth rate
        yesBtn.style.transform = `scale(${scale})`;
    });
});
