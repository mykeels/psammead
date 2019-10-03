import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import Image from '@bbc/psammead-image';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import PlayButton from '../../../psammead-play-button/src';

const StyledPlaceholder = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  bottom: 0;
  border: none;
  background-color: ${C_EBON};

  ${StyledPlaceholder}:hover &,
  ${StyledPlaceholder}:focus & {
    background-color: ${C_POSTBOX};
  }
`;

const Placeholder = ({ onClick, src }) => (
  <StyledPlaceholder onClick={onClick}>
    <Image alt="Image Alt" src={src} />
    <StyledPlayButton
      service="news"
      title="Dog chases cat."
      onClick={onClick}
      duration="2:30"
      durationSpoken="2 minutes 30 seconds"
      datetime="PT2M30S"
    />
  </StyledPlaceholder>
);

Placeholder.propTypes = {
  onClick: func.isRequired,
  src: string.isRequired,
};

export default Placeholder;
