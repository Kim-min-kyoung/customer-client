import React from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import Customer from './Customer';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

// 비동기 전송으로 get요청을 해주는 함수
// 응답받은 데이터를 return해줌
async function getCustomers() {
    const response = await axios.get(
        'http://localhost:8080/customers'
    )
    return response.data;
}

function CustomerList() {
    const state = useAsync(getCustomers);
    const { loading, error, data: customers } = state;
    console.log(customers);
    // 로딩중이라면?
    if(loading) return <div>로딩중...</div>
    // 에러가 발생했다면?
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    // 데이터가 없다면?
    if(!customers) return null;
    // 정상적으로 작동이 된다면?
    return (
        <div>
            <h2>고객리스트</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>연락처</TableCell>
                        <TableCell>생년월일</TableCell>
                        <TableCell>성별</TableCell>
                        <TableCell>주소</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* 받아온 값이 객체라 배열에 넣어주기 위해 .을 붙여 사용함 */}
                    {/* mysql 입력 후에는 배열로 받는 형태 제거! */}
                    {customers.map(data=>(
                        <Customer data={data} key={data.c_no} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default CustomerList;