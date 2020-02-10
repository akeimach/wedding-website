import React, { ReactElement } from 'react';
import AddToCalendar from 'react-add-to-calendar';
import { MdSchedule, MdMyLocation } from 'react-icons/md';
import { blockStyle } from '../';

const CalendarLinks = (): ReactElement => {
  const event = {
    title: "Alyssa and Danny's Wedding",
    description: 'Come celebrate with us!',
    location: 'The Faculty Club, Minor Ln, Berkeley, CA 94720, USA',
    startTime: '2020-08-15T16:00:00-07:00',
    endTime: '2020-08-15T23:00:00-07:00'
  };

  const listItems = [
    { google: 'Google' },
    { apple: 'Apple Calendar' },
    { outlookcom: 'Outlook' },
    { yahoo: 'Yahoo' },
  ];

  return (
    <AddToCalendar
      event={event}
      buttonLabel="Add to Calendar"
      displayItemIcons={false}
      buttonWrapperClass="add-to-calendar"
      dropdownClass="add-to-calendar-dropdown"
      listItems={listItems}
    />
  );
}

const Details = (): ReactElement => {
  return (
    <div id="Details" style={{ ...blockStyle, backgroundColor: '#054b30', color: '#fff' }}>
      <div>Details</div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
        <div>
          <MdSchedule />
          <div>When</div>
          <div>August 15, 2020</div>
          <CalendarLinks />
        </div>
        <div>
          <MdMyLocation />
          <div>Where</div>
          <div>The Faculty Club</div>
        </div>
      </div>
    </div>
  );
}

export default Details;
