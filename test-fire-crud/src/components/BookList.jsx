import React from 'react'
import { Table } from 'react-bootstrap'

const BookList = () => {
  return (
    <div>
        <Table striped bordered size='sm'>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Test Book</td>
                    <td>Test Author</td>
                    <td>Available</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Test Book New</td>
                    <td>Test New Author</td>
                    <td>Not Available</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default BookList