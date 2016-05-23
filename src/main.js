//TODO: Please write code in this file.
function printInventory(inputs) {
    var allItems = loadAllItems();
    
    var productList = [];
    var sum = 0;
    var result = "***<没钱赚商店>购物清单***\n";
    inputs.forEach(function (
        element) {
        if (productList[element]) {
            productList[element].num++;
        }
        else {
            productList[element] = {
                num: 1
            };
        }
    }, this);
    
    for (var key in productList) {
        allItems.forEach(function(element) {
            if(element.barcode==key){
                productList[key].name=element.name;
                productList[key].price=element.price;
                productList[key].unit=element.unit;
            }
        }, this);
    }
    
    for (var key in productList) {
        result += "名称：" + productList[key].name + "，";
        result += "数量：" + productList[key].num + productList[key].unit + "，";
        result += "单价：" + productList[key].price.toFixed(2) + "(元)，"
        var productSum=productList[key].price*productList[key].num;
        sum+=productSum;
        result += "小计：" + productSum.toFixed(2) + "(元)\n";
    }

    result += '----------------------\n总计：' + sum.toFixed(2) + '(元)\n**********************';
    console.log(result);
}