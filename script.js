// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

// Music Toggle
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  music.paused ? music.play() : music.pause();
}