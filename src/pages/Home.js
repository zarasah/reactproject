import Main from "../components/Main";

export default function Home(props) {
    return (
        <div className="main">
            <Main onAdd = {props.onAdd} onHistory = {props.onHistory} filter = {props.filter}/>
        </div>
    );
}