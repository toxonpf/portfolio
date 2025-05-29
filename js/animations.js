const block = document.querySelector('#DECORATE_LabelCircle');

// Получаем размеры блока
const blockRect = block.getBoundingClientRect();
const initialX = blockRect.left + blockRect.width / 2;
const initialY = blockRect.top + blockRect.height / 2;

let mouseX = initialX;
let mouseY = initialY;
let currentDx = 0;
let currentDy = 0;

const easing = 0.01; // Коэффициент плавности

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  const dx = mouseX - initialX;
  const dy = mouseY - initialY;

  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = 100;

  let limitedDx = dx;
  let limitedDy = dy;

  if (distance > maxDistance) {
    const angle = Math.atan2(dy, dx);
    limitedDx = Math.cos(angle) * maxDistance;
    limitedDy = Math.sin(angle) * maxDistance;
  }

  currentDx += (limitedDx - currentDx) * easing;
  currentDy += (limitedDy - currentDy) * easing;

  block.style.transform = `translate(${currentDx}px, ${currentDy}px)`;

  requestAnimationFrame(animate);
}

animate();


const img = document.getElementById('photo');

    document.addEventListener('mousemove', (e) => {
      const rect = img.getBoundingClientRect();
      const imgCenterX = rect.left + rect.width / 2;
      const imgCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - imgCenterX;
      const dy = e.clientY - imgCenterY;

      // Чем дальше курсор — тем больше тень
      const maxOffset = 10;
      const shadowX = Math.max(-maxOffset, Math.min(maxOffset, -dx / 50));
      const shadowY = Math.max(-maxOffset, Math.min(maxOffset, -dy / 50));

      img.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 15px black)`;
    });