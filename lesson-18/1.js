class DB {
  constructor() {
    this.db = new Map();
  }

  generateRandomNumber() {
    return Math.random()
      .toString(36)
      .substr(2, 5);
  }

  validateUser(user) {
    const stringified = JSON.stringify(user, null, 2);

    if (typeof user !== "object") {
      throw new TypeError(`${stringified} <-- should be an Object!`);
    } else if (!user.name && typeof user.name !== "string") {
      throw new TypeError(
        `${stringified} <-- should contain required Property 'name' that should be a string type!`
      );
    } else if (!user.age && typeof user.age !== "number") {
      throw new TypeError(
        `${stringified} <-- should contain required Property 'age' that should be a number type!`
      );
    } else if (!user.country && typeof user.country !== "string") {
      throw new TypeError(
        `${stringified} <-- should contain required Property 'country' that should be a string type!`
      );
    } else if (!user.salary && typeof user.salary !== "number") {
      throw new TypeError(
        `${stringified} <-- should contain required Property 'salary' that should be a number type!`
      );
    }
  }

  validateData(data) {
    const stringified = JSON.stringify(data, null, 2);

    if (typeof data !== "object") {
      throw new TypeError(`${data} <-- should be an Object!`);
    }

    if (data.name || data.age || data.country || data.salary) {
      /* < -- question to Teacher
                // what is the best way to validate such cases? 
            */
    } else {
      throw new Error(
        `${stringified} should contain one of properties - name, age, country, salary`
      );
    }
  }

  create(user) {
    try {
      validateUser(user);
      const id = this.generateRandomNumber();

      this.db.set(id, user);

      return id;
    } catch (error) {
      console.error(`${error.name} info 😬: \n ${error.message}`);
    }
  }

  read(...rest) {
    const [id] = rest;
    if (rest.length !== 1) {
      throw new Error(
        `Method 'read' expects 'id' as required argument of string type!`
      );
    } else if (typeof id !== "string") {
      throw new Error(`${id} should be a string type only!`);
    } else if (!this.db.has(id)) {
      return null;
    }

    const userWithoutId = this.db.get(id);

    return { ...userWithoutId, id };
  }

  readAll() {
    const arrayOfUsers = [];

    if (arguments.length !== 0) {
      throw new Error("ReadAll method doesnt expect any arguments!");
    }

    this.db.forEach((user, id) => arrayOfUsers.push({ ...user, id }));

    return arrayOfUsers;
  }

  update(id, data) {
    try {
      if (arguments.length !== 2) {
        throw new Error("Method update expects 2 arguments!");
      }
      if (typeof id !== "string") {
        throw new Error(`Type of ${id} should be a string`);
      }
      if (!this.db.has(id)) {
        throw new Error(`There is no user with given Id - ${id}`);
      }

      this.validateData(data);

      const user = this.db.get(id);
      const updatedUser = { ...user, ...data };

      this.db.set(id, updatedUser);

      return id;
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    }
  }

  delete(id) {
    if (typeof id !== "string") {
      throw new Error(`Invalid type of ${id}`);
    }

    if (!this.db.has(id)) {
      throw new Error(`There is no User with ${id} id`);
    }

    return this.db.delete(id);
  }
}
