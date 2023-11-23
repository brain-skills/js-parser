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

    console.save = function (data, filename) {
        var blob = new Blob([data], {type: 'text/plain'});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    
    console.save(JSON.stringify(prod), 'output.txt');
});