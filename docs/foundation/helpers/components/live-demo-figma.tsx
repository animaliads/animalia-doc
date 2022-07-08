import React from 'react';

export default class LiveDemoFigma extends React.Component {
  state = { language: 'react' };

  props: {
    javascript?: string;
    react: string;
  };

  render(): JSX.Element {
    return (
      <div>
        <iframe
          src={this.props[this.state.language]}
          style={{
            width: '100%',
            height: '500px',
            border: 'solid 1px black',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="Live demo"
        ></iframe>
      </div>
    );
  }
}
