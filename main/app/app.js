
const swiper = null;
function t() {
    if (screen.width > 768) {
        swiper = new Swiper('.swiper', {
            // Optional parameters
            slidesPerView: 3,
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        });
    } else {
        swiper = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        });
    }
};
t();