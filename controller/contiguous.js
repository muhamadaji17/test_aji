
const a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
const m = 4;
const k = 10;

function Contiguous(arr, m, k) {
    let count = 0;

    for (let i = 0; i <= arr.length - m; i++) {
        let subArray = arr.slice(i, i + m);
        let sumCounted = false;

        for (let j = 0; j < m; j++) {
            for (let l = j + 1; l < m; l++) {
                if (subArray[j] + subArray[l] === k && !sumCounted) {
                    count++;
                    sumCounted = true;
                }
            }
        }
    }

    return count;
}



const test = (req, res) => {
    const baru = Contiguous(a, m, k)
    res.json({
        data: baru,
        message: 'berhasil',
        status: 200
    })
}
export default { test }
