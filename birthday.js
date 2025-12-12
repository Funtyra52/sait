// Праздничный режим на 12 декабря - День Рождения!
(function() {
    const today = new Date();
    const month = today.getMonth() + 1; // 1-12
    const day = today.getDate(); // 1-31
    
    // Проверяем, что сегодня 12 декабря
    if (month === 12 && day === 12) {
        // Добавляем класс к body для активации праздничных стилей
        document.body.classList.add('birthday-mode');
        
        // Создаём баннер с поздравлением
        const banner = document.createElement('div');
        banner.className = 'birthday-banner';
        banner.innerHTML = `
            <div class="birthday-content">
                <span class="birthday-emoji">🎉</span>
                <span class="birthday-text">С ДНЁМ РОЖДЕНИЯ, M1KUNYA! 🎂🎈</span>
                <span class="birthday-emoji">🎊</span>
            </div>
        `;
        document.body.insertBefore(banner, document.body.firstChild);
        
        // Функция создания конфетти
        function createConfetti() {
            const colors = ['#9b59b6', '#8e44ad', '#ff6b9d', '#c44569', '#f8b500', '#ff6b6b', '#4ecdc4', '#95e1d3'];
            const confettiCount = 50;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 3 + 's';
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.body.appendChild(confetti);
                
                // Удаляем конфетти после анимации
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 5000);
            }
        }
        
        // Создаём конфетти каждые 3 секунды
        createConfetti();
        setInterval(createConfetti, 3000);
        
        // Добавляем звёздочки в заголовок
        const headers = document.querySelectorAll('header h1');
        headers.forEach(header => {
            if (!header.innerHTML.includes('⭐')) {
                header.innerHTML = '⭐ ' + header.innerHTML + ' ⭐';
            }
        });
    }
})();

