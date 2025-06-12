import React from 'react';
import ActionsButtons from '../ActionsButtons/ActionsButtons';

const MembersTable = ({ members }) => {
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
          {members &&
            members.map((member) => {
              return (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>
                    <ActionsButtons />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MembersTable;
