function ActionRow({ isActive, setIsActive, start, pause, reset }) {

    return (
        <div className="item">
            {isActive ? (
                <div
                    className="actionButton pause"
                    onClick={pause}>Pause</div>
            ) : (
                <div
                    className="actionButton"
                    onClick={start}>Start</div>
            )}
            <div
                className="actionButton"
                onClick={reset}>Reset</div>
        </div>
    );
}

export default ActionRow;