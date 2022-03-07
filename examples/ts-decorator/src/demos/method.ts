function mDecorate(proto: any, key: string, desc: PropertyDescriptor) {
  console.log('prototype: ', proto);
  console.log('key: ', key);

  const cloneDescVal = desc.value; // save
  desc?.value();

  desc.value = function (...args: any[]) {
    args = args.map((arg) => {
      if (typeof arg === 'string') {
        return arg.trim();
      }

      return arg;
    });

    console.log('args: ', args);
    cloneDescVal.call(this, args);
  };

  // desc.value('   sunny  '); // post-intercept
}

class RoleService {
  constructor(public roleName = 'admin') {}

  @mDecorate
  distributeRoles(role: string) {
    console.log('distribute roles: ', role);
  }
}

const r = new RoleService();

r.distributeRoles('editor');
