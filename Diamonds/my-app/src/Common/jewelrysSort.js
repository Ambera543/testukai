function jewelrysSort(state, by) {
    const jewelrys = state.slice();
    switch (by) {
        case 'product_asc':
           jewelrys.sort((a, b) => {
                const productA = a.product.toUpperCase();
                const productB = b.product.toUpperCase();
                if (productA < productB) {
                    return -1;
                }
                if (productA > productB) {
                    return 1;
                }
                return 0;
            });
            break;
        case 'product_desc':
           jewelrys.sort((a, b) => {
                const productA = a.product.toUpperCase();
                const productB = b.product.toUpperCase();
                if (productA < productB) {
                    return 1;
                }
                if (productA > productB) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'price_asc':
           jewelrys.sort(function(a, b) {
                return a.price - b.price;
            });
            break;
        case 'price_desc':
           jewelrys.sort(function(a, b) {
                return b.price - a.price;
            });
            break;
        default:
    }
    return jewelrys
}
export default jewelrysSort;