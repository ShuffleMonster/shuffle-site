export default function promisify(func, args) {
    return new Promise((res, rej) => {
        func(...args, (err, data) => {
            if (err) { return rej(err); }
            return res(data);
        });
    });
}
