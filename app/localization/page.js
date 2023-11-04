"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

function Page() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  // const [visible, setVisible] = useState(false);
  const handleConfirmation = () => {
    router.push("/localization/components/EditBar");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="localizationContainer">
      <div className="localizationHeading">
        <h2>
          Welcome to <span>AR Space - Create </span>{" "}
        </h2>
        <p>A No-Code Tool to market your events and products </p>
      </div>

      <div className="localizationSubContainer">
        <div className="contentDescHeading">
          Upload your assets and then you can use our no code tool to edit the
          map.In Localized mode, users have the power to fine-tune their AR
          creations directly within the web interface. This blend of geospatial
          and localized AR empowers creators to shape immersive,
          location-specific AR content that resonates with users worldwide.
        </div>

        <div className="localization">
          <form className="flow-form">
            <label htmlFor="model">
              <h3>Upload your Asset</h3>
              <input
                type="file"
                name="_3d-model"
                id="model"
                // accept=".glb,.fbx"
                className="file-input"
                onChange={handleFileChange}
              />
            </label>
          </form>
          {file && (
            <button className="confirmationBtn" onClick={handleConfirmation}>
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
