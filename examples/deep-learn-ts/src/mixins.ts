// all mixins need
type Constructor<T = {}> = new (...args: any[]) => T;

// add property
function TimesTamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// add property and method
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false;

    activate() {
      this.isActivated = true;
    }

    deactivate() {
      this.isActivated = false;
    }
  };
}

class User {
  name = '';
}

const TimesTampedUser = TimesTamped(User);
const TimestampedActivatableUser = TimesTamped(Activatable(User));
