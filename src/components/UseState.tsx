import React from 'react';
const SECURITY_KEY = 'paradigma'
interface Props {
  name: string
}

function UseState({name}: Props) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });
  
  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onWrite = (newValue: string) => {
    setState({
      ...state,
      value: newValue,
    });
  }

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    });
  };

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
          onChange={(event) => {
            onWrite(event.target.value);
          }}
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
        <button
          onClick={ () => {
            onDelete();
          }
         }
        > Sí, eliminar </button>
        <button
        onClick={()=> {
          onReset();
        }}
        > No, eliminar </button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Resetear, volver atrás
        </button>
      </React.Fragment>
    )
  }

}

export { UseState };
