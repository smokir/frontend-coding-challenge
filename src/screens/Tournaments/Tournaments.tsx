import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { selectTournaments } from 'selectors/tournaments';
import { createTournamentThunk, getTournamentsThunk } from 'thunks/tournaments';

import Button from 'components/Button';
import Centered from 'components/Centered';
import Container from 'components/Container';
import Grid from 'components/Grid';
import H4 from 'components/H4';
import Input from 'components/Input';
import Error from 'components/Error';

import TournamentCard from './components/TournamentCard';
import { Controls } from './styled';

const Tournaments = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const tournaments = useSelector(selectTournaments);

  const onSearch = React.useCallback(e => setSearch(e.target.value), []);

  const onCreate = React.useCallback(() => {
    const name = window.prompt('Tournament Name:');

    if (name) {
      dispatch(createTournamentThunk(name));
    }
  }, [dispatch]);

  const getTournamentsDebounced = React.useCallback(
    debounce(async search => {
      setIsLoading(true);
      setIsError(false);

      try {
        await dispatch(getTournamentsThunk(search));
      } catch (e) {
        setIsError(true);
      }

      setIsLoading(false);
    }, 500),
    [dispatch]
  );

  const onRetry = React.useCallback(() => getTournamentsDebounced(search), [
    getTournamentsDebounced,
    search
  ]);

  React.useEffect(() => {
    getTournamentsDebounced(search);
  }, [getTournamentsDebounced, search]);

  const showError = !isLoading && isError;
  const showData = !isLoading && !isError;

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>

      <Controls>
        <Input
          value={search}
          onChange={onSearch}
          placeholder="Search tournament ..."
        />

        <Button onClick={onCreate}>create tournament</Button>
      </Controls>

      {isLoading && <Centered>Loading tournaments ...</Centered>}

      {showError && (
        <Centered>
          <Error onRetry={onRetry} />
        </Centered>
      )}

      {showData && tournaments.length === 0 && (
        <Centered>No tournaments found.</Centered>
      )}

      {showData && tournaments.length > 0 && (
        <Grid>
          {tournaments.map(tournament => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Tournaments;
