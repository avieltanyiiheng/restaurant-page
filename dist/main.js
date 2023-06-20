(() => {
  var e = {
      196: (e, t, n) => {
        "use strict";
        function c() {
          const e = document.querySelector(".content"),
            t = document.createElement("div");
          t.classList.add("page-content-home");
          const n = document.createElement("img");
          (n.src = "../src/logo.jpg"), (n.width = "500");
          const c = document.createElement("div");
          c.classList.add("card"),
            (c.textContent =
              "Welcome to Mama's, where we provide the best home baked goods for your tastebuds. Order today and get 15% off with code 'FUCKYOU'");
          const d = document.createElement("div");
          d.classList.add("card");
          const o = document.createElement("h3");
          o.classList.add("header"), (o.textContent = "Hours");
          const a = document.createElement("p");
          a.textContent = "Monday: 8am - 8pm";
          const s = document.createElement("p");
          s.textContent = "Tuesday: 8am - 8pm";
          const r = document.createElement("p");
          r.textContent = "Wednesday: 8am - 8pm";
          const m = document.createElement("p");
          m.textContent = "Thursday: 8am - 8pm";
          const i = document.createElement("p");
          (i.textContent = "Friday: 8am - 8pm"), d.append(o, a, s, r, m, i);
          const l = document.createElement("div");
          l.classList.add("card");
          const u = document.createElement("p");
          (u.textContent = "123 Joe Mama Singapore 123456"),
            l.append(u),
            t.appendChild(n),
            t.appendChild(c),
            t.appendChild(d),
            t.appendChild(l),
            e.appendChild(t);
        }
        function d() {
          const e = document.querySelector(".content");
          function t() {
            e.innerHTML = "";
          }
          const n = document.createElement("div");
          n.classList.add("navBar");
          const o = document.createElement("div");
          o.classList.add("btn"),
            (o.textContent = "Home"),
            o.addEventListener("click", () => {
              t(), d(), c();
            });
          const a = document.createElement("div");
          a.classList.add("btn"),
            (a.textContent = "Menu"),
            a.addEventListener("click", () => {
              t(),
                d(),
                (function () {
                  const e = document.querySelector(".content"),
                    t = document.createElement("div");
                  t.classList.add("page-content");
                  const n = document.createElement("div");
                  n.classList.add("menu-item");
                  const c = document.createElement("img");
                  c.classList.add("menuimg"),
                    (c.src = "../src/bread.jpeg"),
                    (c.width = "100");
                  const d = document.createElement("h3");
                  d.textContent = "Plain Bread";
                  const o = document.createElement("p");
                  (o.textContent = "Bread made with a, mixed with b and C."),
                    n.append(c, d, o);
                  const a = document.createElement("div");
                  a.classList.add("menu-item");
                  const s = document.createElement("h3"),
                    r = document.createElement("img");
                  r.classList.add("menuimg"),
                    (r.src = "../src/cheesebread.jpeg"),
                    (r.width = "100"),
                    (s.textContent = "Cheese Bread");
                  const m = document.createElement("p");
                  (m.textContent = "Cheese bread with a b c"),
                    a.append(r, s, m),
                    t.append(n, a),
                    e.append(t);
                })();
            });
          const s = document.createElement("div");
          s.classList.add("btn"),
            (s.textContent = "Contact"),
            s.addEventListener("click", () => console.log("c")),
            n.append(o, a, s),
            e.append(n);
        }
        function o() {
          d(), c();
        }
        n.r(t), n.d(t, { default: () => o });
      },
    },
    t = {};
  function n(c) {
    var d = t[c];
    if (void 0 !== d) return d.exports;
    var o = (t[c] = { exports: {} });
    return e[c](o, o.exports, n), o.exports;
  }
  (n.d = (e, t) => {
    for (var c in t)
      n.o(t, c) &&
        !n.o(e, c) &&
        Object.defineProperty(e, c, { enumerable: !0, get: t[c] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      const { default: e } = n(196);
      e();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUNILG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDWCxPQUFPQyxlQUFlUixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEWixPQUFPQyxlQUFlUixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sR0FBTyxFLE1DTDlELE1BQVFDLFFBQVMxQixHQUFnQixFQUFRLEtBRXpDQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbiAgLy8gICBwYWdlIGNvbnRlbnRcclxuICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInBhZ2UtY29udGVudC1ob21lXCIpO1xyXG5cclxuICAvLyAgIElNQUdFXHJcbiAgY29uc3QgY29tcGFueUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb21wYW55SW1hZ2Uuc3JjID0gXCIuLi9zcmMvbG9nby5qcGdcIjtcclxuICBjb21wYW55SW1hZ2Uud2lkdGggPSBcIjUwMFwiO1xyXG5cclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgYWJvdXQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJXZWxjb21lIHRvIE1hbWEncywgd2hlcmUgd2UgcHJvdmlkZSB0aGUgYmVzdCBob21lIGJha2VkIGdvb2RzIGZvciB5b3VyIHRhc3RlYnVkcy4gT3JkZXIgdG9kYXkgYW5kIGdldCAxNSUgb2ZmIHdpdGggY29kZSAnRlVDS1lPVSdcIjtcclxuXHJcbiAgY29uc3QgaG91cnNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob3Vyc0luZm8uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGhvdXJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcblxyXG4gIGNvbnN0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG1vbmRheS50ZXh0Q29udGVudCA9IFwiTW9uZGF5OiA4YW0gLSA4cG1cIjtcclxuXHJcbiAgY29uc3QgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHR1ZXNkYXkudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXk6IDhhbSAtIDhwbVwiO1xyXG5cclxuICBjb25zdCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB3ZWRuZXNkYXkudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogOGFtIC0gOHBtXCI7XHJcblxyXG4gIGNvbnN0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdGh1cnNkYXkudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiA4YW0gLSA4cG1cIjtcclxuXHJcbiAgY29uc3QgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZnJpZGF5LnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDhhbSAtIDhwbVwiO1xyXG5cclxuICBob3Vyc0luZm8uYXBwZW5kKGhvdXJzSGVhZGVyLCBtb25kYXksIHR1ZXNkYXksIHdlZG5lc2RheSwgdGh1cnNkYXksIGZyaWRheSk7XHJcblxyXG4gIC8vICAgbG9jYXRpb25cclxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgY29uc3QgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgbG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gXCIxMjMgSm9lIE1hbWEgU2luZ2Fwb3JlIDEyMzQ1NlwiO1xyXG4gIGxvY2F0aW9uLmFwcGVuZChsb2NhdGlvblRleHQpO1xyXG5cclxuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChjb21wYW55SW1hZ2UpO1xyXG4gIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGFib3V0KTtcclxuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChob3Vyc0luZm8pO1xyXG4gIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XHJcbn1cclxuIiwiaW1wb3J0IHJlbmRlckhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJOYXZCYXIoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdkJhclwiKTtcclxuXHJcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xyXG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIHJlbmRlck5hdkJhcigpO1xyXG4gICAgcmVuZGVySG9tZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgcmVuZGVyTmF2QmFyKCk7XHJcbiAgICByZW5kZXJNZW51KCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcclxuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJjXCIpKTtcclxuXHJcbiAgbmF2QmFyLmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQobmF2QmFyKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblxyXG4gIC8vICAgcGFnZSBjb250ZW50XHJcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwYWdlLWNvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGJyZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBicmVhZC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG5cclxuICBjb25zdCBicmVhZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYnJlYWRJbWcuY2xhc3NMaXN0LmFkZChcIm1lbnVpbWdcIik7XHJcbiAgYnJlYWRJbWcuc3JjID0gXCIuLi9zcmMvYnJlYWQuanBlZ1wiO1xyXG4gIGJyZWFkSW1nLndpZHRoID0gXCIxMDBcIjtcclxuXHJcbiAgY29uc3QgYnJlYWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBicmVhZFRpdGxlLnRleHRDb250ZW50ID0gXCJQbGFpbiBCcmVhZFwiO1xyXG4gIGNvbnN0IGJyZWFkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGJyZWFkRGVzYy50ZXh0Q29udGVudCA9IFwiQnJlYWQgbWFkZSB3aXRoIGEsIG1peGVkIHdpdGggYiBhbmQgQy5cIjtcclxuICBicmVhZC5hcHBlbmQoYnJlYWRJbWcsIGJyZWFkVGl0bGUsIGJyZWFkRGVzYyk7XHJcblxyXG4gIGNvbnN0IGNoZWVzZUJyZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaGVlc2VCcmVhZC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gIGNvbnN0IENoZWVzZUJyZWFkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcblxyXG4gIGNvbnN0IGNoZWVzZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2hlZXNlSW1nLmNsYXNzTGlzdC5hZGQoXCJtZW51aW1nXCIpO1xyXG4gIGNoZWVzZUltZy5zcmMgPSBcIi4uL3NyYy9jaGVlc2VicmVhZC5qcGVnXCI7XHJcbiAgY2hlZXNlSW1nLndpZHRoID0gXCIxMDBcIjtcclxuXHJcbiAgQ2hlZXNlQnJlYWRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2hlZXNlIEJyZWFkXCI7XHJcbiAgY29uc3QgY2hlZXNlQnJlYWREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2hlZXNlQnJlYWREZXNjLnRleHRDb250ZW50ID0gXCJDaGVlc2UgYnJlYWQgd2l0aCBhIGIgY1wiO1xyXG4gIGNoZWVzZUJyZWFkLmFwcGVuZChjaGVlc2VJbWcsIENoZWVzZUJyZWFkVGl0bGUsIGNoZWVzZUJyZWFkRGVzYyk7XHJcblxyXG4gIHBhZ2VDb250ZW50LmFwcGVuZChicmVhZCwgY2hlZXNlQnJlYWQpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKHBhZ2VDb250ZW50KTtcclxufVxyXG4iLCJpbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCByZW5kZXJOYXZCYXIgZnJvbSBcIi4vbmF2YmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsTG9hZCgpIHtcclxuICByZW5kZXJOYXZCYXIoKTtcclxuICByZW5kZXJIb21lKCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB7IGRlZmF1bHQ6IGluaXRpYWxMb2FkIH0gPSByZXF1aXJlKFwiLi9pbml0aWFsTG9hZFwiKTtcclxuXHJcbmluaXRpYWxMb2FkKCk7XHJcbiJdLCJuYW1lcyI6WyJyZW5kZXJIb21lIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhZ2VDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBhbnlJbWFnZSIsInNyYyIsIndpZHRoIiwiYWJvdXQiLCJ0ZXh0Q29udGVudCIsImhvdXJzSW5mbyIsImhvdXJzSGVhZGVyIiwibW9uZGF5IiwidHVlc2RheSIsIndlZG5lc2RheSIsInRodXJzZGF5IiwiZnJpZGF5IiwiYXBwZW5kIiwibG9jYXRpb24iLCJsb2NhdGlvblRleHQiLCJhcHBlbmRDaGlsZCIsInJlbmRlck5hdkJhciIsImNsZWFyQ29udGVudCIsImlubmVySFRNTCIsIm5hdkJhciIsImhvbWVCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwibWVudUJ0biIsImJyZWFkIiwiYnJlYWRJbWciLCJicmVhZFRpdGxlIiwiYnJlYWREZXNjIiwiY2hlZXNlQnJlYWQiLCJDaGVlc2VCcmVhZFRpdGxlIiwiY2hlZXNlSW1nIiwiY2hlZXNlQnJlYWREZXNjIiwicmVuZGVyTWVudSIsImNvbnRhY3RCdG4iLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbExvYWQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
