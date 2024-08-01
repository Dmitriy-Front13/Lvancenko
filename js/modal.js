
// const modal = document.getElementById("modal-support"),
// btn = document.querySelector('.support__btn'),
// form = document.querySelector('.support__form');

// form.addEventListener('submit', () => {
//         e.preventDefault();
// });

// btn.addEventListener('click', () => {
//     modal.style.display = "block";
// })

// document.addEventListener('keydown', (e) => {
// if (e.code === "Escape") {
// modal.style.display = "none";
// };
// });


// modal.addEventListener('mousedown', (event) => {
// if (event.target === e) {
// modal.style.display = "none";
// }
// });


<script>
Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    Carousel: {
    infinite: false, // Отключить цикличное прокручивание
    slidesPerPage: 1, // Количество слайдов на странице
    preload: false // Не загружать соседние изображения
}
});
</script>

data-fancybox data-src="#modal-support
$(document).ready(function() {
const $modal = $("#modal-support"),
  $btn = $('.support__btn'),
  $form = $('.support__form'),
  $body = $('body');

$form.on('submit', function(e) {
e.preventDefault();
});

$btn.on('click', function() {
$modal.fadeIn();
$body.addClass('no-scroll');
});

$(document).on('keydown', function(e) {
if (e.code === "Escape") {
    $modal.fadeOut();
    $body.removeClass('no-scroll');
}
});

$modal.on('mousedown', function(event) {
if (event.target === this) {
    $modal.fadeOut();
    $body.removeClass('no-scroll');
}
});
});