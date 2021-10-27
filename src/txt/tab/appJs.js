const code = `let selectedId = 'all';
const tabList = document.querySelectorAll('.tab h2');

tabList.forEach((tab) => {
  tab.addEventListener('mouseenter', (e) => {
    removeHover();
    e.target.classList.add('hover');
  });

  tab.addEventListener('mouseout', (e) => {
    e.target.classList.remove('hover');
    settingHover();
  });

  tab.addEventListener('click', (e) => {
    selectedId = e.target.id;
    settingHover();
  });
})

function settingHover(){
  tabList.forEach((tab) => {
    if(tab.id !== selectedId){
      tab.classList.remove('hover');
    }else{
      tab.classList.add('hover');
    }
  })
}

function removeHover(){
  tabList.forEach((tab) => {
    tab.classList.remove('hover');
  })
}`;

export default code;