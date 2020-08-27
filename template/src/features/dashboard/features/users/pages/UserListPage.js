import React from 'react'
/* import { DataTable } from 'react-spine' */

const columns = [
	{
		id: 'name',
		label: 'Name'
	},
	{
		id: 'email',
		label: 'E-mail'
	},
]

const data = [
	{
		name: 'Silvan Ferreira da Silva Junior',
		email: 'sjrmiranda@gmail.com'
	},
	{
		name: 'Silvan Ferreira da Silva Junior',
		email: 'sjrmiranda@gmail.com'
	},
	{
		name: 'Silvan Ferreira da Silva Junior',
		email: 'sjrmiranda@gmail.com'
	},
]

const UserListPage = () => {
	return (
		<div>
			{/* <DataTable columns={columns} data={data} /> */}
			user list
		</div>
	);
}

export default UserListPage;