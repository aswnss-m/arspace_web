import React from "react";
import "./EditBar.css";
import { dots } from "@/app/svgs/dots";
import Image from "next/image";

function EditBar() {
  return (
    <div className="editContainer">
      {/* <Image src={dots} alt="dots svg" /> */}

      {/* <div className="editSubContainer"> */}
        <div className="editViewGroup">
          <div className=" editBar ARroom">
            <p>AR Room</p>
          </div>
          <div className="editBar editingTools">
            <p>Editing Tools</p>
          </div>
        </div>
      {/* </div> */}

    </div>
  );
}

export default EditBar;
