// Main JavaScript for Keshav Sharma's Developer Portfolio

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initScrollSpy();
    initProjectFilter();
    initContactForm();
});

// Theme Management (Dark / Light)
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('ks_portfolio_theme') || 'dark';

    if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    } else {
        document.documentElement.classList.remove('light');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.documentElement.classList.toggle('light');
            localStorage.setItem('ks_portfolio_theme', isLight ? 'light' : 'dark');
            if (themeIcon) {
                themeIcon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
            }
        });
    }
}

// Mobile Hamburger Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Scrollspy for active navigation links
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-cyan-400', 'font-semibold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-cyan-400', 'font-semibold');
            }
        });
    });
}

// Copy to Clipboard with Toast
window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} copied to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
}

// Project Category Filtering
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40', 'active');
                b.classList.add('bg-white/5', 'text-slate-400', 'border-white/10');
            });

            btn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40', 'active');
            btn.classList.remove('bg-white/5', 'text-slate-400', 'border-white/10');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                    card.style.display = 'block';
                    card.classList.add('animate-fadeIn');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Interactive Architecture Switcher in Showcase
window.switchArchTab = function(tabName) {
    const tabs = ['dynamic-schema', 'clean-arch', 'oauth-sso'];
    tabs.forEach(t => {
        const content = document.getElementById(`arch-content-${t}`);
        const btn = document.getElementById(`arch-btn-${t}`);
        if (content && btn) {
            if (t === tabName) {
                content.classList.remove('hidden');
                btn.classList.add('border-cyan-400', 'text-cyan-400', 'bg-cyan-500/10');
                btn.classList.remove('border-transparent', 'text-slate-400');
            } else {
                content.classList.add('hidden');
                btn.classList.remove('border-cyan-400', 'text-cyan-400', 'bg-cyan-500/10');
                btn.classList.add('border-transparent', 'text-slate-400');
            }
        }
    });
};

// Contact Form Handling (Free Formspree or Direct Mailto)
function initContactForm() {
    const form = document.getElementById('portfolioContactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName')?.value.trim();
        const email = document.getElementById('contactEmail')?.value.trim();
        const subject = document.getElementById('contactSubject')?.value.trim() || 'Portfolio Inquiry';
        const message = document.getElementById('contactMessage')?.value.trim();

        if (!name || !email || !message) {
            showToast('Please fill in all required fields.');
            return;
        }

        // Generate Mailto fallback link
        const bodyContent = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
        const mailtoUrl = `mailto:sharmakeshav802@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${bodyContent}`;

        window.open(mailtoUrl, '_blank');
        showToast('Opening your email client to send message...');
        form.reset();
    });
}

