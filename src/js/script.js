$(document).ready(function (){
    $('.burger,.menu-btn').click(function (event){
        $('.burger-mod').toggleClass('burger-mod-active')
        $('.burger').toggleClass('burger-active')
        $('.body').toggleClass('lock')
    })

})
