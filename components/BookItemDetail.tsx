import React from 'react'

function BookItemDetail(bookItem: any) {
  let ret = null;
  const series = bookItem.series;
  const getDetails = (series: any) => {
    if (series) {
      ret = series.title;
      if (series.b)
    }
  }
  return (
    <div>BookItemDetail</div>
  )
}

export default BookItemDetail