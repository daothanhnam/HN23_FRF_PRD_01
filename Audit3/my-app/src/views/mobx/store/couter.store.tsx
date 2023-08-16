import { action, computed, makeObservable, observable } from "mobx";

interface DataProps {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}
class CouterStore {
  count = {
    numberA: 0,
    numberB: 0,
    c: [],
  };

  data: DataProps = {};

  constructor() {
    makeObservable(this, {
      count: observable,
      data: observable,
      total: computed,
      increaseCount1: action,
      increaseCount2: action,
      setData: action,
      getCount: action,
    });
  }

  //computed

  get total() {
    console.log("Caculating");
    return this.count.numberA + this.count.numberB;
  }

  //action
  increaseCount1(number: number) {
    return (this.count.numberA += number);
  }
  //action2
  increaseCount2(number: number) {
    return (this.count.numberB += number);
  }

  //action setData
  setData(data: any) {
    this.data = data;
  }

  //action getCount
  getCount() {
    console.log("getCouting");
    return this.count.numberA + this.count.numberB;
  }
}

export const CounterStore = new CouterStore();
