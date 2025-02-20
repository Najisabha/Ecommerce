window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// حساب سعر المنتج 

document.querySelectorAll('[data-product-qunatity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUbit = parent.getAttribute('data-product-price');
        const total = newQuantity * pricePerUbit;
        parent.querySelector('.total-price-for-product').innerHTML = "$" + total;
        let total_monye = 0 ;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnite = product.getAttribute('data-product-price');
            const qunatity = product.querySelector('[data-product-qunatity]').value;
            const totalPriceForProduct = pricePerUnite * qunatity ;
            total_monye += totalPriceForProduct ;
        })
        document.getElementById('total-price-for-all-product').innerHTML = total_monye + '$';
    })
}
);

document.querySelectorAll('[ data-remove-for-card]').forEach(item => {
    item.addEventListener('click',() => {
        item.closest('[data-product-info]').remove()
        let total_monye = 0 ;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnite = product.getAttribute('data-product-price');
            const qunatity = product.querySelector('[data-product-qunatity]').value;
            const totalPriceForProduct = pricePerUnite * qunatity ;
            total_monye += totalPriceForProduct ;
        })
        document.getElementById('total-price-for-all-product').innerHTML = total_monye + '$';
    })
});
// شيئ اخر 
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
);
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change',()=>{
        document.querySelectorAll('.size-option').forEach(i =>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
}
);
document.querySelectorAll('[ data-remove-for-card]').forEach(item => {
    item.addEventListener('click',() => {
        item.closest('[data-product-info]').remove()
    })
});
// اخايار المدن عند اختيار الدولة 
const cityByCountry = {
    PS: ['طولكرم', 'نابلس', 'رام الله', 'جنين', 'اريحا', 'بيت لحم', 'قلقيلية'],
    SA: ['جدة', 'الرياض'],
    JO: ['عمان', 'الزرقاء'],
    EG: ['الإسكندرية', 'القاهرة'],
    SY: ['حلب', 'دمشق'],
};
document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change', () => {
        const country = item.value;
        const cities = cityByCountry[country] || []; // تأكد من أن cities ليست undefined

        // تحديد قائمة المدن الصحيحة
        const citySelect = document.getElementById('paymentCity');
        
        // حذف جميع الخيارات السابقة
        citySelect.innerHTML = "";

        // إنشاء الخيار الافتراضي
        const firstOption = document.createElement('option');
        firstOption.appendChild(document.createTextNode('اختر المدينة'));
        firstOption.setAttribute('value', '');
        firstOption.setAttribute('disabled', 'true');
        firstOption.setAttribute('selected', 'true');
        citySelect.appendChild(firstOption);

        // إضافة المدن إلى القائمة
        cities.forEach(city => {
            const newOption = document.createElement('option');
            newOption.appendChild(document.createTextNode(city));
            newOption.setAttribute('value', city);
            citySelect.appendChild(newOption);
        });
    });
});
// تحديد البطاقة اذا تم الوضع على خاصية التوصيل تختفي البطاقة 

document.querySelectorAll('#Form-checkout input[name="payment-method"]').forEach(item => {
    item.addEventListener('change', () => {
        const paymentmethod = item.value;
        const creditCardinputs = document.querySelectorAll('#credit_card_info input');
        if (paymentmethod == 'on_card'){
            creditCardinputs.forEach(i => {
                i.style.display = 'none';
            })
        } else{
            creditCardinputs.forEach(i => {
                i.style.display = 'block';
            })
        }
    })
})

// copy right year
document.getElementById('copy-right-year').textContent = new Date().getFullYear();
