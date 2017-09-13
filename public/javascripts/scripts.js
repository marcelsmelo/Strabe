$(document).ready(function() {
    $('#selectTurma').material_select();
    $('#selectTrabalho').material_select();

    $('#selectTurma').on('change', function() {
        $.get('/tasks', { turma: '1TIIA' }, function(data, status) {
            $('#selectTrabalho').find('option:not(:first)').remove().end();
            data.tasks.forEach(function(element) {
                $('#selectTrabalho').append($('<option>', {
                    value: element.sigla,
                    text: element.nome
                }));
            }, this);
            $('#selectTrabalho').material_select();


        })
    });

    $('.button').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) {},
        onClose: function(el) {},
    });
});