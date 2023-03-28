export default function calculateProgress(value, max) {
    let result = (value / 100) * max;
    if (result.toString() === NaN.toString()) {
        result = 0;
    }
    return result;
}