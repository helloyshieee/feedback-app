import { useContext } from 'react'
import PropTypes from 'prop-types'
// import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats({feedback}) {
//   const { feedback } = useContext(FeedbackContext)

  // Calculates ratings average
  //acc - accumulator
  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  )

  // average = average.toFixed(1).replace(/[.,]0$/, '')
  // average = Math.round(average)

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}


FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}
export default FeedbackStats