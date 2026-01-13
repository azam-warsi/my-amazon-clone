const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if(query !== '') {
        alert(`Searching for: ${query}`);
        searchInput.value = '';
    } else {
        alert('Please type something to search!');
    }
});

searchInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        searchIcon.click();
    }
});

const navCart = document.querySelector('.nav-cart');
let cartCount = 0;


const badge = document.createElement('span');
badge.style.backgroundColor = '#FF9900';
badge.style.color = 'white';
badge.style.fontSize = '12px';
badge.style.padding = '2px 6px';
badge.style.borderRadius = '50%';
badge.style.marginLeft = '5px';
badge.textContent = cartCount;
navCart.appendChild(badge);


const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        cartCount++;
        badge.textContent = cartCount;
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    });
});



const panelItems = document.querySelectorAll('.panel-ops p');
panelItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#FF9900';
        item.style.cursor = 'pointer';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = '#fff';
    });
});


const heroLink = document.querySelector('.hero-message a');
heroLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to amazon.in (demo)');
});
