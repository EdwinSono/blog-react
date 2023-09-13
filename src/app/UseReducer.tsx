/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {useReducer} from 'react';

const SECURITY_KEY = 'paradigma'

interface Props {
  name: string
}

interface State {
  value: string | undefined;
  error: boolean;
  loading: boolean;
  deleted: boolean;
  confirmed: boolean;
}

const initialState: State = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
}

enum ActionTypes {
  CONFIRM = 'CONFIRM',
  DELETE = 'DELETE',
  ERROR = 'ERROR',
  WRITE = 'WRITE',
  RESET = 'RESET',
  CHECK = 'CHECK',
}

interface Action {
  type: ActionTypes;
  payload?: string;
}

// interface IssueReducer {
//   state: State;
//   action: {
//     type: ActionTypes;
//     payload?: string;
//   };
// }

function reducerObject(state: State, action: Action): State {

  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CONFIRM:
      return {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
      }
    case ActionTypes.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case ActionTypes.WRITE:
      return {
        ...state,
        value: payload
      }
    case ActionTypes.CHECK:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.DELETE:
      return {
        ...state,
        deleted: true,
      }
    case ActionTypes.RESET:
      return {
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
      }
    default:
      return state
  }
}
// const reducerObject = (state: State, action: Action) : State => ({
  // [ActionTypes.CONFIRM]: {
  //   ...state,
  //   error: false,
  //   loading: false,
  //   confirmed: true,
  // },
  // [ActionTypes.ERROR]: {
  //   ...state,
  //   error: true,
  //   loading: false,
  // },
  // [ActionTypes.WRITE]: {
  //   ...state,
  //   value: action.payload
  // },
  // [ActionTypes.CHECK]: {
  //   ...state,
  //   loading: true,
  // },
  // [ActionTypes.DELETE]: {
  //   ...state,
  //   deleted: true,
  // },
  // [ActionTypes.RESET]: {
  //   ...state,
  //   confirmed: false,
  //   deleted: false,
  //   value: '',
  // },
// });

const reducer = (state: State, action: Action): State => {
  if (reducerObject(state, {type: action.type} )) {
    return reducerObject(state, {type: action.type, payload: action.payload})
  } else {
    return state;
  }
};


function UseReducer({name}: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [state, dispatch] = useReducer(
  //   (state: State) => ({
  //     ...state,
  //   }),
  //   initialState
  // );

  const onConfirm = () => dispatch({ type: ActionTypes.CONFIRM })
  const onError = () => dispatch({ type: ActionTypes.ERROR });
  const onCheck = () => dispatch({ type: ActionTypes.CHECK });
  const onDelete = () => dispatch({ type: ActionTypes.DELETE });
  const onReset = () => dispatch({ type: ActionTypes.RESET });
  
  const onWrite = ({ target: {value} } : any) => {
    dispatch({ type: ActionTypes.WRITE, payload: value });
  }

  React.useEffect( () => {
    console.log(state.loading, "empezando efecto")
    if (state.loading) {

      setTimeout( () => {
        console.log("Validando")
        
        console.log(state.value)
        if (SECURITY_KEY === state.value) {
          onConfirm();
        } else {
          onError();
        }

        console.log("Terminando")
      }, 1000)
    }
    console.log(state.loading, "terminando efecto")
  }, [state.loading])

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
  
        <p>Por favor, escribe el código de seguridad.</p>
  
        {(state.error && !state.loading) && (
          <p>Error: el código es incorrecto</p>
        )}
  
        {state.loading && (
          <p>Loading...</p>
        )}
  
        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={onWrite}
        />
        <button  
          onClick={() => {
            onCheck();
          }}
        >Comprobar</button>
      </div>
    )
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Pedimos confirmación. Estas seguro?</p>
        <button onClick={onDelete}> Sí, eliminar </button>
        <button
        onClick={onReset}
        > No, eliminar </button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button
          onClick={onReset}
        >
          Resetear, volver atrás
        </button>
      </React.Fragment>
    )
  }

}

export { UseReducer };
