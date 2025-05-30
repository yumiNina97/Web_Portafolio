
type Constructor<T = {}> = new (...args: any[]) => T;


function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        timestamp: Date = new Date();

        getFormattedTimestamp(): string {
            return this.timestamp.toISOString();
        }
    };
}

export default Timestamped;