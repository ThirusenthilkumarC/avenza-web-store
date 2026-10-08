import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Avenza Uncaught Error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center font-sans text-stone-900">
          <div className="max-w-md bg-white border border-stone-200 rounded-3xl p-8 shadow-xl space-y-6">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto text-amber-800">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-serif-luxury text-stone-950">
                Something went wrong
              </h1>
              <p className="text-xs text-stone-600 leading-relaxed">
                We encountered an unexpected error while loading this page. Don't worry, your cart and items are safe.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-stone-100 rounded-xl text-left font-mono text-[11px] text-stone-700 overflow-x-auto max-h-32 border border-stone-200">
                {this.state.error.message || 'Unknown runtime error'}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto flex-1 bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3 px-5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3 px-5 rounded-xl text-xs transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
