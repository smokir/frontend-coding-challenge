import {
  createTournamentAction,
  deleteTournamentAction,
  editTournamentAction,
  setTournamentsAction
} from 'actions/tournaments';
import { ACTION_TYPE } from 'constants/tournaments';
import { Tournament } from 'types/tournaments';

type TournamentAction =
  | ReturnType<typeof setTournamentsAction>
  | ReturnType<typeof createTournamentAction>
  | ReturnType<typeof editTournamentAction>
  | ReturnType<typeof deleteTournamentAction>;

const initialState: { tournaments: Tournament[] } = {
  tournaments: []
};

export default function tournaments(
  state = initialState,
  action: TournamentAction
) {
  switch (action.type) {
    case ACTION_TYPE.SET:
      return { ...state, tournaments: action.payload };

    case ACTION_TYPE.CREATE:
      return {
        ...state,
        tournaments: state.tournaments.concat(action.payload)
      };

    case ACTION_TYPE.EDIT:
      return {
        ...state,
        tournaments: state.tournaments.map(tournament => {
          if (tournament.id === action.payload.id) {
            return action.payload;
          }

          return tournament;
        })
      };

    case ACTION_TYPE.DELETE:
      return {
        ...state,
        tournaments: state.tournaments.filter(({ id }) => id !== action.payload)
      };
  }

  return state;
}
