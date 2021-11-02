const newArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']

for (let i in newArr) {
  setTimeout(() => {
    process.stdout.write(newArr[i]);
  }, (100 + 200 * i));
}
