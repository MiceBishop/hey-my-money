import { observable } from "mobx";

class ObservableRealmStore {
  addTransac(transac) {
    console.log(transac)
  }

}

const observableRealmStore = new ObservableRealmStore();
export default observableRealmStore;
