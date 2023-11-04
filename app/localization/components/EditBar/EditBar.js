"use client";

import React from "react";
import dynamic from "next/dynamic";
import "./EditBar.css";
import Image from "next/image";
import { arrow } from "@/app/svgs";
import Link from "next/link";

const Model = dynamic(() => import("./Model"), { ssr: false });

function EditBar() {
  return (
    <div className="editContainer">
      
      <div className="modelContainer">
        <Model/>;
      </div>
      <div className=" editBar left ARroom">
        <Link href={"/"}> 
          <Image src={arrow} alt="arrow" />
        </Link>
        <p>AR Room</p>
      </div>
      <div className="editBar right editingTools">
        <p>Editing Tools</p>
      </div>
    </div>
  );
}

export default EditBar;
