const code = `const optionList = [
    { value: false, text: "이용약관동의 (필수)", required: true },
    { value: false, text: "개인정보수집이용 동의 (필수)", required: true },
    { value: false, text: "만 14세 이상 확인 (필수)", required: true },
    { value: false, text: "알림이용 (선택)", required: false },
    { value: false, text: "위치기반서비스 동의 (선택)", required: false },
];

const select = new SelectObject({ total: false, optionList });

const changeOption = () => {
    total.checked = select.total;

    document.querySelectorAll('.option').forEach((e, idx) => {
        e.checked = select.optionList[idx].value;
    });
}

const input = document.querySelectorAll('input');

input.forEach(i => {
  i.addEventListener("change", (e) => {
    if (e.target.id === "total") {
      e.target.checked
        ? select.selectAllOptions()
        : select.deselectAllOptions();
    } else {
      e.target.checked
        ? select.selectOption(e.target.id)
        : select.deselectOption(e.target.id);
    }

    changeOption();
  });
})

const submitButton = document.querySelectorAll('.submitButton')[0];

submitButton.addEventListener('click', (e) => {
  let result = '';

  if(select.isRequired()){
    result = '동의 하셨습니다.';
  }else{
    result = '필수 항목을 선택해주세요.';
  }

  alert(result);
});`;

export default code;