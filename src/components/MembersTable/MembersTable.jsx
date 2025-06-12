import React from 'react';
import ActionsButtons from '../ActionsButtons/ActionsButtons';

const MembersTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Name 1</td>
            <td>name1@email.com</td>
            <td>
              <ActionsButtons />
            </td>
          </tr>
          <tr>
            <td>Name 2</td>
            <td>name2@email.com</td>
            <td>
              <ActionsButtons />
            </td>
          </tr>
          <tr>
            <td>Name 3</td>
            <td>name3@email.com</td>
            <td>
              <ActionsButtons />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MembersTable;
