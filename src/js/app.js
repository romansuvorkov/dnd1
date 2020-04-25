import Trello from './Trello';
import SavingTrello from './SavingTrello';

const storage = new SavingTrello(localStorage);
const trello = new Trello(storage);
trello.init();
