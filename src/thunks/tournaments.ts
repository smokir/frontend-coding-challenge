import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

import { RootState } from 'reducers';
import { API_TOURNAMENTS_URL } from 'constants/api';
import {
  setTournamentsAction,
  createTournamentAction,
  deleteTournamentAction,
  editTournamentAction
} from 'actions/tournaments';
import { Tournament } from 'types/tournaments';

export const getTournamentsThunk = (
  q = ''
): ThunkAction<
  Promise<Tournament[]>,
  RootState,
  void,
  ReturnType<typeof setTournamentsAction>
> => async dispatch =>
  axios
    .get<Tournament[]>(API_TOURNAMENTS_URL, { params: { q } })
    .then(({ data: tournaments }) => {
      dispatch(setTournamentsAction(tournaments));
      return tournaments;
    });

export const createTournamentThunk = (
  name: string
): ThunkAction<
  Promise<Tournament>,
  RootState,
  void,
  ReturnType<typeof createTournamentAction>
> => async dispatch =>
  axios
    .post<Tournament>(API_TOURNAMENTS_URL, { name })
    .then(({ data: tournament }) => {
      dispatch(createTournamentAction(tournament));
      return tournament;
    });

export const editTournamentThunk = ({
  id,
  name
}: {
  id: string;
  name: string;
}): ThunkAction<
  Promise<Tournament>,
  RootState,
  void,
  ReturnType<typeof editTournamentAction>
> => async dispatch =>
  axios
    .patch<Tournament>(`${API_TOURNAMENTS_URL}/${id}`, { name })
    .then(({ data: tournament }) => {
      dispatch(editTournamentAction(tournament));
      return tournament;
    });

export const deleteTournamentThunk = (
  id: string
): ThunkAction<
  Promise<void>,
  RootState,
  void,
  ReturnType<typeof deleteTournamentAction>
> => async dispatch =>
  axios
    .delete<Record<string, never>>(`${API_TOURNAMENTS_URL}/${id}`)
    .then(() => {
      dispatch(deleteTournamentAction(id));
    });
