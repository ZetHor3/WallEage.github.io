document.addEventListener('DOMContentLoaded', (event) => {
    const tariffs = [
        { sliderId: 'slider1', priceId: 'price1' },
        { sliderId: 'slider2', priceId: 'price2' },
        { sliderId: 'slider3', priceId: 'price3' }
    ];

    const prices = ["1.99$", "6.99$", "10$", "22.99$"];

    tariffs.forEach(tariff => {
        const slider = document.getElementById(tariff.sliderId);
        const priceDisplay = document.getElementById(tariff.priceId);

        slider.addEventListener('input', () => {
            const priceIndex = slider.value - 1;
            priceDisplay.textContent = prices[priceIndex];
        });
    });
});
