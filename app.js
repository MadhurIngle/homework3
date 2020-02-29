const org1_depts = [
    {
        name: 'accounting',
        children: [
            {
                name: 'accounting payable',
                children: []
            },{
                name: 'accounting receivable', 
                children: []
            }
        ]
    },{
        name: 'finance',
        children: [],
    }
]

const org2_depts = [
    {
        name: 'accounting',
        children: [
            {
                name: 'accounting payable', 
                children: []
            },{
                name: 'accounting receivable',
                children: [
                    {
                        name: 'cash',
                        children: []
                    },{
                        name: 'check',
                        children: []
                    }
                ]
            }
        ]
    },{
        name: 'finance',
        children:[
            {
                name:'investment',
                children: []
            }
        ]
    }
]

function PrintDepts(depts, variable){
    var size = depts.length;
    var ulist = document.createElement('ul');
    var index = 0;
    ulist.id = "list";
    while(index < size) {
        var lst = document.createElement('li');
        lst.innerText = (depts[index].name);
        ulist.appendChild(lst);
        PrintDepts(depts[index].children, lst);
        index++;
    }
    variable.appendChild(ulist);
}
PrintDepts(org1_depts, document.getElementById('one'));
PrintDepts(org2_depts, document.getElementById('two'));