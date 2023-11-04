"use client";

import React from "react";
// import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "./EditBar.css";
import { dots } from "@/app/svgs/dots";
import Image from "next/image";

const Model = dynamic(() => import("./Model"), { ssr: false });

function EditBar() {

  return (
    <div className="editContainer">
      {/* <Image src={dots} alt="dots svg" /> */}

      {/* <div className="editSubContainer"> */}
      <div className="editViewGroup">
        <div className=" editBar ARroom">
          <p>AR Room</p>
        </div>
        <div className="modelContainer">
          <Model/>;
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
