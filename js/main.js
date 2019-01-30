const toggles = [...document.querySelectorAll('.faq-toggle')];

toggles.forEach((toggleElement) => {
    toggleElement.addEventListener('click', () => {
        if (toggleElement.getAttribute('src').indexOf('down.svg') !== -1) {
            toggleElement.setAttribute('src', 'img/buttons/up.svg');
        } else {
            toggleElement.setAttribute('src', 'img/buttons/down.svg');
        }
    });
});
