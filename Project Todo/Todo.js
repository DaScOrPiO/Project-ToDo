'use strict'

function todo() {
    let app = prompt('WELCOME! Add an Item? Enter (n) To Begin, Enter (q) To Quit');
    const todo = ['*****']; // constant Todo on list!
    while (app !== 'q' && app !== 'quit') { // Quitting The Action
        if (app === 'n') { // Adding A new Todo to list
            let newTodo = prompt('Enter A New Item');
            todo.push(newTodo);
            alert('Action Successful!😊')
        }
        else if (app === 'l') { // Listing Your Todo
            app = alert('Press The Ok Button To View Items In Console! ✔✔');
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i} ${todo[i]} On List`)
            }
        }
        else if (app === 'd') { // Delete Action
            let index = Number(prompt('Enter Index To Delete Item(s)'));
            let itemsNum = Number(prompt('Enter Amount of Items To Be Deleted NOTE: This Is From Point Index Selected'));
            if (!Number.isNaN(index) && !Number.isNaN(itemsNum)) {
                let deleted = todo.splice(index, itemsNum);
                alert(`${deleted} Binned! 🗑`);
            } else { index = alert('Action Failed😢 Please Enter A valid Number') }
        }
        else if (app === 'arr') {
            let index1 = Number(prompt('Enter Index Where You Want Item Added'));
            let amount = Number(prompt('Enter Amount Of Items To Be Removed NOTE: This Is From Point Index Selected')); // Subject To be Worked on
            let item = prompt('Enter Item To Add');
            if (!Number.isNaN(index1) && !Number.isNaN(amount)) {
                let ordered = todo.splice(index1, amount, item); // Subject To Be Worked On.
                alert(`${item} Added Sucessfully ✔`);
                alert(`${ordered}Index Replaced`)
            } else { app = alert(`Someting's Wrong!😑 Please Follow Instructions Accordingly!`) }
        }
        app = prompt('What Would You Like Todo? Commands Include: (n(New Item), (d(Delete item)), (l(List Items)), (arr(Add & Place Item In a Specific Index)))');
    }
    console.log('You Quit The Operation!')
    alert('Operation Ended😢')
}