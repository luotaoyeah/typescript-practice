/**
 * Listing 4-6. Separate reasons for change
 */

console.log("----------");

class Database {
  movies: Array<Movie> = [];

  static connect(connString: string, collections: Array<string>): Database {
    return new Database();
  }

  save(t: any) {
    console.log("Database.save()", t);
  }
}

class MovieRepository {
  private db: Database;

  constructor() {
    this.db = Database.connect("username:password@mydb", ["movies"]);
  }

  save(movie: Movie): void;
  // eslint-disable-next-line @typescript-eslint/unified-signatures
  save(movies: Array<Movie>): void;
  save(movie: any): void {
    this.db.save(movie);
  }
}

class Movie {
  private title: string;
  private year: number;

  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }
}

const movie01 = new Movie("tom", 2016);
const movie02 = new Movie("tom", 2017);
const movie03 = new Movie("tom", 2018);
const movieRepository = new MovieRepository();

/* Database.save() { title: 'tom', year: 2016 } */
movieRepository.save(movie01);

/* Database.save() [ { title: 'tom', year: 2017 }, { title: 'tom', year: 2018 } ] */
movieRepository.save([movie02, movie03]);

console.log("----------");
export {};
