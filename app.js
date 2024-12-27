function clearResult() {
    document.getElementById('result').value = '';
}

function appendToResult(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function handleBackspace() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById('result');
    let expression = result.value;

    try {
        expression = expression.replace(/(\d+)%(\d+)/g, '($1*$2)/100');
        expression = expression.replace(/√/g, "Math.sqrt");
        result.value = eval(expression);
    } catch {
        result.value = 'Error';
    }
}
