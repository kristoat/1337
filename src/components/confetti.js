import confetti, {create} from 'canvas-confetti';

const confettiCanvas = document.createElement("canvas")
const myConfetti = create(confettiCanvas, {
    resize: true,
    useWorker: true,
})

myConfetti({
    particleCount: 100,
    spread: 160,
    // any other options from the global
    // confetti function
})

let hasConfettied = false

// https://www.kirilv.com/canvas-confetti/
export const confettiShitUp = () => {

    if (hasConfettied) return

    hasConfettied = true

    var end = Date.now() + (15 * 1000);

    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 200,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 200,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

