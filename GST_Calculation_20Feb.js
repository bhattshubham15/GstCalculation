let gst = [
  {
    type: 'food',
    percentage: 7
  },
  {
    type: 'wear',
    percentage: 18
  },
  {
    type: 'vehicles',
    percentage: 10
  },
  {
    type: 'land',
    percentage: 15
  },
  {
    type: 'home',
    percentage: 10
  },
  {
    type: 'electronics',
    percentage: 5
  }
]



function calculate (percentage = 0, amount) {
  let tax = Number((amount * percentage) / 100)
  let totalAmount = Number(amount + tax)
  let taxDeducted = Number(tax)
  let remainingAmount = Number(amount - tax)
  let object = {
    totalAmount: totalAmount,
    taxDeducted: taxDeducted,
    remainingAmount: remainingAmount
  }
  return object
}

function dataFetch (type, input) {
  for (let i = 0; i < type.length; i++) {
    if (gst[i].type === input) {
      return gst[i]
    }
  }
}

let input1 = window.prompt('Enter the tax type')
let input2 = Number(window.prompt('Enter the amount'))
if (input1 !== '') {
  let result = []
  result = dataFetch(gst, input1)
  let taxCalculated = []
  taxCalculated = calculate(result.percentage, input2)
  console.log('Type :' + result.type + '\n\t' + 'Total Amount:' 
  + taxCalculated.totalAmount + '\n\tTax Deducted:'
   + taxCalculated.taxDeducted + '\n\tAmount Remaining:'
    + taxCalculated.remainingAmount)
} else {
  let taxCalculated = []
  taxCalculated = calculate(0, input2)
  console.log('Type : Unknown' + '\n\t' + 'Total Amount:'
   + taxCalculated.totalAmount + '\n\tTax Deducted:'
    + taxCalculated.taxDeducted + '\n\tAmount Remaining:' 
    + taxCalculated.remainingAmount)
}
