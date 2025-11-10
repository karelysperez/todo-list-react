export default function ActionBar({
    anySelected,
    onDeleteSelected,
    onCompleteSelected,
    onIncompleteSelected,}) {

    return (
        <div className= "buttonsDiv">
            <button
                className= {`btn btn-danger ${anySelected ? "active" : ""}`}
                onClick={onDeleteSelected}
                disabled={!anySelected}
            >
               Delete Selected
            </button>

            <button
                className= {`btn btn-success ${anySelected ? "active" : ""}`}
                onClick={onCompleteSelected}
                disabled={!anySelected}
            >
                Complete Selected
            </button>

            <button
                className= {`btn btn-warning ${anySelected ? "active" : ""}`}
                onClick={onIncompleteSelected}
                disabled={!anySelected}
            >
                Incomplete Selected
            </button>

        </div>
    );
}