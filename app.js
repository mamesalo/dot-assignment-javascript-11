function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), timeout);
  });
}
async function greeting() {
  console.log("Hello");
  await delay(2000);
  console.log("World");
}

greeting();
