import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

export default (): React.ReactElement => {
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
    <div>
      <br />
        <AddToCalendar
          event={event}
          buttonLabel="Add to Calendar"
          displayItemIcons={false}
          buttonWrapperClass="add-to-calendar"
          dropdownClass="add-to-calendar-dropdown"
          listItems={listItems}
        />
      <br />
    </div>
  );
}