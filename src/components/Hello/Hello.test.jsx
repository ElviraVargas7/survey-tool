import React from 'react';

import { render } from '@testing-library/react';

import Hello from './Hello';

describe('<Hello />', () => {
  it('should render the given text in the document', () => {
    const { getByText } = render(<Hello message={'This is a test'} />);

    expect(getByText('This is a test')).toBeInTheDocument();
  });

  it('should not render any text other than the provided message', () => {
    const { queryByText } = render(<Hello message={'This is a test'} />);

    expect(queryByText('Something else')).not.toBeInTheDocument();
  });
});
