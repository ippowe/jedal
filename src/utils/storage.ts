function checkLocalStorage() {
  try {
    localStorage.setItem('JEDAL', 'JEDAL');
    localStorage.removeItem('JEDAL');
    return true;
  } catch (e) {
    return false;
  }
}

class FallbackStorage {
  fallbackStorage: {
    [key: string]: string;
  } = {};

  valid: boolean = checkLocalStorage();

  setItem(key: string, value: any) {
    key = `JEDAL_${key}`;
    const string = JSON.stringify(value);

    if (this.valid) {
      localStorage.setItem(key, string);
      return;
    }
    this.fallbackStorage[key] = string;
  }

  getItem(key: string) {
    key = `JEDAL_${key}`;
    let value = this.valid ? localStorage.getItem(key) : this.fallbackStorage[key];

    try {
      return JSON.parse(value || '');
    } catch (e) {
      return null;
    }
  }

  removeItem(key: string) {
    key = `JEDAL_${key}`;

    if (this.valid) {
      localStorage.removeItem(key);
      return;
    }
    delete this.fallbackStorage[key];
  }
}

const storage = new FallbackStorage();

export default storage;
