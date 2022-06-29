import axios from "axios";
import test from "node:test";
import { useMemo } from "react";
import ContentCommon from "../../components/Common/ContentCommon";
import Table from "../../components/Memebers/Table";
import TableContent from "../../components/Memebers/TableContent";

export default function Members() {
    const testHeader = [
        {
            "id": "type",
            "value":"회원정보"
        },
        {
            "id" : "memberNum",
            "value" : "회원번호"
        },
        {
            "id": "joinDate",
            "value":"회원가입일시"
        },
        {
            "id" : "name",
            "value" : "이름(담당자명)"
        },
        {
            "id": "phone",
            "value":"연락처"
        },
        {
            "id" : "email",
            "value" : "이메일"
        },
        {
            "id": "businessName",
            "value":"사업자명"
        },
        {
            "id" : "businessNumber",
            "value" : "사업자번호"
        },
        {
            "id": "recent",
            "value":"최근접속"
        },
        {
            "id" : "carInfo",
            "value" : "차량종류/번호"
        }
    ]

    const mockupData = useMemo(() => [
                        {"type" : "차주", "memberNum" : "10", "joinDate": "19/11/11 16:10", "name": "김인수", "phone" : "010-1234-5678",
                        "businessName": "한국카캐리어", "businessNumber" : "123-12-12345", "recent":"19/11/11 16:10", "carInfo": "full tailer"},
                        {"type" : "화주(실화주)", "memberNum" : "10", "joinDate": "19/11/11 16:10", "name": "김인수", "phone" : "010-1234-5678",
                        "businessName": "한국카캐리어", "businessNumber" : "123-12-12345", "recent":"19/11/11 16:10", "carInfo": "full tailer"},
                    ], []);

    const testData = [
                        {"type" : "차주", "memberNum" : "10", "joinDate": "19/11/11 16:10", "name": "김인수", "phone" : "010-1234-5678",
                        "email": "aa@aa.com",
                        "businessName": "한국카캐리어", "businessNumber" : "123-12-12345", "recent":"19/11/11 16:10", "carInfo": "full tailer"},
                        {"type" : "화주(실화주)", "memberNum" : "10", "joinDate": "19/11/11 16:10", "name": "김인수", "phone" : "010-1234-5678",
                        "businessName": "한국카캐리어", "businessNumber" : "123-12-12345", "recent":"19/11/11 16:10", "carInfo": "full tailer"},
                    ];

    return (
        <>
            {/* <!-- CONTENT --> */}
            <ContentCommon>
                        {/* <!-- 목록 --> */}
                        <Table>
                            <TableContent column={testHeader} datas={testData}/>                         
                        </Table>
            </ContentCommon>    
        </>
    );
}

// export async function getServerSideProps() {
    
// }