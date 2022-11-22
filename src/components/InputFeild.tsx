import React from "react";


interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {


  return (
    <div className="InputFeild">
     
      <form className=" " onSubmit={handleAdd}>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control "
            placeholder="Entar task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};
export default InputFeild;
