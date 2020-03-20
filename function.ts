function pubSub() {
  const subscribers = {};

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
  }

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach(callback => {
      callback(data);
    });
  }

  return {
    subscribe,
    publish
  };
}

function showMeTheMoney(money) {
  console.log(money);
}

const ps = pubSub();

ps.subscribe('show-money', showMeTheMoney);

ps.publish('show-money', 1000000);
