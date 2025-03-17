import { Storage } from "@aws-amplify/storage";
import { useState } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (file) {
            try {
                await Storage.put(file.name, file, {
                    contentType: file.type,
                    level: "public",
                });
                alert("File uploaded successfully!");
            } catch (error) {
                console.error("Upload failed:", error);
            }
        }
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;
