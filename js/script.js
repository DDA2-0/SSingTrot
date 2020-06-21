var cursorDotEl = document.querySelector("#cursor-dot"),
      cursorBGEl = document.querySelector("#cursor-bg"),
      progressEl = document.querySelector("#progress"),
      listEl = document.querySelector("html"),
      btnListEls = listEl.querySelectorAll("a"),
      btnEl = listEl.querySelectorAll("button");

btnListEls = Array.prototype.slice.call(btnListEls); //노드 목록을 배열로 사용 가능하도록 지원.
btnEl = Array.prototype.slice.call(btnEl);

function onMouseMove(e){
      var posX = e.clientX, posY = e.clientY;
      //마우스 좌표의 위치 값

      cursorDotEl.style.top = posY + "px";
      cursorDotEl.style.left = posX + "px";
      cursorBGEl.style.top = posY + "px";
      cursorBGEl.style.left = posX + "px";
      progressEl.style.top = posY + "px";
      progressEl.style.left = posX + "px";
}

function onMouseEnterList(e) {
      // console.log("enter");
      if(!cursorBGEl.classList.contains("active")){
            cursorBGEl.classList.add("active");
      }
      if(!progressEl.classList.contains("active")){
            progressEl.classList.add("active");
      }
}

function onMouseLeaveList(e) {
      // console.log("leave");
      if(cursorBGEl.classList.contains("active")){
            cursorBGEl.classList.remove("active");
      }
      if(progressEl.classList.contains("active")){
            progressEl.classList.remove("active");
      }
}


window.addEventListener("mousemove", onMouseMove);
for(var i = 0; i < btnListEls.length; i++){
      btnListEls[i].addEventListener("mouseenter", onMouseEnterList);
      btnListEls[i].addEventListener("mouseleave", onMouseLeaveList);
}
for(var i = 0; i < btnEl.length; i++){
      btnEl[i].addEventListener("mouseenter", onMouseEnterList);
      btnEl[i].addEventListener("mouseleave", onMouseLeaveList);
}


var serviceMenuEl = document.querySelector('#service-menu'),
    btnServiceMenuEl = serviceMenuEl.querySelectorAll('a'),
    serviceContainerEl = document.querySelector('.service-container'),
    serviceContentEl = serviceContainerEl.querySelectorAll('.service-content'),
    cuId = 0,
    exId = null;

btnServiceMenuEl = Array.prototype.slice.call(btnServiceMenuEl);

function onClickServiceMenu(e) {
    e.preventDefault();
    var el = e.currentTarget, index = btnServiceMenuEl.indexOf(el);
    if(!el.classList.contains('selected')) {
        cuId = index;
        btnServiceMenuEl[exId].classList.remove('selected');
        serviceContentEl[exId].classList.remove('selected');
        el.classList.add('selected');
        serviceContentEl[cuId].classList.add('selected');
        exId = cuId;
    }
}
function addEvent() {
    for(var i = 0; i < btnServiceMenuEl.length; i++) {
        btnServiceMenuEl[i].addEventListener("click", onClickServiceMenu);
    }
}
function init() {
    exId = cuId;
    addEvent();
}
init();


function open_page(url) {
      newPage=window.open(url);
  }
