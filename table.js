class CRUDTable {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.data = [];
    }

    render() {
        this.container.innerHTML = `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.data.map((item, index) => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>
                                <button class="btn btn-primary m-2" onclick="crudTable.edit(${index})">Edit</button>
                                <button class="btn btn-danger m-2" onclick="crudTable.delete(${index})">Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class=" text-center">    
                    <button class="btn btn-warning" onclick="crudTable.create()">Add New</button>
            </div>
        `;
    }

    create() {
        const name = prompt("Enter name:");
        const email = prompt("Enter email:");
        this.data.push({ name, email });
        this.render();
    }

    edit(index) {
        const newName = prompt("Enter new name:", this.data[index].name);
        const newEmail = prompt("Enter new email:", this.data[index].email);
        this.data[index] = { name: newName, email: newEmail };
        this.render();
    }

    delete(index) {
        if (confirm("Are you sure you want to delete this item?")) {
            this.data.splice(index, 1);
            this.render();
        }
    }
}

const crudTable = new CRUDTable('app');
crudTable.render();