import Image from 'next/image';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '../buttons';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    // Define a state variable to track whether there is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render(): ReactNode {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex h-screen px-4">
          <div className="m-auto">
            <Image src="/images/alert.svg" alt="error" className="m-auto" width={100} height={100} />
            <h1 className="m-auto font-bold text-[#4E4E4E] text-xl text-center py-4">Oops! Something went wrong</h1>
            <h3 className="m-auto text-gray-400 text-sm text-center py-2">
              Try refreshing the page and if it doesn&#39;t solve the issue, please email us at{' '}
              <a href="mailto:dev.dodotech@gmail.com" className="text-black hover:underline">
                dev.dodotech@gmail.com
              </a>
            </h3>
            <Button
              className="m-auto mt-5"
              small
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
            >
              Reload
            </Button>
          </div>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}
