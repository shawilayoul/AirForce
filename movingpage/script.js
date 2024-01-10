const left = document.querySelector('.left');
const right = document.querySelector('.right')
console.log(left, right);
left.addEventListener('mouseenter', () => {
    left.classList.add('active-left')
})
left.addEventListener('mouseleave', () => {
    left.classList.remove('.active-left');
})
right.addEventListener('mouseenter', () => {
    right.classList.add('active-right')
})
right.addEventListener('mouseleave', () => {
    right.classList.remove('.active-right');
})