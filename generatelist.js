let items = [];
let interval;
let animationRunning = false;

document.getElementById('item').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    const input = document.getElementById('item');
    const item = input.value.trim();
    if (item) {
        items.push(item);
        input.value = '';
        renderItems();
    }
}

function renderItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

function generateItem() {
    if (animationRunning || items.length === 0) return;

    animationRunning = true;
    const result = document.getElementById('speechBubble');
    let currentIndex = 0;
    const cycleDuration = 2000; // Duration of the entire cycle animation in milliseconds
    const displayDuration = 100; // Duration each item is displayed in milliseconds

    result.textContent = 'Choosing...';
    
    interval = setInterval(() => {
        result.textContent = items[currentIndex];
        currentIndex = (currentIndex + 1) % items.length;
    }, displayDuration);

    setTimeout(() => {
        clearInterval(interval);
        const randomIndex = Math.floor(Math.random() * items.length);
        result.textContent = `I reckon you should have ${items[randomIndex]}`;
        animationRunning = false;
    }, cycleDuration);
}
