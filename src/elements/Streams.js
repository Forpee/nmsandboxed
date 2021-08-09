import { gsap } from "gsap";
import { useEffect } from "react";
export default function Streams() {
  useEffect(() => {
    var grid = [6, 12], //[rows, columns]
      tl = gsap.timeline({ repeat: -1 });

    function streamLines() {
      tl.to(".line", {
        duration: 2,
        rotation: gsap.utils.distribute({
          amount: 80,
          axis: "x",
          grid: grid,
        }),
        yoyo: true,
        repeat: 1,
        ease: "expo.inOut",
        stagger: {
          amount: 1,
          grid: "auto",
          axis: "x",
          ease: "linear",
          from: "end",
        },
      });
    }

    // create elements
    buildGrid({ grid: grid, className: "line", parent: "#streams" });

    // init timeline
    streamLines();

    function buildGrid(vars) {
      vars = vars || {};
      var container = document.createElement("div"),
        rows = vars.grid[0],
        cols = vars.grid[1],
        className = vars.className || "",
        parent =
          typeof vars.parent === "string"
            ? document.querySelector(vars.parent)
            : vars.parent
            ? vars.parent
            : document.body,
        css = " width: " + 100 / cols + "%;",
        l = rows * cols,
        i,
        line;
      for (i = 0; i < l; i++) {
        line = document.createElement("div");
        line.style.cssText = css;
        line.setAttribute("class", className);
        line.index = i;
        line.setAttribute("data-index", i);
        container.appendChild(line);
      }
      parent.appendChild(container);
      return container;
    }

    gsap.set(".line", {
      rotation: -15,
      y: "-50%",
      force3D: true,
    });
  });

  return <div id="streams"></div>;
}
