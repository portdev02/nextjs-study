export default function Table({children} : any) {
    return (
        <>
        <div className="table_area scrollable_table_area">
            <table className="common_list_table">{children}</table>
        </div>
        <style global jsx>{`
        .scrollable_table_area {
            position: relative;
        }
        
        .scrollable_table_area.type_horizontal {
            overflow: hidden;
            -webkit-overflow-scrolling: touch;
            overflow-x: auto;
            white-space: nowrap;
        }
        
        .scrollable_table_area.type_vertical {
            overflow: hidden;
            -webkit-overflow-scrolling: touch;
            overflow-y: auto;
        }
        
        .common_list_table {
            table-layout: fixed;
            text-align: center;
        }
        .common_list_table th,
        .common_list_table td {
            padding: 10px;
            font-size: 1.3rem;
            color: #5e5e5f;
        }
        .common_list_table th {
            border-top: 1px solid #e6e6e7;
            border-bottom: 1px solid #e6e6e7;
            background-color: #f7f7f8;
            font-weight: 600;
        }
        .common_list_table .check {
            width: 20px;
        }
        .common_list_table .check .input_checkbox {
            margin-top: 3px;
        }
        .common_list_table .no {
            width: 20px;
        }
        .common_list_table td {
            border-bottom: 1px solid #e6e6e7;
            white-space: normal;
        }
        .common_list_table td.algin_left {
            text-align: left;
        }
        .common_list_table .link {
            font-weight: bold;
        }
        .common_list_table .link:hover {
            text-decoration: underline;
        }
        .common_list_table .no_data {
            padding: 100px 0;
        }
        
        .common_list_table.type_fruid {
            table-layout: auto;
        }
        
        .common_detail_table th,
        .common_detail_table td {
            padding: 10px;
            border-bottom: 1px solid #e6e6e7;
            font-size: 1.3rem;
            color: #5e5e5f;
        }
        .common_detail_table tr:first-child th,
        .common_detail_table tr:first-child td {
            border-top: 1px solid #e6e6e7;
        }
        .common_detail_table th {
            width: 100px;
            padding: 10px 20px;
            background-color: #f7f7f8;
            font-weight: 600;
            text-align: left;
        }
      `}</style>    
        </>
    )
}