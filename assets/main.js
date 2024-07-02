// function changeMainImage(imageUrl) {
//     document.getElementById('main-image').style.backgroundImage = `url(${imageUrl})`;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const swiper = new Swiper('.swiper-container', {
//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//             bulletClass: 'swiper-pagination-bullet',
//             bulletActiveClass: 'swiper-pagination-bullet-active',
//         },
//     });

//     const thumbnails = document.querySelectorAll('.thumbnail-container img');
//     thumbnails.forEach((thumbnail, index) => {
//         thumbnail.addEventListener('click', () => {
//             swiper.slideTo(index);
//         });
//     });

//     const quantityButtons = document.querySelectorAll('.quantity-btn');
//     const orderDetails = document.getElementById('order-details');

//     quantityButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const quantity = button.getAttribute('data-quantity');
//             const info = button.getAttribute('data-info');

//             // Remove selected class from all buttons
//             quantityButtons.forEach(btn => btn.classList.remove('selected'));

//             // Add selected class to the clicked button
//             button.classList.add('selected');

//             // Update order details
//             orderDetails.innerHTML = `<strong>Selected:</strong> ${info} - ${quantity} Sizzle Bottle${quantity > 1 ? 's' : ''}, ${quantity} Drizzle Bottle${quantity > 1 ? 's' : ''}`;
//         });
//     });

//     // Tab functionality
//     const tabs = document.querySelectorAll('.tab');
//     const tabContents = document.querySelectorAll('.tab-content');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             // Remove active class from all tabs and contents
//             tabs.forEach(t => t.classList.remove('active'));
//             tabContents.forEach(tc => tc.classList.remove('active'));

//             // Add active class to clicked tab and corresponding content
//             tab.classList.add('active');
//             document.querySelector(tab.getAttribute('data-target')).classList.add('active');
//         });
//     });

//     // Frequency Dropdown Function
//     const dropdownSelected = document.getElementById('dropdown-selected');
//     const dropdownOptions = document.getElementById('dropdown-options');

//     dropdownSelected.addEventListener('click', () => {
//         dropdownOptions.classList.toggle('hidden');
//         dropdownSelected.classList.toggle('active');
//     });

//     const options = dropdownOptions.querySelectorAll('.dropdown-option');
//     options.forEach(option => {
//         option.addEventListener('click', (e) => {
//             dropdownSelected.textContent = `Frequency: ${e.target.textContent}`;
//             dropdownOptions.classList.add('hidden');
//             dropdownSelected.classList.remove('active');
//         });
//     });

//     // Close the dropdown if clicked outside
//     document.addEventListener('click', (e) => {
//         if (!dropdownSelected.contains(e.target) && !dropdownOptions.contains(e.target)) {
//             dropdownOptions.classList.add('hidden');
//             dropdownSelected.classList.remove('active');
//         }
//     });
// });


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
