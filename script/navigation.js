$(document).ready(function(){
    $('.left-side  li').click(function (event) {
		// Получаем ID блок со свойствами
        var id_prop = $(this).attr('data-id');
        // Удаляем у всех активность
        $('.left-side  li').removeClass('active');
        // Добавляем текущему активность
        $(this).addClass('active');
        // Скрываем весь текст
        $('.desc_props').removeClass('active_doc');
        // Открываем нужный блок
        $('.desc_props[data-id='+id_prop+']').addClass('active_doc');
    });
});







