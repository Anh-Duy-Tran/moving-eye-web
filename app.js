const eyes = document.querySelectorAll('.eye')
const anchor = document.getElementById('anchor')
const button = document.getElementById('crosseye')

const rekt = anchor.getBoundingClientRect()
const anchorX = rekt.left + rekt.width / 2
const anchorY = rekt.top + rekt.height / 2
const offset = 4.9863
let crosseye = false

document.addEventListener('mousemove', (e) => {    
    let i = 1;
    eyes.forEach((eye) => {
        if (crosseye && i++ % 2 == 0) {
            eye.style.transform = `rotate(${Math.PI + offset + angle(e.clientX, e.clientY, anchorX, anchorY)}rad)`;
        } else {
            eye.style.transform = `rotate(${offset + angle(e.clientX, e.clientY, anchorX, anchorY)}rad)`;
        }
    })
})

button.addEventListener('click', () => crosseye = !crosseye)


const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy
    const dx = ex - cx

    const rad = Math.atan2(dy, dx)
    return rad;
}