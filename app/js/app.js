// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/node_modules/jquery-toast-plugin/src/jquery.toast.js'
import Swiper from "swiper"

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.s-games__slider', {
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2.3,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5.5,
                spaceBetween: 20,
            }
        }
    })
})

$(document).ready(function () {
    function copyToClipboard(text) {
        var textArea = document.createElement( "textarea" );
        textArea.value = text;
        document.body.appendChild( textArea );
        textArea.select();

        try {
            var successful = document.execCommand( 'copy' );
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy',err);
        }
        document.body.removeChild( textArea );
    }

    $('#hamburger').click(function () {
        $(this).toggleClass('is-active')
        $('.header__menu-list').toggleClass('active')
    })

    $('.promocode__btn').click(function () {
        copyToClipboard($('#code-input').val())
        $.toast('Code copied to clipboard!')
    })

    $('.s-games__container').css('margin-right', )

    for (let i = 0; i <= $('.s-reg__number').length; i++) {
        $('.s-reg__number').eq(i).text(i + 1)
    }

    $('.s-faq__item').click(function (){
        $(this).children('.s-faq__ask').slideToggle(300)
        $(this).toggleClass('active')
    })
})
