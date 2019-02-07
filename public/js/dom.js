const form = document.querySelector(".form");
const input = document.querySelector(".form--input");
const result = document.querySelector(".result");
const resultImg = document.querySelector(".result--img");
const resultChart = document.querySelector(".result--chart");

form.addEventListener("submit", event => {
  event.preventDefault();
  const imageUrl = input.value;
  resultImg.innerHTML = "";
  resultChart.innerHTML = "";
  if (!imageUrl) {
    resultChart.appendChild(document.createTextNode("Enter a valid Url"));
    return;
  }
  fetch("POST", "/search", imageUrl, renderData);
  input.value = "";
});
const renderData = (error, emotionObj, imageUrl) => {
  if (error) {
    console.error(error);
    resultChart.appendChild(document.createTextNode(error));
  } else {
    const img = document.createElement("img");
    const divChart = document.createElement("div");

    img.src = imageUrl;
    img.classList.add("imgFace");

    resultImg.appendChild(img);
    resultChart.appendChild(divChart);

    img.onload = () => {
      emotionObj.forEach((face, i) => {
        const ul = document.createElement("ul");
        const divFace = document.createElement("div");

        divFace.classList.add("divFace");

        divFace.style.top = `${(100 * face.faceRectangle.top) / img.naturalHeight}%`;
        divFace.style.left = `${(100 * face.faceRectangle.left) / img.naturalWidth}%`;
        divFace.style.height = `${(100 * face.faceRectangle.height) / img.naturalHeight}%`;
        divFace.style.width = `${(100 * face.faceRectangle.width) / img.naturalWidth}%`;

        resultImg.appendChild(divFace);

        const resultText = face.scores;
        const keys = Object.keys(resultText);
        const h1 = document.createElement('h1');
        h1.innerText = `face:(${i + 1})`
        keys.forEach(e => {
          const li = document.createElement("li");
          li.innerText += `${e} :`;
          const div1 = document.createElement("div");
          const div2 = document.createElement("div");
          const span = document.createElement("span");
          span.innerText = `${Math.round(resultText[e] * 100)}%`;
          span.classList.add("span");
          div1.classList.add("gray");
          div2.classList.add("colorDiv");
          div2.style.width = `${Math.round((resultText[e] * 150))}px`;
          div1.appendChild(div2);
          div2.appendChild(span);
          li.appendChild(div1);
          ul.appendChild(li);
        });
        resultChart.appendChild(divChart);
        divChart.appendChild(h1);
        divChart.appendChild(ul);
      });
    }
  }
};
