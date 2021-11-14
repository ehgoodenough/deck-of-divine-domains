export default class Random {
    static sign() {
        return Math.random() < 0.5 ? -1 : +1
    }
    static number(a, b) {
        const min = Math.min(a, b)
        const max = Math.max(a, b)
        return min + (Math.random() * (max - min))
    }
    static integer(a, b) {
        return Math.floor(Random.number(a, b))
    }
    static element(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
}
