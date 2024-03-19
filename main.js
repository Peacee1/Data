document.addEventListener("DOMContentLoaded", () => {
  const data = document.querySelector(".data-here");
  const begin = document.getElementById("begin");
  const end = document.getElementById("end");
  const result = document.getElementById("result");
  const check1 = document.getElementById("check1");
  const check2 = document.getElementById("check2");
  const check3 = document.getElementById("check3");
  const check4 = document.getElementById("check4");
  const options = document.querySelector(".option");
  const fb = document.getElementById("fb");
  const ins = document.getElementById("ins");
  const ytb = document.getElementById("ytb");
  ytb.addEventListener("click", () => {
    console.log(1);
    window.open(
      "https://www.youtube.com/channel/UCgXCvdc5te8V7VmUi3VvgQg",
      "_blank"
    );
  });
  fb.addEventListener("click", () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100022454985204",
      "_blank"
    );
  });
  ins.addEventListener("click", () => {
    window.open("https://www.instagram.com/peacee.1/?hl=en", "_blank");
  });
  let status = 0;
  function renderData(x) {
    data.innerHTML = "";
    if (check1.checked) {
      data.innerHTML += `<p>Data ${x} 3185 here.</p> <br>`;
    }
    if (check2.checked) {
      data.innerHTML += `<p>Data ${x} 3xxx here.</p> <br>`;
    }
    if (check3.checked) {
      data.innerHTML += `<p>Data ${x} 3xxy here.</p> <br>`;
    }
    if (check4.checked) {
      data.innerHTML += `<p>Data ${x} 3xxz here.</p><br>`;
    }
  }
  begin.addEventListener("click", () => {
    renderData("begin");
    status = 1;
    if (status === 1) {
      check1.addEventListener("change", () => {
        renderData("begin");
      });
      check2.addEventListener("change", () => {
        renderData("begin");
      });
      check3.addEventListener("change", () => {
        renderData("begin");
      });
      check4.addEventListener("change", () => {
        renderData("begin");
      });
    }
  });
  end.addEventListener("click", () => {
    renderData("end");
    status = 2;
    if (status === 2) {
      check1.addEventListener("change", () => {
        renderData("end");
      });
      check2.addEventListener("change", () => {
        renderData("end");
      });
      check3.addEventListener("change", () => {
        renderData("end");
      });
      check4.addEventListener("change", () => {
        renderData("end");
      });
    }
  });
  result.addEventListener("click", () => {
    renderData("result");
    status = 3;
    if (status === 3) {
      check1.addEventListener("change", () => {
        renderData("result");
      });
      check2.addEventListener("change", () => {
        renderData("result");
      });
      check3.addEventListener("change", () => {
        renderData("result");
      });
      check4.addEventListener("change", () => {
        renderData("result");
      });
    }
  });
  options.addEventListener("click", () => {
    if (status === 1) {
      begin.style.color = "#ffa500";
      end.style.color = "white";
      result.style.color = "white";
    }
    if (status === 2) {
      end.style.color = "#ffa500";
      result.style.color = "white";
      begin.style.color = "white";
    }
    if (status === 3) {
      result.style.color = "#ffa500";
      end.style.color = "white";
      begin.style.color = "white";
    }
  });
});
