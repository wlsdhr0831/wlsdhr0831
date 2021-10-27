const code = `class SelectObject {
  constructor({ total, optionList }) {
    this.total = total;
    this.size = optionList.length;
    this.optionList = optionList;
  }

  setSelectObject(object) {
    return new SelectObject(object);
  }

  selectAllOptions() {
    this.total = true;

    this.optionList.forEach(option => {
      option.value = true;
    });
  }

  deselectAllOptions() {
    this.total = false;

    this.optionList.forEach(option => {
      option.value = false;
    });
  }

  selectOption(idx) {
    this.optionList[idx].value = true;

    if (this.isSelectedAll()) {
      this.total = true;
    }
  }

  deselectOption(idx) {
    this.optionList[idx].value = false;
    
    this.total = false;
  }

  isSelectedAll() {
    let cnt = 0;

    this.optionList.forEach(option => {
      if (option.value) {
        cnt++;
      }
    })

    if (cnt === this.size) {
      return true;
    } else {
      return false;
    }
  }

  isRequired(){
    let result = true;

    this.optionList.forEach(option => {
      if(option.required && !option.value) {
        result = false;
      }
    });

    return result;
  }
}`;

export default code;
