import { TabList, TabPanel, Tabs, Tab as RTab } from 'react-tabs';
import styled from 'styled-components';

import { TabProps } from '@@components/Tab/type';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledTabs = styled(Tabs)`
  flex: 1;
  overflow-y: scroll;

  .react-tabs__tab-list {
    display: flex;
    padding: 0 16px;
    height: 52px;

    background: ${COLORS.GRAY_SCALE_000};

    .react-tabs__tab {
      outline: none;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      list-style: none;

      &::before {
        content: '';
        position: absolute;
        display: none;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: ${COLORS.MAIN_400};
      }

      &.react-tabs__tab--selected {
        p {
          color: ${COLORS.MAIN_400};
        }
        &::before {
          display: block;
        }
      }
    }
  }
`;

function Tab<T extends string>({ items, ...props }: TabProps<T>) {
  return (
    <StyledTabs {...props}>
      <TabList>
        {items.map(({ type, title }) => (
          <RTab key={type as string}>
            <Typography.MediumButton color={COLORS.GRAY_SCALE_200}>{title}</Typography.MediumButton>
          </RTab>
        ))}
      </TabList>
      {items.map(({ title, content }) => (
        <TabPanel key={title}>{content}</TabPanel>
      ))}
    </StyledTabs>
  );
}

export default Tab;
