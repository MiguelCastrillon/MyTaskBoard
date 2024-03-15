document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeModalButton = document.getElementsByClassName('close')[0];

    modal.style.display = 'none';

    openModalButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModalCreate');
    const modal = document.getElementById('myModalCreate');
    const closeModalButton = document.getElementsByClassName('closeCreate')[0];

    modal.style.display = 'none';

    openModalButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});

$(document).ready(function() {
    $('.icon-option').click(function() {
      $('input[name="selectedIcon"]').val($(this).data('icon'));
    });

    $('.status-option').click(function() {
      $('input[name="selectedStatus"]').val($(this).data('status'));
    });
});

const statusOptions = document.getElementsByClassName('status-option');

function removeSelectedClass() {
    for (const option of statusOptions) {
        option.classList.remove('selected');
    }
}

for (const statusOption of statusOptions) {
    statusOption.addEventListener('click', (event) => {
        // Remueve la clase seleccionada de todos los elementos
        removeSelectedClass();
        
        // Cambia el color del borde del elemento clicado
        event.currentTarget.classList.add('selected');
    });
}

const iconOptions = document.getElementsByClassName('icon-option');

function removeSelected(){
    for (const icon of iconOptions) {
        icon.classList.remove('selected')
    }
}

for (const iconOption of iconOptions) {
    iconOption.addEventListener('click', (event) => {
        removeSelected();
        
        event.currentTarget.classList.add('selected');
    });
}


