document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) {
        event.preventDefault();
        console.log('Enter key pressed');
        const button = document.querySelector('form textarea + button');

        if (button) {
            const rect = button.getBoundingClientRect();
            const x = rect.left + (rect.width / 2);
            const y = rect.top + (rect.height / 2);
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: x,
                clientY: y
            });
            button.dispatchEvent(clickEvent);
        }
    }
});