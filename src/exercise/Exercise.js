import Bonus from "../bonus/Bonus";

function Exercise({good = `Awesome`, bad = `Terrible`}){
    // 2a
    return (
        <div>
            {/* 3c */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            <Bonus />
        </div>
    );
}

export default Exercise;