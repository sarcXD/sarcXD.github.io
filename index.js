// const isHover = el => {
//     return el.querySelector(':hover');
// }

// const projDiv = document.getElementsByClassName("proj"); // array
// let currHover;
// document.addEventListener('mousemove', function checkHover() {
//     let hover;
//     for (let i=0;i<projDiv.length;i++) {
//         const hovStatus = isHover(projDiv[i]);
//         if (hovStatus) {
//             hover = projDiv[i];
//             currHover = hover;
//         }
//     }
//     if (hover) {
//         const child = hover.firstElementChild;
//         child.style.display = "none";
//         for (let i=0;i<projDiv.length;i++) {
//             if (projDiv !== currHover) {
//                 projDiv[i].style.display = "none";
//             }
//         }      
//     } else if (currHover) {
//         // console.log(currHover);
//         for (let i=0;i<projDiv.length;i++) {
//             if (projDiv[i] === currHover) {
//                 const child = currHover.firstElementChild
//                 child.style.display = "flex";
//             } else {
//                 projDiv[i].style.display = "flex";
//             }
//         }
//     }
// })