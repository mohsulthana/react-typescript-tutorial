import { useRef } from "react";
import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
    todo,
    setTodo,
    handleSubmit,
}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleSubmit(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a task"
                className="input__box"
            />
            <button className="input__submit" type="submit">
                Submit
            </button>
        </form>
    );
};

export default InputField;
