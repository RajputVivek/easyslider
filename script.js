$(document).ready(function () {
            const images = ['burger.jpg', 'chatoree.jpg', 'burger.jpg'];
            const texts = [
                { element: 'h1', text: 'Authentic Regional Street Food With Quality', class: '' },
                { element: 'h1', text: 'Explore Our Retail Outlets throughout Mumbai Suburbs.', class: '' },
                { element: 'h1', text: 'All the Regional delicacies in your cities.', class: '' }
            ];

            let imgUrl = '/static/cwf/images/suruchi/';
            let hero = $('#hero');
            let rotator = $('#rotator');
            hero.hide();
            rotator.show();

            $(window).on('load', function () {
                rotator.hide();
                hero.fadeIn('slow');

                let currentIndex = 0;

                setInterval(function () {
                    hero.find('.hero-slide').css('background-image', 'url(' + imgUrl + images[currentIndex] + ')');
                    currentIndex = (currentIndex + 1) % images.length;

                    // Clear previous text and create new text element
                    hero.find('.hero-display').empty().append(
                        $('<' + texts[currentIndex]['element'] + '>').text(texts[currentIndex]['text'])
                    );
                }, 3500);
            });
        });
