import React, {Component, ErrorInfo, ReactNode} from "react";

interface IErrorBoundaryProps {
    children: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    public state: IErrorBoundaryState = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): IErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div
                    className={'notification notification-warning'}
                    data-testid={'error-boundary'}>
                    Sorry.. there was an error
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;