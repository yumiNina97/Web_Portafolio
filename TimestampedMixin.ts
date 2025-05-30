// TimestampedMixin.ts

// Definimos un tipo para el constructor de la clase base
type Constructor<T = {}> = new (...args: any[]) => T;

// El Mixin
function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        timestamp: Date = new Date();

        getFormattedTimestamp(): string {
            return this.timestamp.toISOString();
        }
    };
}

// Ejemplo de uso:
// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const TimestampedUser = Timestamped(User);
// const user = new TimestampedUser('Alice');
// console.log(user.name, user.getFormattedTimestamp()); // Alice 2023-10-27T...Z

export default Timestamped;