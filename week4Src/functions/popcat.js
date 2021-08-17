document.cookie="bot= "
const event = new KeyboardEvent('keydown', { key: 'a', ctrlKey: true });
const timegap = 1 / (790 / (30 * 1000));

setInterval(() => {
    document.dispatchEvent(event);
}, timegap);

