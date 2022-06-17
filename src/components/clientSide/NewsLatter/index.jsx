import React from 'react'
import './index.css'
import {Send } from '@material-ui/icons';

const NewsLatter = () => {
      return (
            <div className="newslatter__container">
                  <h1>NewsLetter</h1>
                  <p>get timely update from your favorite products.</p>
                  <div className="input__container">
                        <input type="text" />
                        <button>
                              <Send/>
                        </button>
                  </div>
                  
            </div>
      )
}

export default NewsLatter
