let dictionary = {};

function chooseLang(lang) {
  console.log(`Dictionary basic language is ${lang}`);
}

let proxy = new Proxy(dictionary, {
  get(target, phrase) {
    console.log(`Phrase: ${phrase}`);
    return target[phrase];
  },
  set(target, prop, value) {
    console.log(`Adding ${value} in ${prop}`);
    return true;
  },
  deleteProperty(target, prop) {
    console.log(`Sucessful deleting: ${prop}`)
  },
  has(target, prop) {
    console.log(`Yes, there are ${prop}`);
  }
});

proxy["Proxy"] = "Прокси";
proxy["Proxy"];

proxy["Server"] = "Сервер";
proxy["Server"];

delete proxy["Server"];

("Proxy" in proxy);
