
$(function () {

     qty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
     p_name = ["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8", "product9", "product10", "product11", "product12"];
     price = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
     item_price = [0,0,0,0,0,0,0,0,0,0,0,0];
}

function calculate_amt() {
    for(let i in item_price){
        item_price[i] = qty[i]*price[i];
    }
}

function total_amt() {
    let sum=0;
    for(let i in item_price){
        sum = sum + item_price[i];
    }
}

