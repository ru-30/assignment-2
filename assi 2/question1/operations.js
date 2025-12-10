const validateInput = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return "Invalid input";
    }
    return true; 
};

export function add(a, b) {
    const validation = validateInput(a, b);
    if (validation !== true) return validation;
    return a + b;
}

export function subtract(a, b) {
    const validation = validateInput(a, b);
    if (validation !== true) return validation;
    return a - b;
}

export function multiply(a, b) {
    const validation = validateInput(a, b);
    if (validation !== true) return validation;
    return a * b;
}

export function divide(a, b) {
    const validation = validateInput(a, b);
    if (validation !== true) return validation;
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

export function power(base, exponent) {
    const validation = validateInput(base, exponent);
    if (validation !== true) return validation;

    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    
    return Math.pow(base, exponent);
}
