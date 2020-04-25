export default class SavingTrello {
  constructor(storage) {
    this.storage = storage;
  }

  save(state) {
    this.storage.setItem('trello', JSON.stringify(state));
  }

  load() {
    try {
      return JSON.parse(this.storage.getItem('trello'));
    } catch (e) {
      throw new Error('Invalid object');
    }
  }
}
