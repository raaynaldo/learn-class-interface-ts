class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = { name: 'ray', describe: accounting.describe };
accountingCopy.describe();
