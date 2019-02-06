const form = document.querySelector(".form");
const input = document.querySelector(".form--input");
const result = document.querySelector(".result");
const resultImg = document.querySelector(".result--img");
const resultChart = document.querySelector(".result--chart");

form.addEventListener("submit", event => {
    resultImg.innerHTML=''
    resultChart.innerHTML=''
  const imageUrl = input.value;
  event.preventDefault();
  fetch("POST", "/search", imageUrl, renderData);
});
const renderData = (error, emotionObj, imageUrl) => {

  if (error) {
  } else {
    console.log(emotionObj);
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("imgFace");
    resultImg.appendChild(img);
    const divChart = document.createElement("div");
    resultChart.appendChild(divChart)
    emotionObj.forEach(face => {
        const ul = document.createElement("ul");
      const divFace = document.createElement("div");

      divFace.classList.add("divFace");

      divFace.style.top = `${face.faceRectangle.top}px`;
      divFace.style.left = `${face.faceRectangle.left}px`;
      divFace.style.height = `${face.faceRectangle.height}px`;
      divFace.style.width = `${face.faceRectangle.width}px`;

      resultImg.appendChild(divFace);

      const resultText = face.scores;
      const keys = Object.keys(resultText);

      keys.forEach((e, i) => {
        const li = document.createElement("li");
        li.innerText += `${e} :`;
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const span = document.createElement("span");
        span.innerText = `${Math.round(resultText[e] * 100)}%`;
        span.classList.add("span");
        div1.classList.add("gray");
        div2.classList.add("colorDiv");
        div2.style.width = `${Math.round(resultText[e] * 100)}px`;
        div1.appendChild(div2);
        div2.appendChild(span);
        li.appendChild(div1);
        ul.appendChild(li);
      });
      divChart.appendChild(ul);
    });
  }
};
