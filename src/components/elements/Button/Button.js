import "./Button.scss";

export default function Button({ text, onClick }) {
    return (
        <button className={"button relative px-20 py-3"} onClick={onClick}>
            {text}
        </button>
    );
}
