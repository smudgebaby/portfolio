import React, { ReactNode, ReactElement } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: string | null;
}

const CONTACT_EMAIL = 'victoriazhao.dev@gmail.com';

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: unknown): Omit<State, 'errorInfo'> {
    return { hasError: true, error: error instanceof Error ? error : new Error(String(error)) };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    console.error('Error caught by boundary:', error, errorInfo);
    // Store error info for display
    this.setState({ errorInfo: errorInfo.componentStack });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Reset to home page
    window.location.href = '#/';
  };

  render(): ReactElement {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen bg-black flex items-center justify-center px-6"
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold serif mb-6">Something Went Wrong</h1>
            <p className="text-neutral-400 text-lg mb-4">
              We encountered an unexpected error while loading this page.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-neutral-900/50 border border-red-500/30 rounded-lg p-4 mb-8 text-left">
                <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-2">Error Details:</p>
                <p className="text-xs text-neutral-300 font-mono break-words">
                  {this.state.error.message || this.state.error.toString()}
                </p>
                {this.state.error.stack && (
                  <pre className="text-xs text-neutral-500 mt-4 overflow-auto max-h-40">
                    {this.state.error.stack}
                  </pre>
                )}
                {this.state.errorInfo && (
                  <details className="text-xs text-neutral-600 mt-4">
                    <summary className="cursor-pointer hover:text-neutral-500">Component Stack</summary>
                    <pre className="overflow-auto max-h-40 mt-2">{this.state.errorInfo}</pre>
                  </details>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="px-8 py-3 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-100 transition-all duration-300"
                type="button"
                aria-label="Return to home page"
              >
                Return to Home
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-white/10 transition-all duration-300"
                type="button"
                aria-label="Reload the current page"
              >
                Reload Page
              </button>
            </div>

            {/* Help Text */}
            <p className="mt-8 text-neutral-500 text-sm">
              If this problem persists, please{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white hover:text-neutral-300 underline transition-colors"
                aria-label={`Contact support at ${CONTACT_EMAIL}`}
              >
                contact us
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children as ReactElement;
  }
}

export default ErrorBoundary;
