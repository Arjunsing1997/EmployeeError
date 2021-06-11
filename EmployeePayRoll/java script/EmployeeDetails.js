window.addEventListener('DOMContentLoaded', (event) =>
{
    createInnerHtml();
});

const createInnerHtml = () =>
{
    const headHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    const InnerHtml = `${headHtml}
    <tr>
        <td><img class="profile" alt="" src="../Images/male pic 2.jpeg">
        </td>
        <td>Narayan</td>
        <td>Male</td>
        <td><div class='dept-label'>HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>30000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete"
            src="../..">
            <img id="1" onclick="update(this)" 
            alt="edit" src="../..">
        </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = InnerHtml;
}