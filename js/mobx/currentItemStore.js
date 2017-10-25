import { observable } from "mobx";

class ObservableCurrentItemStore {
  @observable item = null;

  updateItem(item) {
    this.item = item;
  }
}

const observableCurrentItemStore = new ObservableCurrentItemStore();
export default observableCurrentItemStore;
