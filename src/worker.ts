class TestObj {
  public counter = 0;

  method() {} // Прототип не клонируется

  // Ошибка при клонировании:
  // arrow = () => {};
  // func = function () {};
}

const obj = new TestObj();

setInterval(() => {
  postMessage(obj);
  obj.counter++;
}, 1000);

onmessage = function (event) {
  obj.counter += event.data;
  // postMessage(message); отсюда можем так ответить
};
