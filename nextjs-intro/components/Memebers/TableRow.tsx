import Button from "../Common/Button";

interface rowDataInterface {
    key: string;
    value: string;
    head: Array<Object>;
}
export default function TableRow(props: rowDataInterface) {
    const typeChange = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    return (
        <>
            <tr key={props.key}>
            {Object.values(props.head).map((item: any, index: number) => (
                item.id === "type" ? 
                <td key={index}>
                    <Button className={props.value[item.id]} text={props.value[item.id]} onClick={() => typeChange}/>
                </td>:
                <td key={index}>{props.value[item.id]}</td>
            ))}
                <td>
                    <Button text="자세히보기"/>
                </td>
            </tr>
        </>
    )
}