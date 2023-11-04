"use client";

import React from "react";
import dynamic from "next/dynamic";
import "./EditBar.css";
import { arrow, search } from "@/app/svgs";
import Link from "next/link";

const Model = dynamic(() => import("./Model"), { ssr: false });

function EditBar() {
  return (
    <div className="editContainer">
      <div className="modelContainer">
        <Model />;
      </div>
      <div className=" editBar left ARroom">
        <div className="topBarLeft">
          <Link href={"/"}>{arrow}</Link>
          <p>AR Space Menu</p>
        </div>

        <div className="objNAssets">
          <button className="EditBtn object">Objects</button>
          <button className="EditBtn object">Assets</button>
        </div>

        <div className="searchBarDiv">
          {/* {search} */}
          <input className="searchBar" type="text" placeholder="Search Bar" />
        </div>

        <div className="divider"></div>

        <div className="layerPanel">
          <p> Layers</p>
          <div className="layerBtns">
            <button className="EditBtn layerBtn">Layer 1</button>
            <button className="EditBtn layerBtn">Layer 2</button>
            <button className="EditBtn layerBtn">Layer 3</button>
            <button className="EditBtn layerBtn">Layer 4</button>
          </div>
        </div>
      </div>
      <div className="editBar right editingTools">
        {/* <p>Editing Tools</p> */}

        <div className="profileNshare">
          <div className="profile"> </div>
          <button className="EditBtn share">Share</button>
        </div>

        <div className="textNlayer">
          <label for="cars">Viewport </label>
          <select name="cars" id="cars">
            <option value="volvo">Camera 1</option>
            <option value="mercedes">Camera 2</option>
            <option value="audi">Camera 3</option>
            <option value="saab">Personal Camera</option>
          </select>
        </div>

        <div className="divider"></div>

        <div className="FrameSelector">
          <h5>Frame</h5>
          <div className="frameBtns">
            <div className="textNlayer">
              <label for="cars">Size </label>
              <select name="cars" id="cars">
                <option value="volvo">Responsive</option>
                <option value="mercedes">Custom Size</option>
                <option value="saab">AR Space dimension</option>
                <option value="saab">Instagram Feed</option>
                <option value="saab">Instagram Story</option>
                <option value="audi">Full HD</option>
              </select>
            </div>
            <br/>
            <div className="textNlayer">
              <p> Auto Zoom </p>
              <div className="yesNnoBtn">
                <button className="EditBtn noBtn">No</button>
                <button className="EditBtn yesBtn">Yes</button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBar;
