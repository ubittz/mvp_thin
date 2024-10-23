import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import Slick from 'react-slick';
import styled from 'styled-components';

import { SliderProps } from '@@components/Slider/type';
import { COLORS } from '@@constants/colors';

const StyledSlider = styled.div<{ $currentIndex: number; $size?: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .slider__slick_wrap {
    ${({ $size }) => $size && `width: ${$size}px;`}
  }

  .slider__dots_wrap {
    display: flex;
    justify-content: center;
    gap: 4px;

    .slider_dot {
      width: 6px;
      height: 6px;
      border-radius: 3px;

      background: ${COLORS.GRAY_SCALE_100};

      &:nth-child(${({ $currentIndex }) => $currentIndex + 1}) {
        background: ${COLORS.GRAY_SCALE_900};
      }
    }
  }
`;

const StyledSlick = styled(Slick)<{ gap: number }>`
  .slick-list {
    overflow: visible;
    margin: 0 -${({ gap }) => gap / 2}px;
    .slick-slide > div {
      padding: 0 ${({ gap }) => gap / 2}px;
    }
  }
`;

function Slider({ items, gap = 0, size }: SliderProps) {
  const [index, setIndex] = useState<number>(0);

  return (
    <StyledSlider $currentIndex={index} $size={size}>
      <div className='slider__slick_wrap'>
        <StyledSlick
          gap={gap ?? 0}
          dots={false}
          infinite={false}
          arrows={false}
          beforeChange={(_, index) => {
            setIndex(index);
          }}
        >
          {items}
        </StyledSlick>
      </div>
      <div className='slider__dots_wrap'>
        {items.map((_, index) => (
          <div className='slider_dot' key={index} />
        ))}
      </div>
    </StyledSlider>
  );
}

export default Slider;
