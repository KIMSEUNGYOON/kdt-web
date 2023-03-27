let answer = Math.random() * 10;
while (1) {
  let guessValue = prompt("UP DOWN 게임을 시작합니다");
  if (guessValue === "q" || guessValue === "포기") {
    alert("포기하셨습니다");
    break;
  } else if (guessValue === answer) {
    alert(`${guessValue}!! 정답입니다!!`);
    break;
  } else if (guessValue > answer) {
    alert("Down");
    continue;
  } else if (guessValue < answer) {
    alert("Up");
    continue;
  }
}
