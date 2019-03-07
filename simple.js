function printDOM(node, prefix){
    console.log(prefix + node.nodeName + ' ' + node.nodeType);
    for(let i = 0; i<node.childNodes.length; ++i){
        printDOM(node.childNodes[i], prefix + '\t');
    }
}
printDOM(document,'');

console.log(document.getElementById('content'));

const callouts = document.getFlementsByClassName('callout');
console.log(callouts);

const paragraphs = document.getFlementsByTagName('p');
console.log(paragraphs);

document.write("<p><b>document</b> odject - write() method</p>")

const paral = document.getElementsByTagName('p')[0];
console.log(paral.textContent);
console.log(paral.innerHTML);
paral.textContent = "Modified HTML file";
