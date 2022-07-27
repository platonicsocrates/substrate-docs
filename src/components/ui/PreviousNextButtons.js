import React from 'react';

import SecondaryButton from './SecondaryButton';

export default function PreviousNextButtons({ previous, next }) {
  return (
    <div className="flex justify-between items-center relative">
      {previous ? (
        <SecondaryButton link={previous} className="justify-start">
          Previous
        </SecondaryButton>
      ) : (
        ''
      )}
      {next ? (
        <div className="absolute right-0">
          <SecondaryButton link={next}>Next</SecondaryButton>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
