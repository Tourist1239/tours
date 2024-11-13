document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.star-rating').forEach(starRating => {

        starRating.addEventListener('click', (e) => {
            
            const stars = starRating.querySelectorAll('.star');
            const ratingValue = e.target.getAttribute('data-value'); 
            const tour = starRating.getAttribute('data-tour'); 
            const ratingText = document.querySelector(`#${tour}-rating`); 
            const ratingDisplay = starRating.nextElementSibling; 

            ratingText.textContent = ratingValue;
            ratingDisplay.classList.remove('hidden'); 

            stars.forEach(star => {
                star.classList.remove('selected');
            });

            stars.forEach(star => {
                if (star.getAttribute('data-value') <= ratingValue) {
                    star.classList.add('selected');
                }
            });
        });
    });
});
