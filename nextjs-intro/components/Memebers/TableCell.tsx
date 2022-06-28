interface TableCellDataInterface {
    column: Array<object>,
    datas: Array<object>
}
export default function TableCell(props: TableCellDataInterface) {
    return (
        <>
            <thead>
                  <tr>
                    {/* {props.column.map((item: any) => {
                        <th scope="col" key={item.Header}>{item.Header}</th>
                    })} */}
                    {Object.keys(props.datas[0]).map((title:string, index:number) => (
                        <th scope= "col" key={index}>{title}</th>
                    ))}
                    <th>상세</th>
                  </tr>
            </thead>
            <tbody>
                    {Object.entries(props.datas).map(([key, value]) => {
                        return (
                            <tr key={key}>
                            {Object.values(value).map((item, index) => (
                                <td key={index}>{item}</td>
                            ))}
                                <td>자세히보기</td>
                            </tr>
                        )
                    })}
            </tbody>
        </>
    )
}