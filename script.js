let items = [];

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
    const result = document.getElementById('speechBubble');
    if (items.length > 0) {
        result.speechBubble = "Hmmm let me decide which one I think you should have...";
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * items.length);
            const selectedItem = items[randomIndex];
            result.speechBubble = `Your randomly chosen item is: ${selectedItem}`;
        }, 2000); // Delay for 2 seconds for dramatic effect
    } else {
        result.speechBubble = 'Please enter at least one item.';
    }
}
