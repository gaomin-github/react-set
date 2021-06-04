import React, { PureComponent } from 'react';
interface IProps {}
interface IState {
  count: number;
}
class funAndClass extends PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handeClick(event: any) {
    this.setState((preState) => ({
      count: preState.count + 1,
    }));
  }

  render() {
    const { handeClick } = this;
    return (
      <div onClick={handeClick.bind(this)}>
        addCountResult:{this.state.count}
      </div>
    );
  }
}
export default funAndClass;
