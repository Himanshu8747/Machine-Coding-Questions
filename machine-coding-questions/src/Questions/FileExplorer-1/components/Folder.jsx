import { useState } from "react"

/* eslint-disable react/prop-types */
const Folder = ({explorer}) => {
    const [expanded,setExpanded] = useState(false);

    if(explorer.isFolder){
        return (
            <>
                <div style={{margin:5}} onClick={()=>setExpanded(!expanded)}>
                    <span>📁{explorer.name}</span>
                </div>
                <div style={{marginLeft:25,display:expanded ? "block" : "none"}}>
                    {explorer.items.map((exp)=>{
                        return( <Folder explorer={exp} key={exp.id}> {exp.name}</Folder>)
                    })}
                </div>
            </>
            
        )
    }
    else {
        return (
            <div className="file">📄{explorer.name}</div>
        )
    }
}

export default Folder