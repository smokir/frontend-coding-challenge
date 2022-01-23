import { ACTION_TYPE } from 'constants/tournaments';
import { Tournament } from 'types/tournaments';

export const setTournamentsAction = (tournaments: Tournament[]) => ({
  type: ACTION_TYPE.SET,
  payload: tournaments
});

export const createTournamentAction = (tournament: Tournament) => ({
  type: ACTION_TYPE.CREATE,
  payload: tournament
});

export const editTournamentAction = (tournament: Tournament) => ({
  type: ACTION_TYPE.EDIT,
  payload: tournament
});

export const deleteTournamentAction = (id: string) => ({
  type: ACTION_TYPE.DELETE,
  payload: id
});
