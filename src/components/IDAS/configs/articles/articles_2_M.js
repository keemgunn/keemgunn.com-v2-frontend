// export const s1_f1_a1 = {
//   sensors: {
//     position: {
//       StyleCalc: (position) => {
//         return {
//           opacity: position
//         }
//       },
//       reactors: {
//         0: null,
//         0.5: "half",
//         1: null
//       }
//     }
//   },
//   modals: {
//     base: {
//       class: [''],
//       style: [{
//         "grid-area": "1/3/2/5",
//         "place-self": "center stretch",
//         "margin": "0 0",
//         "flex-direction": "column",
//         "justify-content": "flex-start",
//         "align-items": "flex-start",
//         "gap": "20rem",
//       }],
//     },
//     hover: {
//       true: {
//         class: 'hover',
//         style: {
//         }
//       }
//     },
//     touched: {
//       true: {
//         class: 'touched',
//         style: {
//           "opacity": "0.6"
//         }
//       }
//     },
//     position: {
//       1: {
//         class: 'something-1',
//         style: {
//           "color": "red"
//         }
//       }
//     },
//   }
// }


export const s1_f1_a1 = {
  modals: {
    base: {
      class: [''],
      style: [{
        "grid-area": "1/1/2/2",
        "place-self": "center stretch",
        "margin": "0 0",
        "flex-direction": "column",
        "justify-content": "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }
}


export const s1_f2_a1 = {
  modals: {
    base: {
      class: [''],
      style: [{
        "grid-area": "1/1/2/9",
        "place-self": "center stretch",
        "margin": "0 0",
        "flex-direction": "column",
        "justify-content": "flex-start",
        "align-items": "flex-start",
        "gap": "0",
      }],
    }
  }
}


export const s1_f2_a2 = {
  sensors: {
    position: {
      reactors: {
        0: "start",
        1: "end"
      }
    }
  },
  modals: {
    base: {
      class: [''],
      style: [{
        "grid-area": "2/1/3/9",
        "place-self": "center stretch",
        "margin": "0 0",
        "flex-direction": "column",
        "justify-content": "flex-start",
        "align-items": "flex-start",
        "gap": "0",
        "overflow": "visible",
        "text-overflow": "ellipsis",

      }],
    }
  }
}

