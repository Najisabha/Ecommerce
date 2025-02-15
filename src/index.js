window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
document.querySelectorAll('.add-to-card-btn').forEach(item => {
    item.addEventListener('click', () => {
        alert('Item added to card');
    })
});
// باقي الكود الخاص بك
console.log('Hello, world!');