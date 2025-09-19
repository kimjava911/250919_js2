const arr = [10, 20, 30, 40, 50]; // 전체 인덱스는 0으로 시작해서 전체 길이 - 1.

// index와 매칭을 위해 0으로 시작.
for (let i = 0; i < arr.length; i++) {
  // 전체를 탐색한다
  console.log(i, arr[i]);
}

const arr2 = [];
for (let i = 0; i < 10; i++) {
  // 10개까지 새롭게 추가하는데...
  arr2.push((i + 1) * 9); // i번째에 인덱스에 1을 더하고 9를 곱한 값을 추가해주겠다
} // 새롭게 추가할 경우에는 length가 없으므로 내가 새롭게 넣어줘야하고요
console.log(arr2);

console.log(arr);
for (let i = 0; i < arr.length; i++) {
  // 조회하거나 수정한다면 기존의 length를 활용가능
  arr[i] /= 100; // 나누기 100을 한 값을 대입하겠다
}
console.log(arr);
