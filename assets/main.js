function changeMainImage(index) {
    const mainImage = document.querySelector('.swiper-container .swiper-wrapper');
    const images = mainImage.querySelectorAll('.swiper-slide img');
    const selectedImage = images[index].src;
    document.querySelector('.swiper-container .swiper-slide img').src = selectedImage;
}

document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.quantity-btn').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById('dropdown-selected').addEventListener('click', function() {
    document.getElementById('dropdown-options').classList.toggle('hidden');
});

document.querySelectorAll('.dropdown-option').forEach(option => {
    option.addEventListener('click', function() {
        document.getElementById('dropdown-selected').textContent = this.textContent;
        document.getElementById('dropdown-options').classList.add('hidden');
    });
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        this.classList.add('active');
        document.querySelector(this.dataset.target).classList.add('active');
    });
});
