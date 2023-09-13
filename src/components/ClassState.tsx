/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const SECURITY_KEY = 'paradigma'

// interface IChildComponentProps extends React.Props<any> {
//   ... (other props needed by component)
// }


interface PassedProps extends React.ComponentProps<any> {
  name: string
}

class ClassState extends React.Component<PassedProps, any> {

  constructor(props: PassedProps) {
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }

  // componentWillUnmount(): void {
  //   console.log("componentWillUnmount")
  // }

  // componentDidMount(): void {
  //   console.log("componentDidMount")
  // }

  // componentWillMount(): void {
  //   console.log("componentWillMount")
  // }

  componentDidUpdate(prevProps: Readonly<PassedProps>, prevState: Readonly<any>, snapshot?: any): void {
    console.log("actualización", prevProps, prevState, snapshot)
    if (this.state.loading) {

      setTimeout( () => {
        console.log("Validando - class")
        if (SECURITY_KEY === this.state.value) {
          this.setState({error: false, loading: false})
        } else {
          this.setState({error: true, loading: false})
        }
        console.log("Terminando - class")
      }, 1000)
    }
  }

  render() {
    const {error, loading, value} = this.state
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el código de seguridad.</p>

        {(error && !loading)&& (
          <p>Error: el código es incorrecto</p>
        )}

        {loading && (
          <p>Loading...</p>
        )}

        <input 
          placeholder="Código de seguridad"
          value={value}
          onChange={(event) => {
            this.setState({ value: event.target.value })
          }}
          />
        <button
          // onClick={() =>
          //   this.setState((prevState: { error: boolean; }) => ({ error: !prevState.error }))
          // }
          onClick={() =>
            this.setState({ loading: true })
          }
        >Comprobar</button>
      </div>
    );
  }
}

export { ClassState };