function start() {
    let order = Math.floor(Math.random() * 40) + 1;
    localStorage.setItem("storeorder", order);
}