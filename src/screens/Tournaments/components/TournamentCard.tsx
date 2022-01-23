import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTournamentThunk, editTournamentThunk } from 'thunks/tournaments';
import { Tournament } from 'types/tournaments';

import formatDate from 'utils/formatDate';

import Card from 'components/Card';
import { Row } from './styled';

const TournamentCard = ({
  tournament: {
    id,
    name,
    organizer,
    game,
    participants: { max, current },
    startDate
  }
}: {
  tournament: Tournament;
}) => {
  const dispatch = useDispatch();

  const onEdit = React.useCallback(async () => {
    const newName = window.prompt('New Tournament Name:', name);

    if (newName) {
      dispatch(editTournamentThunk({ id, name: newName })).catch(() =>
        alert(`Could not update tournament '${name}'`)
      );
    }
  }, [dispatch, id, name]);

  const onDelete = React.useCallback(() => {
    if (window.confirm('Do you really want to delete this tournament?')) {
      dispatch(deleteTournamentThunk(id)).catch(() =>
        alert(`Could not delete tournament '${name}'`)
      );
    }
  }, [dispatch, id, name]);

  return (
    <Card title={name} onEdit={onEdit} onDelete={onDelete}>
      <Row title={organizer}>Organizer: {organizer}</Row>
      <Row title={game}>Game: {game}</Row>
      <Row>
        Participants: {current}/{max}
      </Row>
      <Row>Start: {formatDate(startDate)}</Row>
    </Card>
  );
};

export default TournamentCard;
