{
  const convertWatt = (watt, time, convWatt) => {
    const ju = watt * time;
    convTime = ju / convWatt;
    return SecondToMinute(convTime);
  }

  const minuteToSecond = (minute, second) => {
    return (minute * 60) + second;
  }

  const SecondToMinute = (second) => {
    return [`${Math.floor(second / 60)}`, `${second % 60}`];
  }

const displayResult = () => {
  const inputWatt = Number(getInputWatt.value);
  const minute = Number(getMinute.value);
  const second = Number(getSecond.value);
  const convWatt = Number(getConvWatt.value);
  const inputTime = minuteToSecond(minute, second);
  const convTime = convertWatt(inputWatt, inputTime, convWatt)
  const result = document.getElementById('mv-content');
  result.innerHTML = `<p class="heading">${inputWatt}W ${minute}分${second}秒は</p>`+
  `<p class="result">${convWatt}Wで<br class="media">${convTime[0]}分${Math.round(convTime[1])}秒です</p>`;
}

  const convButton = document.getElementById('convButton');
  const getInputWatt = document.getElementById('inputWatt');
  const getSecond = document.getElementById('second');
  const getMinute = document.getElementById('minute');
  const getConvWatt = document.getElementById('convWatt');

  convButton.addEventListener('click', displayResult);
  convButton.addEventListener('touchend', displayResult);
}
