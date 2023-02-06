import { List, Button} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

export const FeedbackOptions =({buttons, handlClickFeedback}) => {
  return (
   <List>
    {buttons.map(({id, title})=>(
      <li key={id}>
       <Button
       key={id}
       type="button"
       name={id}
      onClick={handlClickFeedback}
     >{title}</Button>
      </li>
    )
    )}
   </List>
  )
}
  

FeedbackOptions.propTypes ={
  options : PropTypes.array.isRequired,
  onLeaveFeedback : PropTypes.func.isRequired
}





