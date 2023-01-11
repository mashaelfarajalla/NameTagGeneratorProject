var button = document.getElementsByTagName("button");
button[0].addEventListener(
  "click",
  function addTag(e) {
    e.preventDefault();

    let itemtag = document.createElement("div");
    itemtag.classList.add("tags");

    let valueinput = document.querySelector("input");

    console.log(valueinput.value);

    console.log(itemtag);
    itemtag.innerHTML = `
      <h1>Hello</h1>
      <h5>my name is</h5>
      <p> ${valueinput.value} </p>
    `;
    valueinput.value = "";

    let tags = document.getElementsByClassName("tags-name");
    tags[0].appendChild(itemtag);
  },
  false
);
