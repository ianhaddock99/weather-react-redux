import React from 'react'


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isError: false };
    }
  
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { isError: true };
      }
  
    render() {
      if (this.state.isError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary