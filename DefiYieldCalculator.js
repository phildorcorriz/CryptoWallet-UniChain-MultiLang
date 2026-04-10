function calculateYield(amount, apy, days) {
    const rate = apy / 100 / 365;
    return amount * rate * days;
}

console.log("=== DeFi收益计算器 ===");
console.log("收益:", calculateYield(1000, 12, 30));
