window.addEventListener('DOMContentLoaded', ()=>{
    const body = document.querySelector('body');
    let objNames = [];
    let objPrices = [];

    function recursy(element){
        element.childNodes.forEach(node => {
            if(node.nodeName.match(/^H\d/)){
                nodeName = node.textContent;
                objNames.push(nodeName);
            } else if(element.classList.contains('price')) {
                nodeName = node.textContent;
                objPrices.push(nodeName);
            } else {
                recursy(node);
            }
        })
    }
    
    recursy(body);

    const prod = objNames.map((product, index) => ({
        product,
        genre: objPrices[index]
    }));

    console.log(prod);
});