const list = [
  {
    사과: [
      {
        name: "사과",
        place: "2000원",
        color: "빨간색",
      },
    ],
  },
  {
    바나나: [
      {
        name: "바나나",
        place: "2000원",
        color: "노란색",
      },
    ],
  },
  {
    복숭아: [
      {
        name: "복숭아",
        place: "1000원",
        color: "핑크색",
      },
    ],
  },
  {
    딸기: [
      {
        name: "딸기",
        place: "12000원",
        color: "노란색",
      },
    ],
  },
];

let btnSearch = document.querySelector(".btn_search");

//검색 버튼 누르면 함수 실행
btnSearch.addEventListener("click", function () {
  let searchVal = document.querySelector(".search_input").value;
  let nameList = ["사과", "바나나", "복숭아", "딸기"];
  let resultText = document.querySelector(".search_result_text");

  //nameList에 검색어가 있으면
  if (nameList.includes(searchVal) == true) {
    //nameList에서 해당하는 검색어의 index 값을 구함
    let i = nameList.indexOf(searchVal);

    //index값의 순서에 해당되면서 검색어와 일치하는 배열을 확인
    var fruit = list[i][searchVal].find(function (data) {
      //해당 배열에서 data의 이름이 검색어와 일치하는 data를 반환하여 변수 fruit에 넣음
      return data.name == searchVal;
    });

    //텍스트에 정보를 넣음
    resultText.innerHTML =
      fruit.name + "<br>" + fruit.place + "<br>" + fruit.color;
    document.querySelector(".search_result_text").classList.add("on");
  } else {
    alert("검색어를 찾을 수 없습니다");
  }

  //기존의 배열에서 이름들만 따로 추출할 수 있는 방법이 있으면 더 좋을 것 같습니다..
});
