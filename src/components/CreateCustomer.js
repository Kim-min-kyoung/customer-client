import React from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';

function CreateCustomer(props) {
    return (
        <div>
            <h2>신규 고객 등록하기</h2>
            <from>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                이름
                            </TableCell>
                            <TableCell>
                                <input name="cname" type="text" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                생년월일
                            </TableCell>
                            <TableCell>
                                <input name="cbithday" type="date" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                성별
                            </TableCell>
                            <TableCell>
                                여성 <input name="cgender" type="radio" value="여성" />
                                남성 <input name="cgender" type="radio" value="남성" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                주소
                            </TableCell>
                            <TableCell>
                                <input name="addr" type="text" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colspan={2}>
                                <button type="submit">등록</button>
                                <button type="reset">취소</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </from>
        </div>
    );
}

export default CreateCustomer;