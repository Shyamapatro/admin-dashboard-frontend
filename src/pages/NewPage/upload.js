import React, {useRef} from 'react'

export const FileUploader = ({onFileSelect}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        
      };

    return (
        <>
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput}>
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
            </input>
       
        </div></>
    )
}
