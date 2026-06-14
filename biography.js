const biographyTranslations = {
    ru: {
        title: "Обо мне:",
        bio: "Привет! Я Ramondrole! У меня есть канал на YouTube и в Telegram, сервер в Discord, комьюнити в Telegram, а также сообщество в ВКонтакте. Я увлекаюсь созданием сайтов (сообственно мои проекты можно увидеть на этом сайте), а также снимаю видео на YouTube. Мои любимые игры: Roblox, Minecraft, Teardown, Grand Theft Auto V, Counter Strike 2 и Hello Neighbor. Мое самое популярное видео (на момент написания, 15.11.2025) \"Пробежка с пулями / Half life 2 / часть 1\", оно набрало 153 просмотра, а самый популярный Shorts набрал 1,6 тыс. просмотров. Сейчас у меня 23 подписчика. Я очень надеюсь, что в будущем я достигну успеха.",
        about: "Обо мне",
        games: "Наши игры",
        functions: "Полезные функции"
    },
    en: {
        title: "About me:",
        bio: "Hi! I'm Ramondrole! I have a YouTube and Telegram channel, a Discord server, a Telegram community, and a VKontakte community. I'm passionate about creating websites (you can see my projects on this site), and I also make videos on YouTube. My favorite games: Roblox, Minecraft, Teardown, Grand Theft Auto V, Counter Strike 2, and Hello Neighbor. My most popular video (as of 15.11.2025) is \"Running with bullets / Half life 2 / part 1\", which got 153 views, and my most popular Shorts got 1.6k views. Currently I have 23 subscribers. I really hope that in the future I will achieve success.",
        about: "About me",
        games: "Our games",
        functions: "Useful functions"
    },
    de: {
        title: "Über mich:",
        bio: "Hallo! Ich bin Ramondrole! Ich habe einen YouTube- und Telegram-Kanal, einen Discord-Server, eine Telegram-Community und eine VKontakte-Community. Ich beschäftige mich mit der Erstellung von Websites (meine Projekte sind auf dieser Website zu sehen) und mache auch Videos auf YouTube. Meine Lieblingsspiele: Roblox, Minecraft, Teardown, Grand Theft Auto V, Counter Strike 2 und Hello Neighbor. Mein beliebtestes Video (Stand 15.11.2025) ist \"Running with bullets / Half life 2 / part 1\", das 153 Aufrufe erhielt, und meine beliebtesten Shorts erhielten 1,6 Tausend Aufrufe. Derzeit habe ich 23 Abonnenten. Ich hoffe sehr, dass ich in Zukunft Erfolg haben werde.",
        about: "Über mich",
        games: "Unsere Spiele",
        functions: "Nützliche Funktionen"
    }
};

let currentLang = localStorage.getItem('biography_language') || 'ru';

function t(key) {
    return biographyTranslations[currentLang]?.[key] || biographyTranslations.ru[key];
}

function updateBiographyUILanguage() {
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = t('title');
    
    const bioTextEl = document.getElementById('bioText');
    if (bioTextEl) bioTextEl.textContent = t('bio');
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const flags = { ru: '🌐 RU', en: '🌐 EN', de: '🌐 DE' };
        langBtn.innerHTML = flags[currentLang];
    }
    
    document.querySelectorAll('.nav-links a').forEach((link, idx) => {
        const keys = ['about', 'games', 'functions'];
        if (idx < keys.length) link.textContent = t(keys[idx]);
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('biography_language', lang);
    updateBiographyUILanguage();
}

document.querySelectorAll('.lang-dropdown a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        if (lang) changeLanguage(lang);
    });
});

updateBiographyUILanguage();