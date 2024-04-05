import { useState } from "react"
import explorer from "./data/data"
import Folder from "./components/Folder";

const FileExplorer = () => {
  const [explorerData] = useState(explorer);
  console.log(explorerData);
  return (
    <div>
        {/* return the Folder component */}
        <Folder explorer={explorerData}/>
    </div>
  )
}

export default FileExplorer