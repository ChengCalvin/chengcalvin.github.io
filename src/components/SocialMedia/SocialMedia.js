import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

const SocialMedia = () => {
  const SocialMediaContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid darkgray;
    padding-top: 2rem;
  `;

  const SingleSocialMediaItem = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const StyledAvatar = styled(Avatar)`
    && {
      background-color: #337d87;
      :hover {
        background-color: rgb(130, 196, 159, 0.7);
      }
    }
  `;

  return (
    <SocialMediaContainer>
      <SingleSocialMediaItem>
        <Link
          href="https://www.linkedin.com/in/calvincheng95/"
          target="_blank"
          rek="noopener"
        >
          <StyledAvatar>
            <LinkedInIcon />
          </StyledAvatar>
        </Link>
      </SingleSocialMediaItem>
      <SingleSocialMediaItem>
        <Link
          href="https://github.com/ChengCalvin/"
          target="_blank"
          rek="noopener"
        >
          <StyledAvatar>
            <GitHubIcon />
          </StyledAvatar>
        </Link>
      </SingleSocialMediaItem>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
