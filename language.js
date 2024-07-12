const languageSelector = document.getElementById('language-selector');
        const languagePopup = document.getElementById('language-popup');

        // Показываем и скрываем попап языка при клике на "ЯЗЫК"
        languageSelector.addEventListener('click', function() {
            languagePopup.classList.toggle('show');
        });

        // Обработчик выбора языка
        languagePopup.addEventListener('click', function(event) {
            const langLink = event.target.closest('.lang-link');
            if (langLink) {
                const langCode = langLink.dataset.lang;
                // Здесь можно добавить логику для изменения языка на сайте
                console.log(`Выбран язык: ${langCode}`);
                // Закрываем попап после выбора языка
                languagePopup.classList.remove('show');
            }
        });