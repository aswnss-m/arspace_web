'use client'

import React , {useEffect} from "react";
import "./EditBar.css";
import { dots } from "@/app/svgs/dots";
import Image from "next/image";

function EditBar() {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Clean up the script on component unmount
    };
  }, []); 
  
  return (
    <div className="editContainer">
      {/* <Image src={dots} alt="dots svg" /> */}

      {/* <div className="editSubContainer"> */}
        <div className="editViewGroup">
          <div className=" editBar ARroom">
            <p>AR Room</p>
          </div>

          <model-viewer
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src="shared-assets/models/NeilArmstrong.glb"
          ar
          environment-image="shared-assets/environments/moon_1k.hdr"
          poster="shared-assets/models/NeilArmstrong.webp"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
        ></model-viewer>


          <div className="editBar editingTools">
            <p>Editing Tools</p>
          </div>
        </div>
      {/* </div> */}

    </div>
  );
}

export default EditBar;
