import { Slice } from './slice';
import { User } from '../../interfaces/user';

export class UserSlice extends Slice<User> {
  constructor(initialValue: User | null = null) {
    super(initialValue);
  }
}

export default UserSlice;
