export default class Counter {
  state = {
    get title() { return typeof bundleName === 'undefined' ? 'counter.js' : bundleName },
    count: 0,
  };

  actions = {
    increment: () => this.state.count++,
    decrement: () => this.state.count--,
    reset: () => (this.state.count = 0),
    minimize: () => window.minimize?.(),
    close: () => window.close(),
  };
}
