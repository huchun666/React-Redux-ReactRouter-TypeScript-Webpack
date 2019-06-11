import * as React from 'react'

interface IProps {
  color: string,
  size?: string,
}
interface IState {
  count: number,
}

class Test extends React.PureComponent<IProps, IState> {
  public readonly state: Readonly<IState> = {
    count: 1,
  }
  public render () {
    return (
      <div>Hello world</div>
    )
  }
  public componentDidMount () {
    // this.state.count = 2 会提示错误
  }
}
export default Test