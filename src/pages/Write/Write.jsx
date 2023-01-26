import React from 'react';
import './Write.css';
import postImg from '../../images/postImg.jpg';

export const Write = () => {
  return (
    <div className="write">
      <img src={postImg} alt='' className='writeImg' />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Enter Title..."
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            
          ></textarea>
        </div>
        <button className="glow-on-hover">Publish</button>
        
      </form>
    </div>
  );
};
