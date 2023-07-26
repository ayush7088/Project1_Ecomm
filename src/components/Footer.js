import styled from 'styled-components';
import React from 'react';
import { Button } from '../styles/Button';
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    // Add your social media links here
    const socialMediaLinks = {
        discord: "https://discord.com/",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/",
    };

    return (
        <Wrapper>
            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Kiraana Store</h3>
                        <p>Made with ❤️ by Ayush:)</p>
                    </div>

                    <div className="footer-subscribe">
                        <h3>Subscribe to get updates</h3>
                        <form action="/subscribe" method="post">
                            <input type="email" placeholder="your email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <a href={socialMediaLinks.discord}>
                                <div>
                                    <FaDiscord className="icons" />
                                </div>
                            </a>
                            <a href={socialMediaLinks.youtube}>
                                <div>
                                    <FaYoutube className="icons" />
                                </div>
                            </a>
                            <a href={socialMediaLinks.instagram}>
                                <div>
                                    <FaInstagram className="icons" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <a href="tel:4212420141">9999955555</a>
                    </div>
                </div>

                {/* bottom leg of the footer */}
                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>
                            © {new Date().getFullYear()} Kiraana Store. All rights are reserved.
                        </p>
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            {/* <NavLink to="/services">Services</NavLink> */}
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                    </div>
                </div>
            </footer>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    background-color: #333;
  /* Footer container styles */
  padding: 14rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};

  /* Footer sections styles */
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;

    /* Align the content in the center */
    align-items: center;
  }

  .footer-about,
  .footer-subscribe,
  .footer-social,
  .footer-contact {
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .footer-social--icons {
    display: flex;
    gap: 2rem;

    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }

    .icons {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.4rem;
      position: relative;
    }
  }

  .footer-contact a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 1.6rem;
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }

    nav {
      display: flex;
      gap: 2rem;

      a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        font-size: 1.6rem;
      }
    }
  }
  .footer-about {
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size: 2.2rem; 
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.6rem; 
    }
  }


  /* Media query for smaller screens */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 9rem 0 9rem 0;

    /* Adjust grid columns */
    .container {
      grid-template-columns: repeat(2, 1fr);
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
