$(function () {

    $('.btn-outline-primary').click(function (ev) {
        let id = $(ev.target).parent().attr('data-id');//to access the data-id of parent div of btn (add to cart)
        //console.log(id);
    })


})

function save_item() {          //for saving item to local storage

}
