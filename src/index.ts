const worker = new Worker("/scripts/worker.js");

worker.onmessage = (event) => {
  const counterElement = document.getElementById("counter");

  if (counterElement) {
    counterElement.innerHTML = event.data.counter;
  }

  event.data.counter += 100; // не влияет на объект внутри worker, т.к. в event передается копия
};

function terminateWorker() {
  worker.terminate();
}

function addN(n: number) {
  worker.postMessage(n);
}
