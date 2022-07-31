import { BehaviorSubject } from 'rxjs';

export class Slice<T> extends BehaviorSubject<T | null> {
  constructor(initalValue: T | null) {
    super(initalValue);
  }
}
