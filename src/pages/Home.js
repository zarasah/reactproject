import Main from "../components/Main";

export default function Home(props) {
    return (
        <div className="main">
            <Main onAdd = {props.onAdd} />
        </div>
    );
}


// export default function Main() {
//     return (
//         <div className="main">
//             Main
//         </div>
//     );
// }