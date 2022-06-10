import React, { useRef } from "react";

const FileInput=()=>{

     const fileInputRef = useRef()

    const handleSubmit=(e)=>{
        e.preventDefault()
         if(fileInputRef.current.files.length){
            console.log('Submitting the file with th name'+fileInputRef.current.files[0].name);
        }else{
            console.log('no file');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

    )

}

export default FileInput