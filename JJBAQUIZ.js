function redirectToQuiz(difficulty) {
    window.location.href = `${difficulty}.html`;
}

document.querySelectorAll('abbr.noUnderline').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
        el.setAttribute('data-title', el.getAttribute('title'));
        el.removeAttribute('title');
    });

    el.addEventListener('mouseleave', function() {
        el.setAttribute('title', el.getAttribute('data-title'));
    });
});