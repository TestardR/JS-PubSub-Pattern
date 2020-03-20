class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(eventName, callback) {
    if (!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(callback);
  }

  publish(eventName, data) {
    if (!Array.isArray(this.subscribers[eventName])) {
      return;
    }
    this.subscribers[eventName].forEach(callback => {
      callback(data);
    });
  }
}

function showMeTheMoney(money) {
  console.log(money);
}

const ps = new PubSub();

ps.subscribe('show-money', showMeTheMoney);

ps.publish('show-money', 1000000);
