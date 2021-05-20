import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isExpanded, setExpanded] = useState(false);

    function addText(e){
        const {name, value} = e.target;
        
        setNote({
            ...note,
            [name]: value
        });
    }

    function handleClick(e){
        props.sendToApp(note)
        setNote({
          title: "",
          content: ""
        })
        e.preventDefault();
    }

    function expand(){
        setExpanded(true)
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input 
            onChange={addText}
            name="title" 
            placeholder="Title" 
            value={note.title} 
          />
        )}
        <textarea 
          onClick={expand}
          onChange={addText}
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} value={note.content} 
        />
        <Zoom in={isExpanded}>
          <Fab 
              onClick={handleClick}>
              <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;