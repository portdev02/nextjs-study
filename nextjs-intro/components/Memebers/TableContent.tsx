import Button from "../Common/Button";
import TableRow from "./TableRow";

interface TableCellDataInterface {
    column: Array<object>,
    datas: Array<object>
}
export default function TableCell(props: TableCellDataInterface) {
    // table header rendering 부분
    // body에 들어오는 data를 표의 올바른 column에 넣어주어야 하므로 id를 key값으로 구별
    // {
    //     "id" : "carInfo",
    //     "value" : "차량종류/번호"
    // }
    const header = Object.values(props.column).map((item: any) => {
        return <th scope="col" key={item.id}>{item.value}</th>
    });

    


    // [{"type" : "차주", "memberNum" : "10", "joinDate": "19/11/11 16:10", "name": "김인수", "phone" : "010-1234-5678",
    // "businessName": "한국카캐리어", "businessNumber" : "123-12-12345", "recent":"19/11/11 16:10", "carInfo": "full tailer"},
    const body = Object.entries(props.datas).map(([key, value]: any) => {
        return (
            <TableRow key={key} value={value} head={props.column}/>
        )
    })

    return (
        <>
            <thead>
                  <tr>
                    {header}
                    <th>상세</th>
                  </tr>
            </thead>
            <tbody>
                    {body}
            </tbody>
        </>
        
    )
}