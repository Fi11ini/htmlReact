import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'

export const Main = () => {
    return (
        <div>
            <div>
                <span>
                    Hi There
                </span>
                <h2>
                    I am Svetlada Dyblo
                </h2>
                <h1>
                    A Web Developer
                </h1>

                <Photo src={photo} alt=""/>
п
            </div>
        </div>
    );
};


const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
