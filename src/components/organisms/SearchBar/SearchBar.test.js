import { render, screen, fireEvent, waitFor } from 'test-utils';
import { SearchBar } from './SearchBar';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText(/Logged/);
    screen.getByPlaceholderText(/Search/);
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/Search/);
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/);
  });

  it('Hides search results when input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/Search/);
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/);

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(screen.getByText(/No results are available/)).toBeVisible();
    });
  });
});