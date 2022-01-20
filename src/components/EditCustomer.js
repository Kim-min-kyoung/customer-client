import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

function EditCustomer(props) {
    const param = useParams();
    console.log(param);
    const { id } = param;
    async function getCustomer() {
        const response = await axios.get(
            `http://localhost:8080/customer/${id}`
        )
        return response.data;
    }
    const state = useAsync(getCustomer);
    const { loading, error, data: customer } = state;
    console.log(customer);

    // 수정
    // input값 state로 관리
    const [ formData, setFormData ] = useState({
        c_name: "",
        c_phone: "",
        c_birthday: "",
        c_gender: "",
        c_addr: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(name,value);
    }
    // 폼 submit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        insertCustomer();
        setFormData({
            c_name: "",
            c_phone: "",
            c_birthday: "",
            c_gender: "",
            c_addr: ""
        })
    }
    // post전송 axios
    function insertCustomer(){
        axios.post("http://localhost:8080/updateCustomer", formData)
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    if(loading) return <div>로딩중.....</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!customer) return null;
    return (
        <div>
            <h2>고객 상세 정보</h2>
            <form onSubmit={onSubmit}>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                이름
                            </TableCell>
                            <TableCell>
                                <input name="c_name" type="text" value={formData.c_name} onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                전화번호
                            </TableCell>
                            <TableCell>
                                <input name="c_phone" type="text" value={formData.c_phone} onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                생년월일
                            </TableCell>
                            <TableCell>
                                <input name="c_birthday" type="date" value={formData.c_birthday} onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                성별
                            </TableCell>
                            <TableCell>
                                여성 <input name="c_gender" type="radio" value="여성" onChange={onChange} />
                                남성 <input name="c_gender" type="radio" value="남성" onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                주소
                            </TableCell>
                            <TableCell>
                                <input name="c_addr" type="text" value={formData.c_addr} onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <button type="submit">수정</button>
                                <button type="reset">취소</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
}

export default EditCustomer;