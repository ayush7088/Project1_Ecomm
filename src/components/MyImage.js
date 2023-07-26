import React, { useState } from 'react';
import styled from 'styled-components';

const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);

    return (
        <Wrapper>
            <div className="grid grid-four-column">
                {imgs.map((curElm, index) => {
                    return (
                        <figure key={index}>
                            <img
                                src={curElm.url}
                                alt={curElm.filename}
                                className="box-image--style"
                                onClick={() => setMainImage(curElm)}
                            />
                        </figure>
                    );
                })}
            </div>
            {/* 2nd column  */}
            <div className="main-screen">
                <img src={mainImage.url} alt={mainImage.filename} />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;

    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;

    .grid-four-column {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: 1fr;
    }
  }
`;

export default MyImage;
