function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, Math.max(ms, 0)));
}

export { delay };