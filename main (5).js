// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

// Typed text
const el = document.getElementById('typed');
const words = ['Graphic Designer', 'UI/UX Designer', 'Front-End Developer'];
let wi = 0, ci = 0, del = false;

function type() {
  const w = words[wi];
  el.textContent = del ? w.slice(0, --ci) : w.slice(0, ++ci);
  if (!del && ci === w.length) { setTimeout(() => { del = true; type(); }, 1800); return; }
  if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; }
  setTimeout(type, del ? 45 : 80);
}
type();

// Form
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const n = document.getElementById('fname').value.trim();
  const em = document.getElementById('femail').value.trim();
  const m = document.getElementById('fmsg').value.trim();
  const msg = document.getElementById('form-msg');
  if (!n || !em || !m) { msg.textContent = 'Please fill all fields.'; msg.style.color = '#e07070'; return; }
  e.target.reset();
  msg.textContent = '✓ Message sent! I\'ll get back to you soon.';
  msg.style.color = '#c8a96e';
  setTimeout(() => msg.textContent = '', 5000);
});
