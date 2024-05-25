import './TagsButton.scss'
import {TagsButton as TagsButtonProps} from '../../utils/types'

export const TagsButton: React.FC<TagsButtonProps> = (props: TagsButtonProps) => {
    
    return (
        <div className='TagsButton'
         data-active={props.state}
         data-name={props.tag}
         onClick={()=>{props.action(props.tag.id)}}>
            {props.tag.name}
        </div>)
}

