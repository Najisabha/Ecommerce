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

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change',()=>{
        document.querySelectorAll('.color-option').forEach(i =>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
}
)
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change',()=>{
        document.querySelectorAll('.size-option').forEach(i =>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
}
)

// copy right year
document.getElementById('copy-right-year').textContent = new Date().getFullYear();
