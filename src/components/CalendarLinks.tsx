import React, { ReactElement } from 'react';
import Popover from 'react-tiny-popover';
import { popoverContainerStyle, calendarLinksStyle, popoverLinkStyle, linkStyle } from '../constants/style';

const event = {
  title: "Alyssa and Danny's Wedding",
  description: 'Come celebrate with us!',
  location: 'The Faculty Club, Minor Ln, Berkeley, CA 94720, USA',
  startTime: '20200815T230000Z',
  endTime: '20200816T060000Z',
};

const googleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${event.startTime}/${event.endTime}&location=${event.location}&text=${event.title}&details=${event.description}`;

const outlookLink = `https://outlook.live.com/owa/?rru=addevent&startdt=${event.startTime}&enddt=${event.endTime}&subject=${event.title}&location=${event.location}&body=${event.description}&allday=false&uid=1582497358565_57287884127&path=/calendar/view/Month`;

const yahooLink = `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${event.title}&st=${event.startTime}&dur=7:00&desc=${event.description}&in_loc=${event.location}`;

const CalendarLinksPopover = (): ReactElement => (
  <div style={linkStyle}>
    Add To Calendar
    <ul style={calendarLinksStyle}>
      <li><a href={googleLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>Google</a></li>
      <li><a href={outlookLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>Outlook</a></li>
      <li><a href={yahooLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>Yahoo</a></li>
    </ul>
  </div>
);

const CalendarLinks = (): ReactElement => {
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  return (
    <Popover
      containerStyle={popoverContainerStyle as Partial<CSSStyleDeclaration>}
      isOpen={popoverOpen}
      position={['right', 'bottom']}
      padding={10}
      onClickOutside={() => setPopoverOpen(false)}
      content={() => <CalendarLinksPopover />}
    >
      <button onClick={() => setPopoverOpen(true)} style={popoverLinkStyle}>August 15, 2020</button>
    </Popover>
  );
};

export default CalendarLinks;
