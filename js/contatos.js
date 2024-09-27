window.addEventListener("DOMContentLoaded", () => {
    // Логика для формы контактов
    const contactForm = document.getElementById("contactForm");
    const thankYouModal = document.getElementById("thankYouModal");
    const closeModalButton = document.getElementById("closeModal");

    if (contactForm && thankYouModal && closeModalButton) {
        // Событие отправки формы
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            thankYouModal.classList.add("active"); // Показать модальное окно
            contactForm.reset(); // Очистить поля формы
        });

        // Событие закрытия модального окна
        closeModalButton.addEventListener("click", () => {
            thankYouModal.classList.remove("active"); // Скрыть модальное окно
        });

        // Закрытие модального окна при клике вне его области
        window.addEventListener("click", (e) => {
            if (e.target === thankYouModal) {
                thankYouModal.classList.remove("active"); // Скрыть модальное окно
            }
        });
    } else {
        console.error("Некоторые элементы формы или модального окна не найдены в DOM.");
    }
});
