
//script for maintaining home page and adding product into local storage while using add to cart button
$(function () {

    var qty = [0,0,0,0,0,0,0,0,0,0,0,0];

    $('.btn-outline-primary').click(function (ev) {
        let id = $(ev.target).parent().attr('data-id');//to access the data-id of parent div of btn (add to cart)
        //console.log(id);
        add_and_save(id);
    })


})

//for saving item to local storage
function save_item() {

    localStorage.setItem('Qty',JSON.stringify(qty));
}

//to access local storage for accessing qty
function retrieve() {
    var q = localStorage.getItem('Qty');
    if(q) {
        qty = JSON.parse(q);
    }
}

//adding and saving items to local storage on pressing add to cart btn
function add_and_save(id) {
    retrieve();
    qty[id]++;
    save_item();
}


