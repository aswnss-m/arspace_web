"use client";
import React, { useState } from 'react';
import { pencil, save } from '@/app/svgs';
import './FlowCard.css';

function FlowCard() {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('pin1');
  const [file, setFile] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check if the selected file type is valid
      const allowedFileTypes = ['.glb', '.fbx'];
      const fileName = selectedFile.name;
      const fileExtension = fileName.split('.').pop();
      if (allowedFileTypes.includes('.' + fileExtension)) {
        setFile(selectedFile);
        setVisible(true);
      } else {
        alert('Invalid file type. Please select a .glb or .fbx file.');
      }
    }
  };

  return (
    <div className="flow-card">
      <span className="flow-head">
        <span className="flow-title">
          {
            edit? (<input type="text" className="flow-card-title active" placeholder={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}/>) : (<input type="text" disabled className="flow-card-title" value={title} />)
          }
          <button className='blank-button' onClick={()=>{
            setEdit(!edit)
          }}>
            {edit ? <span className="save">{save}</span> : <span className="pencil">{pencil}</span>}
          </button>
        </span>
        <p className="flow-card-description">alt: 3090, longi: 3404390</p>
      </span>
      <form className="flow-form">
        <label htmlFor="model">
          Upload 3D Model
          <input
            type="file"
            name="_3d-model"
            id="model"
            accept=".glb, .fbx"
            onChange={handleFileChange}
          />
          <span className='flow-card-description'>(.glb, .fbx)</span>
        </label>
        {visible ? (
          <>
            <input type="text" name="description" placeholder="model description" />
            <input type="text" name="key" placeholder="password protect" />
            <input type="submit" value="Save" />
          </>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default FlowCard;
