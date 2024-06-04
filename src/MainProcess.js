function MainProcess(hooks) {
  // eslint-disable-next-line no-unused-expressions
  typeof hooks.one === "function" ? hooks.one() : null;
  console.log("메인 프로세스의 1단계 작업이 시작됩니다. ");
  // eslint-disable-next-line no-unused-expressions
  typeof hooks.two === "function" ? hooks.two() : null;
  console.log("메인 프로세스의 2단계 작업이 시작됩니다. ");
  // eslint-disable-next-line no-unused-expressions
  typeof hooks.three === "function" ? hooks.three() : null;
  console.log("메인 프로세스의 3단계 작업이 시작됩니다. ");
  // eslint-disable-next-line no-unused-expressions
  typeof hooks.four === "function" ? hooks.four() : null;
  console.log("메인 프로세스의 4단계 작업이 시작됩니다. ");
  // eslint-disable-next-line no-unused-expressions
  typeof hooks.five === "function" ? hooks.five() : null;
  console.log("메인 프로세스의 5단계 작업이 시작됩니다. ");
}

MainProcess({
  one:() => {
    console.log("1단계 전에 주입할 작업입니다. ");
  },
  four: () => console.log("엄마 나 콘솔나왔어!"),
});