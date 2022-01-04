import numeral from 'numeral'

function dollarFilter(value) {
  if (!value) {
    return '$0'
  }

  return numeral(value).format('$(0.00a)')
}

function presentFilter(value) {
  if (!value) {
    return '0%'
  }

  return `${Number(value).toFixed(2)}%`
}

function marketCapFilter(value) {
  if (!value) {
    return '$0'
  }

  return numeral(value).format('$(0.00a)')
}

export { dollarFilter, presentFilter, marketCapFilter }
