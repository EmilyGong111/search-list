export const List = ({list, users}) => {
  return <table>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Manager</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(project => <tr key={project.id}>
          <td>{project.name}</td>
          <td>{users.find(user => user.id === project.personId)?.name || "unknown manager"}</td>
          {/* <td>{project.personName}</td> */}
        </tr>)
      }
    </tbody>
  </table>
}