import PropTypes from 'prop-types';
import{Wrapper, Title}  from './Section.styled';

export const Section =({title, children}) => {
    return(
        <Wrapper>
        <Title>{title}
        {children}
        </Title> 
        </Wrapper>  
    )
}


Section.propTypes ={
    title : PropTypes.string.isRequired,
    children : PropTypes.object.isRequired
  }
  

