
export const s1_f1_a1 = [
  {
    _type: "block",
    serial: "s1-f1-a1-b1",
    name: "block-name",
    type: "quote",
    states: { // [ sensorOn , Type , default ]
      position: [true, Boolean, true],
      mouseover: [false, Boolean, false],
      touched: [false, Boolean, false], 
    },
    reactors: {
      parentState: {
        mouseover: () => {
          return function () {
            console.log('s1-f1-a1-b1 :: Parent MouseOver');
          }
        }
      },
      selfState: {
        mouseover: () => {
          return function () {
            console.log('s1-f1-a1-b1 :: Self MouseOver');
          }
        }
      }
    },
    classKit: {
    },
    styleKit: {
    },
    contents: {
      class: "typo-caption1",
      body: "this is quote block"
    }
  },











]