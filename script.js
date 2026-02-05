// Данные для FAQ
const faqData = [
    {
        question: "Как начать зарабатывать?",
        answer: "Для начала заработка вам необходимо пройти простую процедуру регистрации, пополнить баланс в личном кабинете любым удобным способом и открыть депозит на выбранный срок."
    },
    {
        question: "Какова минимальная сумма инвестиций?",
        answer: "Минимальная сумма для открытия депозита составляет всего 100 рублей. Это позволяет протестировать работу нашей платформы с минимальными рисками."
    },
    {
        question: "Какие гарантии предоставляет компания?",
        answer: "Мы используем диверсифицированный портфель инвестиций, что снижает риски. Кроме того, наша деятельность регулируется законодательством, а средства клиентов находятся на защищенных счетах."
    },
    {
        question: "Как быстро выводятся средства?",
        answer: "Заявки на вывод средств обрабатываются в автоматическом режиме или операторами в течение 24 часов с момента подачи заявки."
    }
];

// Инициализация FAQ при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const faqListEl = document.getElementById('faq-list');
    const faqTitleEl = document.getElementById('faq-title');
    const faqBodyEl = document.getElementById('faq-body');

    // Отрисовка вопросов
    faqData.forEach((item) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'faq-item';
        qDiv.textContent = item.question;
        
        // Обработка клика
        qDiv.addEventListener('click', () => {
            // Убираем активный класс у всех
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            // Добавляем активный класс нажатому
            qDiv.classList.add('active');
            
            // Обновляем контент
            faqTitleEl.textContent = item.question;
            faqBodyEl.textContent = item.answer;
        });

        faqListEl.appendChild(qDiv);
    });

    // Активируем первый вопрос по умолчанию
    if (faqListEl.firstChild) {
        faqListEl.firstChild.click();
    }
});