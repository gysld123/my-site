const wrapper = document.getElementById('main-wrapper');
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const overlay = document.getElementById('work-overlay');
        document.getElementById('project-title').innerText = card.getAttribute('data-title');
        
        document.querySelectorAll('.project-group').forEach(g => g.classList.remove('active'));
        const groups = document.querySelectorAll('.project-group');
        if(groups[index]) groups[index].classList.add('active');

        wrapper.classList.add('out');
        setTimeout(() => {
            overlay.classList.add('active');
            overlay.scrollTo(0, 0);
        }, 300);
    });
});

const items = [
    { b: 'work-nav', o: 'work-overlay' },
    { b: 'about-btn', o: 'about-overlay' },
    { b: 'contact-btn', o: 'contact-overlay' }
];

items.forEach(item => {
    const btn = document.getElementById(item.b);
    const overlay = document.getElementById(item.o);

    if(btn && overlay) {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('clicked'));
            btn.classList.add('clicked');
            wrapper.classList.add('out');
            setTimeout(() => {
                overlay.classList.add('active');
                overlay.scrollTo(0, 0);
            }, 300);
        });

        const close = overlay.querySelector('.close-btn');
        close.addEventListener('click', (e) => {
            e.stopPropagation();
            overlay.classList.remove('active');
            wrapper.classList.remove('out');
            btn.classList.remove('clicked');
        });
    }
});