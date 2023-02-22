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
  buttons : PropTypes.array.isRequired,
  handlClickFeedback : PropTypes.func.isRequired
}





