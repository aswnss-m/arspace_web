"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { vuforia_steps } from "../data";
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
        <p>{vuforia_steps.title}</p>
      </div>

      <div className="localizationSubContainer">
        <div className="contentDescHeading">
          <ol>
            {vuforia_steps.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
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
