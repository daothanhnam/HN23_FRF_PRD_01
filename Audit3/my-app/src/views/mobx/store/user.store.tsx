import { action, makeObservable, observable } from "mobx";

class UserStore {
  username = "NamDT20";
  userId = "001122";

  constructor() {
    makeObservable(this, {
      username: observable,
      userId: observable,
      updateUserName: action,
    });
  }
  updateUserName(name: string) {
    this.username = name;
  }
  updateUserId(id: string) {
    this.userId = id;
  }
}

export const userStore = new UserStore();
