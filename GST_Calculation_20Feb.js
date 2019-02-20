let gst = [
  {
    type: 'wear',
    percentage: 7
  },
  {
    type: 'food',
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
    type: 'electronics',
    percentage: 10
  },
  {
    type: 'home',
    percentage: 15
  }
]

let First = window.prompt('Enter the type you want to check')
let Second = Number(window.prompt('Enter the amount of that type'))
if (First !== '') 
{
  let value = []
  value = Fetching(gst, First)
  let TaxCalculated = []
  TaxCalculated = calculate(value.percentage, Second)
  console.log('Type_GST:' + value.type + '\n\t' + 'Total Amount:' 
  + TaxCalculated.t_Amount + '\n\tTax Deducted:'
   + TaxCalculated.TaxDeducted + '\n\tAmount Remaining:'
    + TaxCalculated.RemainingAmount)
}
 else {
  let TaxCalculated = []
  TaxCalculated = calculate(0, Second)
  console.log('Type_GST: ' + '\n\t' + 'Total Amount:'
   + TaxCalculated.t_Amount + '\n\t Tax Deducted:'
    + TaxCalculated.TaxDeducted + '\n\t Amount Remaining:' 
    + TaxCalculated.RemainingAmount)
}
function calculate (percentage = 0, amount) 
{
  let taxcut = Number((amount * percentage) / 100)
  let t_Amount = Number(amount + taxcut)
  let TaxDeducted = Number(taxcut)
  let RemainingAmount = Number(amount - taxcut)
  let object = {t_Amount: t_Amount,TaxDeducted: TaxDeducted,RemainingAmount: RemainingAmount}
  return object
}
function Fetching (type, input) {
  for (let i = 0; i < type.length; i++) {
    if (gst[i].type === input) {
      return gst[i]
    }
  }
}


