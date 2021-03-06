/**
 * Listing 4-5. Single responsibility principle (SRP) violation
 */

console.log("----------");

class Database {
  movies: Array<Movie> = [];

  static connect(connString: string, collections: Array<string>): Database {
    return new Database();
  }

  save() {
    console.log("Database.save()");
  }
}

class Movie {
  private title: string;
  private year: number;
  private db: Database;

  constructor(title: string, year: number, db: Database) {
    this.title = title;
    this.year = year;
    this.db = Database.connect("username:password@mydb", ["movies"]);
  }

  save() {
    this.db.save();
  }
}

console.log("----------");
export {};
