document.addEventListener("DOMContentLoaded", () => {

    // Получаем линейный список всех узлов документа
    const nodes = [];
    (function recursive(node) {
        nodes.push(node);
        node = node.firstElementChild;
        while (node) {
            recursive(node);
            node = node.nextElementSibling;
        }
    })(document.documentElement);

    let index = 0;

    function processNode(callback) {
        const node = nodes[index];
        const text = node.tagName 
            ? `Тег: <${node.tagName.toLowerCase()}>`
            : `Узел: ${node.nodeName}`;

        let msg = text + "\n";

        if (index === 0) {
            msg += "Перейти к следующему узлу? (OK — да, Cancel — выход)";
            if (confirm(msg)) callback("next");
            else callback("exit");
        } 
        else if (index === nodes.length - 1) {
            msg += "Это последний узел. Вернуться? (OK — да, Cancel — выход)";
            if (confirm(msg)) callback("prev");
            else callback("exit");
        } 
        else {
            msg += "Идти дальше? (OK — дальше, Cancel — назад)";
            if (confirm(msg)) callback("next");
            else callback("prev");
        }
    }

    function next(callback) {
        if (index < nodes.length - 1) index++;
        callback();
    }

    function prev(callback) {
        if (index > 0) index--;
        callback();
    }

    function start() {
        processNode(function (direction) {
            if (direction === "next") {
                next(start);
            } else if (direction === "prev") {
                prev(start);
            } else {
                alert("Навигация завершена.");
            }
        });
    }

    start();
});
