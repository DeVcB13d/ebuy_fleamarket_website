
import {useEffect, useRef } from 'react';

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dvh8nacab",
            uploadPreset: "wsizna94"
        },function(error, result) {
            console.log("results",result);
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info.url);
            }
        }
        );
    }, [])

    return (
        <button class="btn btn-primary btn-lg btn-block" onClick={() => widgetRef.current.open()}>
            Upload Image
        </button>
    )
}

export default UploadWidget;