import { BehaviorSubject } from 'rxjs';

export class Slice<T> extends BehaviorSubject<T | null> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(initalValue: T | null) {
    super(initalValue);
  }
}

export default Slice;
