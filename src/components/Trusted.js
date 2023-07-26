import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By over 50 companies and many more to come...</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092022/logo_lounge_entries_2-03.jpg?dISoUm.z.V5fMko1qNKjAHVztOQ9cNZ2&itok=jFUG5XG-"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://jetpunk.b-cdn.net/img/user-photo-library/71/71770c94da-450.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://jetpunk.b-cdn.net/img/user-photo-library/b5/b55c6b599f-450.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://jetpunk.b-cdn.net/img/user-photo-library/c7/c7cb76f8ed-235.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://jetpunk.b-cdn.net/img/user-photo-library/73/73f1b0cc24-235.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;