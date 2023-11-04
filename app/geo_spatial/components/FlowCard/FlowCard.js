"use client";
import React, { useState } from 'react';
import { pencil, save } from '@/app/svgs';
import './FlowCard.css';
import { calcLength } from 'framer-motion';
import { Client, Storage,ID } from 'appwrite';

function FlowCard({lat, lng}) {
  const [edit, setEdit] = useState(false);
  const [visible, setVisible] = useState(false);

  const [title, setTitle] = useState('pin1'); // This is the title
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState(''); // This is the description
  const [key, setKey] = useState(''); // This is the password

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check if the selected file type is valid
      const allowedFileTypes = ['.glb', '.fbx', '.obj'];
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
  // const uploadAsset = async (e) => {
  //   e.preventDefault();
  //   if(!file)
  //     {console.log('no file selected')
  //     return}
  //   try{

  //     const filedata = new FormData();
  //     filedata.append('file', file);
  //     filedata.append('name', title);
  //     const response = await fetch('/api/upload', {
  //       method: 'POST',
  //       body: filedata,
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  //   // formdata.append('description', description);
  //   // formdata.append('key', key)

  // }
  const uploadAsset = (e) =>{
    e.preventDefault();
    if(!file)
      {console.log('no file selected')
      return}
      const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65464b855938b57408d1");

      const storage = new Storage(client);

      const promise = storage.createFile(
        "65464c58911f486636cd",
        ID.unique(),
        file
      );
      
      promise.then(function (response) {
        console.log(response); // Success
      }
      , function (error) {
        console.log(error); // Failure
      });
      const url = `https://cloud.appwrite.io/v1/storage/buckets/65464c58911f486636cd/files/${response.$id}/view?project=65464b855938b57408d1&mode=admin`
  }
  return (
    <div className="flow-card">
      <span className="flow-head">
        <span className="flow-title">
          {
            edit? (<input type="text" className="flow-card-title active" placeholder={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}/>) : (<input type="text" disabled className="flow-card-title" value={title} name='title'/>)
          }
          <button className='blank-button' onClick={()=>{
            setEdit(!edit)
          }}>
            {edit ? <span className="save">{save}</span> : <span className="pencil">{pencil}</span>}
          </button>
        </span>
        <p className="flow-card-description">Lat: {lat} Long: {lng}</p>
      </span>
      <form className="flow-form" onSubmit={uploadAsset}>
        <label htmlFor="model">
          Upload 3D Model
          <input
            type="file"
            name="_3d-model"
            id="model"
            accept=".glb, .fbx, .obj"
            onChange={handleFileChange}
          />
          <span className='flow-card-description'>(.glb, .fbx, .obj)</span>
        </label>
        {visible ? (
          <>
            <input type="text" name="description" placeholder="model description" className='text-input' onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
            <input type="text" name="key" placeholder="password protect" className='text-input' onChange={(e)=>{setKey(e.target.value)}} value={key}/>
            <input type="submit" className='button button-primary' value="Save" />
          </>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}
export default FlowCard;
